// Packages
import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Button, Navbar, Container } from 'react-bootstrap';

// CSS & Servcices
import './IndexRoute.css';

// else
import NavbarComponent from '../Components/Navbar/NavbarComponent';

const IndexRoute = () => {
    const navigate = useNavigate();

    const navigateCreateRoom = () => {
        navigate('/createRoom');
    }

    return (
        <div className="IndexRoute">
            <NavbarComponent/>
            <div className='mainContent'>
                <h1 className='header'>PlayShare</h1>
                <h2 className='subheader'>Watch videos with your friends in a way that works.</h2>
                <Button onClick={navigateCreateRoom}>Create Room</Button>
            </div>
        </div>
    )
}

export default IndexRoute;