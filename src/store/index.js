import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import favoriteReducer from '../reducers';
import jobSearchReducer from '../reducers/jobSearch';
import thunk from 'redux-thunk';
// -------------------------declare intial state----------
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const intialstate = {
	companies: {
		favorites: [],
	},
	data: {
		stock: [],
	},
};
const bigReducer = combineReducers({
	companies: favoriteReducer,
	data: jobSearchReducer,
});
const configurestore = createStore(
	bigReducer,
	intialstate,
	composeEnhancers(applyMiddleware(thunk)),
);
export default configurestore;
