import React, {useState} from 'react';
import { Modal , Button, Form} from 'react-bootstrap';
import { useReducer } from 'react';
import { CHANGE_PWD, CHANGE_EMAIL } from './action';

const initialState={
  email : '',
  pwd: ''
}

// new way to handle state in functional component
function loginStateReducer(state, action){
  switch(action.type){
    case CHANGE_EMAIL:
      return {...state, email: action.payload};
    case CHANGE_PWD: 
      return {...state, pwd: action.payload};
    default: 
      return state;
  }

}

const Login = (props) => {
  const [state, dispatch] = useReducer(loginStateReducer, initialState);
  
    const handleClose = () =>props.history.push('/');
    const handleChange = ()=>{
      
    }
  
    return (
      <>
        <Modal show= '{true}' onHide={handleClose} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={()=>{handleChange( )}} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>)
   
}
export default Login;