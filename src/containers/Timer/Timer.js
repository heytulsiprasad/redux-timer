import React, { Component, Fragment } from "react";
import Button from "../../components/Buttons/Button";
import Label from "../../components/Labels/Label";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: {
                curMin: 0,
                curSec: 0,
                curMilliSec: 0,
            },
        };
    }

    render() {
        let time;

        return (
            <Fragment>
                <div className="container mt-4 flex flex-col">
                    <div className="mx-auto py-4">
                        <span className="text-6xl">00:00:00</span>
                    </div>
                    <div className="mx-auto py-6 mt-4 flex flex-row space-x-5">
                        <Button>+</Button>
                        <Button>Start</Button>
                        <Button>Stop</Button>
                        <Button>Lap</Button>
                        <Button>Reset</Button>
                        <Button>-</Button>
                    </div>
                </div>
                <div className="container py-6">
                    <Label lapTime={"00:00:01"} />
                </div>
            </Fragment>
        );
    }
}

export default Timer;
