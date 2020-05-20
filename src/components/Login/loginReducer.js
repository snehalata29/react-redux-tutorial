import { CHANGE_AUTH_STATUS ,CHANGE_NEWS_COUNTRY} from "./action";

const initialState ={
    auth: false,
    code: 'in' 
}

function loginReducer(state = initialState, action){
    switch(action.type){
        // case CHANGE_AUTH_STATUS:
        //     return {...state, auth: action.auth}
        case CHANGE_NEWS_COUNTRY:
            return {...state, code: action.payload}
        default:
            return state;
    }

}
export default loginReducer;