import { combineReducers } from 'redux';
import authReducer from './authReducer';
import permissoesReducer from './permissoesReducer';
import clientesReducer from './clientesReducer';

export default combineReducers({
	authReducer,
	permissoesReducer,
	clientesReducer
});
