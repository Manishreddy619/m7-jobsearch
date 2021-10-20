export const ADD_COMPANY_TO_FAVORITES = 'ADD_COMPANY_TO_FAVORITES';
export const REMOVE_COMPANY_FROM_FAVORITES = 'REMOVE_COMPANY_FROM_FAVORITES';

export const addToFavoritesAction = (company) => ({
	type: ADD_COMPANY_TO_FAVORITES,
	payload: company,
});
export const removeFromFavoritesAction = (index) => ({
	type: REMOVE_COMPANY_FROM_FAVORITES,
	payload: index,
});
