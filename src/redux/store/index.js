import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from '../reducers';

const persistedReducer = persistReducer({
	key: 'root',
	storage: AsyncStorage,
	timeout: null
}, reducers);

const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));

const persistor = persistStore(store);

export { store, persistor }