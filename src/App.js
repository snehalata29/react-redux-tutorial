import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { Container} from 'react-bootstrap';
import {Main} from './container/Main';
import LoginContainer from './container/login/login';

const webSiteInfo = {
  name: 'newsApp',
  copyrights: 'https://www/newsApi.com'
}

export const MyContext = React.createContext('no val')

class App extends Component{
  render(){
      return(
      <>
        <MyContext.Provider value={webSiteInfo}>
        <Router>
          <Container className="container">   
          <Route path='' component={Main}/>
            <Route path='/articles' component={Main} />
            <Route path='/login' component={LoginContainer} /> 
          </Container> 
        </Router>
        </MyContext.Provider>
      </>
    )
  }
}
 

export default App;



