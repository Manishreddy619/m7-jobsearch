import {
	ADD_COMPANY_TO_FAVORITES,
	REMOVE_COMPANY_FROM_FAVORITES,
} from '../actions';
import { intialstate } from '../store';
const favoriteReducer = (state = intialstate, action) => {
	switch (action.type) {
		case ADD_COMPANY_TO_FAVORITES: {
			return {
				...state,
				companies: {
					...state.companies,
					favorites: state.companies.favorites.concat(action.payload),
				},
			};
		}
		case REMOVE_COMPANY_FROM_FAVORITES: {
			return {
				...state,
				companies: {
					...state.companies,
					favorites: state.companies.favorites.filter(
						(com, i) => i !== action.payload,
					),
				},
			};
		}
		default:
			return state;
	}
};

export default favoriteReducer;
