// Packages
import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';

// CSS & Servcices
import './NavbarComponent.css';

// else
import logo from '../../../assets/banding/logo.svg';

const NavbarComponent = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }

    return (
        <Navbar className="NavbarComponent">
            <a onClick={navigateHome}><img src={logo} width="75px"></img></a>
        </Navbar>
    )
}

export default NavbarComponent;