import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';

const config = {
	key: 'root',
	storage,
	whitelist: ['client'],
};

const rootReducer = combineReducers({
	userReducer,
});

export default persistReducer(config, rootReducer);
