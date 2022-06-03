// Packages
import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

// CSS & Servcices
import './NavbarComponent.css';

// else
import logo from '../../../assets/banding/logo.svg';

class NavbarComponent extends React.Component {
    render() {
        return <Navbar className="NavbarComponent">
            <a href="./"><img src={logo} width="75px"></img></a>
        </Navbar>
    }
}

export default NavbarComponent;