import { createStore } from 'redux';
import favoriteReducer from '../reducers';

// -------------------------declare intial state----------
export const intialstate = {
	companies: {
		favorites: [],
	},
};

const configurestore = createStore(
	favoriteReducer,
	intialstate,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default configurestore;
