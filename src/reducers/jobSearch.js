import { GET_JOBSEARCH_DATA } from '../actions';
import { intialstate } from '../store';
const jobSearchReducer = (state = intialstate.data, action) => {
	switch (action.type) {
		case GET_JOBSEARCH_DATA: {
			return {
				...state,
				stock: action.payload,
			};
		}
		default:
			return state;
	}
};
export default jobSearchReducer;
