import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import favoriteReducer from '../reducers';
import jobSearchReducer from '../reducers/jobSearch';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
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
const persistConfig = {
	key: 'root',
	storage: localStorage,
	transforms: [
		encryptTransform({
			secretKey: process.env.REACT_APP_SECRET_KEY,
			// the secret key will be used for encrypt/decrypt the stringified version of your redux
			// store saved in the engine of choice
			onError: (error) => {
				console.log(error);
			},
		}),
	],
};
const bigReducer = combineReducers({
	companies: favoriteReducer,
	data: jobSearchReducer,
});
const persistedReducer = persistReducer(persistConfig, bigReducer);
const configurestore = createStore(
	persistedReducer,
	intialstate,
	composeEnhancers(applyMiddleware(thunk)),
);
const persistor = persistStore(configurestore);
export { configurestore, persistor };
