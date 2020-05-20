import axios from 'axios';
// import {NEWS_API_KEY} from '../../config'
import { takeLatest, call, put, select } from "redux-saga/effects";
import{FETCH_NEWS_DATA, FETCH_NEWS_DATA_ERROR, REQUEST_NEWS_DATA} from './action';
import {category, code} from './selector';

let selectedcat;
let selectedcode;
export default function* watcherSaga(){
    yield takeLatest(REQUEST_NEWS_DATA, handleRequest);
}

function requestnewsData(){
    return axios({
        mathod: 'get',
        url: './mockdata.json'
        //url : `https://newsapi.org/v2/top-headlines?country=in&category=${selectedcat}&apiKey=${NEWS_API_KEY}`
    })
}

 function* handleRequest(){
    try{
        selectedcat = yield select(category);
        selectedcode = yield select(code);
        console.log(selectedcat, selectedcode)
        let response = yield call(requestnewsData);
         yield put({ type: FETCH_NEWS_DATA, payload:response.data.articles});
        //yield put({ type: FETCH_NEWS_DATA, payload:[]})
    }catch(error){
        yield put({ type: FETCH_NEWS_DATA_ERROR, error})
    }

}