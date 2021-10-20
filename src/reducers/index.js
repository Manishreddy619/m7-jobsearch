import { ADD_COMPANY_TO_FAVORITES } from '../actions';
import { intialstate } from '../store';
const favoriteReducer = (state = intialstate, action) => {
	switch (action.type) {
		case ADD_COMPANY_TO_FAVORITES: {
			return {
				...state,
				companies: {
					favorites: state.companies.favorites.concat(action.payload),
				},
			};
		}
		default:
			return state;
	}
};

export default favoriteReducer;
