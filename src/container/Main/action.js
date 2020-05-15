export const FETCH_NEWS_DATA = 'FETCH_NEWS_DATA';
export const FETCH_NEWS_DATA_ERROR ='FETCH_NEWS_DATA_ERROR';
export const REQUEST_NEWS_DATA = 'REQUEST_NEWS_DATA';

export const test=(payload)=>{
    return {
        type: 'TEST',
        payload
    }
}