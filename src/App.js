import React,{Component} from 'react';

import './App.css';
import { connect } from "react-redux";
import {useSelector, useDispatch} from "react-redux";
import {updateDocTypeStepId, appAddDocType} from './action';

const App = ()=> {
  const appState = useSelector(state=>state.reducer);
  
    // const fetching = useSelector(state => state.reducer.fetching);
    // const error = useSelector(state => state.reducer.error);
    const dispatch = useDispatch();
    // console.log(updateDocTypeStepId(2));
    // console.log(appAddDocType({name: '123'}));
    return(
      <div className="App">
        <header className="App-header">
          <img src={appState.dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Saga</h1>
        </header>

        {appState.dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {appState.fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={()=>dispatch({ type: "API_CALL_REQUEST" })}>Request a Dog</button>
        )}

        {appState.error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    )
  }

// const mapStateToProps = state => {
//   return {
//     fetching: state.fetching,
//     dog: state.dog,
//     error: state.error
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

