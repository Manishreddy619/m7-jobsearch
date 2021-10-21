import {
	ADD_COMPANY_TO_FAVORITES,
	REMOVE_COMPANY_FROM_FAVORITES,
} from '../actions';
import { intialstate } from '../store';
const favoriteReducer = (state = intialstate.companies, action) => {
	switch (action.type) {
		case ADD_COMPANY_TO_FAVORITES: {
			return {
				...state,
				favorites: state.favorites.concat(action.payload),
			};
		}
		case REMOVE_COMPANY_FROM_FAVORITES: {
			return {
				...state,
				favorites: state.favorites.filter((com, i) => i !== action.payload),
			};
		}
		default:
			return state;
	}
};

export default favoriteReducer;
