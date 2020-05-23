import React ,{useContext} from 'react';

import './Header.css';

import { Nav, Row,Button } from 'react-bootstrap';
import { SET_CATEGORY } from './action';
import {useDispatch} from 'react-redux';
import { REQUEST_NEWS_DATA } from '../../container/Main/action';
import { withRouter } from 'react-router';
import {MyContext} from '../../App';

const Header = (props)=>{
  const dispatch = useDispatch();
  // const appState = useSelector(state => state.HeaderReducer.category);

  const requestSelectedCategoryData =(cat)=>{
    dispatch({type:SET_CATEGORY, payload: cat });
    dispatch({type: REQUEST_NEWS_DATA});
  }
  const redirectToLogin=()=>{
    props.history.push('./login');
  }
  const context = useContext(MyContext);
      return(
        <>
        {console.log('access context using other method', context)}
        <MyContext.Consumer>
          {value =>( 
          <>
            {console.log('access context using consumer',value)}

          <Row>
            <header className="newsMainHeader">
              <div>
              <Nav fill variant="tabs" defaultActiveKey="general">
                <Nav.Item>
                  <Nav.Link eventKey="general" onClick={()=>requestSelectedCategoryData('general')}>Home</Nav.Link> 
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Sports" onClick={()=>requestSelectedCategoryData('sport')}>Sports</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Business" onClick={()=>requestSelectedCategoryData('business')}>Business</Nav.Link>
                </Nav.Item>
                  <Nav.Item><Nav.Link eventKey="Enatrtainment" onClick={()=>requestSelectedCategoryData('entertainment')}>Enatrtainment </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Technology" onClick={()=>requestSelectedCategoryData('technology')}>Technology</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Health" onClick={()=>requestSelectedCategoryData('health')}>Health</Nav.Link>
                </Nav.Item>
              </Nav>
              </div>
              <div className="adminModule">
                <Button className="loginButton" onClick={redirectToLogin}>Login</Button>
              </div>
            </header>
          </Row>
          </>
          )}
        </MyContext.Consumer>
      </>
    )
  }
  

export default withRouter(Header);



