import {
	INCREMENT,
	DECREMENT,
	COUNTDOWN,
	COUNTDOWNATZERO,
	CREATELAP,
	REMOVELAP,
	RESET,
} from "./actions";

const initialState = { time: { h: 0, m: 0, s: 0 }, seconds: 0, laps: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				seconds: state.seconds + 60,
				time: action.secToTime(state.seconds + 60),
			};
		case DECREMENT:
			return {
				...state,
				seconds: state.seconds - 60,
				time: action.secToTime(state.seconds - 60),
			};
		case COUNTDOWN:
			return {
				...state,
				seconds: state.seconds - 1,
				time: action.secToTime(state.seconds - 1),
			};
		case COUNTDOWNATZERO:
			return {
				...state,
				seconds: 0,
				time: { h: 0, m: 0, s: 0 },
			};
		case CREATELAP:
			const newLaps = [...state.laps];
			return {
				...state,
				laps: newLaps.concat(state.time),
			};
		case REMOVELAP:
			return {
				...state,
				laps: state.laps.filter((item, index) => index !== action.id),
			};
		case RESET:
			return {
				time: { h: 0, m: 0, s: 0 },
				seconds: 0,
				laps: [],
			};
		default:
			return state;
	}
};

export default reducer;
