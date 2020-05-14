import {combineReducers} from 'redux';
import {MainReducer} from './container/Main';
import {HeaderReducer} from './components/Header';

export const rootreducer= combineReducers({MainReducer, HeaderReducer});