import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import logo from './logo.svg';

import { connect } from "react-redux";
import { Button } from 'react-bootstrap';

// import {useSelector, useDispatch} from "react-redux";


class App extends Component{
  // const appState = useSelector(state=>state.reducer);
  // // new way to use mapstatetoprops
  //   const dispatch = useDispatch();
 
  render(){
    const {dog,error,fetching,onRequestDog} = this.props;
    return(
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <Button disabled>Fetching...</Button>
        ) : (
          <Button onClick={onRequestDog}>Request a Dog</Button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    )
  }
}
  const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



