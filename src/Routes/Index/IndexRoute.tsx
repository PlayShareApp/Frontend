// Packages
import React from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';

// CSS & Servcices
import './IndexRoute.css';

// else
import NavbarComponent from '../Components/Navbar/NavbarComponent';

export default class IndexRoute extends React.Component {
    render() {
        return <div className="IndexRoute">
            <NavbarComponent/>
            <div className='mainContent'>
                <h1 className='header'>PlayShare</h1>
                <h2 className='subheader'>Watch videos with your friends in a way that works.</h2>
                <Button>Create Room</Button>
            </div>
        </div>
    }
}
