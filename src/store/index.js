import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(ReduxThunk))
);

export const persistor = persistStore(store)