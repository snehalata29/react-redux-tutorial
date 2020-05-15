
import {FETCH_NEWS_DATA,FETCH_NEWS_DATA_ERROR , REQUEST_NEWS_DATA} from './action';

const initialState ={
    topHeadLines: [],
    fetching: false,
    error: false,
    test: 'test now'
}
export default function MainReducer(state = initialState, action){
    switch(action.type){
        case REQUEST_NEWS_DATA:
            return {...state, fetching: true}
        case FETCH_NEWS_DATA:
            return {...state, fetching: false,topHeadLines: action.payload}
        case FETCH_NEWS_DATA_ERROR:
            return {...state, fetching: false, error: true}
        case 'TEST':
            return {...state, test: action.payload}
        default:
            return state;
        
    }
}