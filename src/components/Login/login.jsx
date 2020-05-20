import React, {useState} from 'react';
import { Modal , Button, Form} from 'react-bootstrap';
import { useReducer } from 'react';
import { CHANGE_PWD, CHANGE_EMAIL, TOGGLE_VISIBILITY } from './action';
import { Switch, Route, withRouter } from 'react-router';
// import Settings from './setting/setting';
// import {useDispatch} from 'react-redux';

const initialState={
  email : '',
  pwd: '',
  showModal: true
}

// new way to handle state in functional component
function loginStateReducer(state, action){
  switch(action.type){
    case CHANGE_EMAIL:
      return {...state, email: action.payload};
    case CHANGE_PWD: 
      return {...state, pwd: action.payload};
      case TOGGLE_VISIBILITY:
        return{...state, showModal:action.payload}
    default: 
      return state;
  }
}

const Login = (props) => {
  const [state, dispatch] = useReducer(loginStateReducer, initialState);
  
    const handleClose = () =>props.history.push('/');

    const handleChange = (type,payload)=>{
      console.log(state, payload);
      dispatch({type,payload})
    }

    const handleSubmit = ()=>{
      if(state.email && state.pwd){
         dispatch({type:TOGGLE_VISIBILITY, payload: false})
        props.history.push('/login/settings');
        // globalDispatch({type: CHANGE_AUTH_STATUS, auth: true})
      }else{
        // globalDispatch({type: CHANGE_AUTH_STATUS, auth: false})
      }
    }

    return (
      <>
        <Modal show= {state.showModal} onHide={handleClose} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email" 
                placeholder="Enter email" 
                value={state.email}
                onChange={(e)=>{handleChange(CHANGE_EMAIL, e.target.value)}}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Password" 
                value={state.pwd}
                onChange={(e)=> {handleChange(CHANGE_PWD, e.target.value)}}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button 
            variant="primary" 
            onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
            
          </Modal.Footer>
        </Modal>
      </>)
   
}
export default withRouter(Login);