import {combineReducers} from 'redux';
import {MainReducer} from './container/Main';
import {HeaderReducer} from './components/Header';
import {LoginReducer} from './components/Login'


export const rootreducer= combineReducers({MainReducer, HeaderReducer, LoginReducer});