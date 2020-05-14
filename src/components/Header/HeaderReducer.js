import { SET_CATEGORY } from "./action";

 
 const initialState = {
     category: 'general'
 }
 export default function headerReducer(state= initialState, action){
     switch(action.type){
         case SET_CATEGORY:
             return {...state, category:action.payload}
        default:
            return state;
     }

 }