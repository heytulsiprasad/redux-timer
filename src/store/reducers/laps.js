import { CREATELAP, REMOVELAP, RESETLAPS } from "../actions";

const initialState = { laps: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATELAP:
			const newLaps = [...state.laps];
			return {
				...state,
				laps: newLaps.concat(action.time),
			};
		case REMOVELAP:
			return {
				...state,
				laps: state.laps.filter((item, index) => index !== action.id),
			};
		case RESETLAPS: {
			return {
				...state,
				laps: [],
			};
		}
		default:
			return state;
	}
};

export default reducer;
