import React, {useState}from 'react';
import {Modal, Dropdown, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {CHANGE_NEWS_COUNTRY} from '../action';

const countryValues = [ 
    {
        code:'ae',
        name : 'United Arab Emirates (the)'
    },{
        code:'ch',
        name: 'Switzerland'
    },{
        code: 'us',
        name: 'United States of America (the)'
    },
    {
        code: 'in',
        name: 'India'
    }
 ]


const Settings =(props)=>{
    const dispatch = useDispatch();
    
    const [selectedCountry, setSelectedCountry]= useState(countryValues[3]);
    const [show, setShow] = useState(true);

    const handleSubmit =()=>{
        handleClose();
        dispatch({type: CHANGE_NEWS_COUNTRY, payload: selectedCountry.code})
    }

    const handleSelection=(code, name)=>{
        setSelectedCountry({code, name})
    }

    const handleClose =()=> {setShow(false);
        props.history.push('/');
    };

    return (

        <Modal show={show} centered blackdrop='static' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedCountry.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    countryValues.map((country)=>{
                        return <Dropdown.Item onClick={()=>{handleSelection(country.code, country.name)}} key={country.code}>{country.name}</Dropdown.Item>
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Settings;