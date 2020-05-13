
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};


// const reducer = handleActions(
//   {
//     [API_CALL_REQUEST]: (state, action) => ({
//       ...state, fetching: true, error: null
//   }),
//   [API_CALL_SUCCESS]: (state, action) => ({
//     ...state, fetching: false, dog: action.dog
//   }),
//    [API_CALL_FAILURE]: (state, action) => ({
//     ...state, fetching: false, dog: null, error: action.error 
// }),
//   },
//   initialState
//   );

//  export const configureDataReducer = combineReducers({
//     reducer
//   });
  
export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}