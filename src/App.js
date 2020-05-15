import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { Container} from 'react-bootstrap';
import {Main} from './container/Main';

class App extends Component{
  render(){
      return(
      <>
        <Router>
          <Container className="container">   
            <Route path='' component={Main}/>  
          </Container> 
        </Router>
      </>
    )
  }
}
 

export default App;



