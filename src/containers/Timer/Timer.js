import React, { Component, Fragment } from "react";
import Button from "../../components/Buttons/Button";
import Label from "../../components/Labels/Label";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { time: { h: 0, m: 0, s: 0 }, seconds: 0, laps: [] };

        this.timer = 0;

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.lapTimer = this.lapTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.incTimer = this.incTimer.bind(this);
        this.decTimer = this.decTimer.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            h: hours,
            m: minutes,
            s: seconds,
        };
        return obj;
    }

    incTimer() {
        if (this.state.seconds >= 0)
            this.setState((prevState) => ({
                seconds: prevState.seconds + 60,
                time: this.secondsToTime(prevState.seconds + 60),
            }));
    }

    decTimer() {
        if (this.state.seconds > 61 || this.timer === 0)
            this.setState((prevState) => ({
                seconds: prevState.seconds - 60,
                time: this.secondsToTime(prevState.seconds - 60),
            }));
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Removing a sec and setting state to re-render
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero
        if (seconds === 0) {
            clearInterval(this.timer);
            this.setState({
                time: { h: 0, m: 0, s: 0 },
                seconds: 0,
            });
        }
    }

    stopTimer() {
        if (this.timer !== 0 && this.state.seconds !== 0) {
            clearInterval(this.timer);
            this.timer = 0;
        }
    }

    lapTimer() {
        if (this.timer !== 0 && this.state.seconds !== 0) {
            const newLaps = [...this.state.laps];

            this.setState((prevState) => {
                return {
                    laps: newLaps.concat(prevState.time),
                };
            });
        }
    }

    removeLap(id) {
        const laps = this.state.laps;
        this.setState({ laps: laps.filter((item, index) => index !== id) });
    }

    resetTimer() {
        this.setState({
            time: { h: 0, m: 0, s: 0 },
            seconds: 0,
            laps: [],
        });

        if (this.timer !== 0) {
            clearInterval(this.timer);
        }
    }

    timeFormatter(time) {
        let { h, m, s } = time;

        if (h.toString().length < 2) h = `0${h}`;

        if (m.toString().length < 2) m = `0${m}`;

        if (s.toString().length < 2) s = `0${s}`;

        return { h, m, s };
    }

    render() {
        let { h, m, s } = this.timeFormatter(this.state.time);
        let laps = null;

        if (this.state.laps.length !== 0)
            laps = this.state.laps.map((lap, id) => {
                let { h, m, s } = this.timeFormatter(lap);
                return <Label clicked={() => this.removeLap(id)} key={id} lapTime={`${h}:${m}:${s}`} />;
            });

        return (
            <Fragment>
                <div className="container mt-4 flex flex-col">
                    <div className="mx-auto py-4">
                        <span className="text-6xl">
                            {h}:{m}:{s}
                        </span>
                    </div>
                    <div className="mx-auto py-6 mt-4 flex flex-row space-x-5">
                        <Button clicked={this.incTimer}>+</Button>
                        <Button clicked={this.startTimer}>Start</Button>
                        <Button clicked={this.stopTimer}>Stop</Button>
                        <Button clicked={this.lapTimer}>Lap</Button>
                        <Button clicked={this.resetTimer}>Reset</Button>
                        <Button clicked={this.decTimer}>-</Button>
                    </div>
                </div>
                <div className="container py-6">{laps}</div>
            </Fragment>
        );
    }
}

export default Timer;
