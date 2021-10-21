import { api } from '../utilis/fetches';

export const ADD_COMPANY_TO_FAVORITES = 'ADD_COMPANY_TO_FAVORITES';
export const REMOVE_COMPANY_FROM_FAVORITES = 'REMOVE_COMPANY_FROM_FAVORITES';
export const GET_JOBSEARCH_DATA = 'GET_JOBSEARCH_DATA';

export const addToFavoritesAction = (company) => ({
	type: ADD_COMPANY_TO_FAVORITES,
	payload: company,
});
export const removeFromFavoritesAction = (index) => ({
	type: REMOVE_COMPANY_FROM_FAVORITES,
	payload: index,
});

export const getJobDataThunk = () => {
	return async (dispath, action) => {
		console.log('getting data............from api');
		try {
			const apiResp = await fetch(api, {
				method: 'GET',
			});
			if (apiResp.ok) {
				let jobs = await apiResp.json();
				console.log(jobs.data);
				dispath({
					type: GET_JOBSEARCH_DATA,
					payload: jobs.data,
				});
			} else if (apiResp.status > 400 && apiResp.status < 500) {
				throw new Error('Client Side Error');
			} else if (apiResp.status > 500) {
				throw new Error('Server Side Error');
			}
		} catch (err) {
			throw err;
		}
	};
};
