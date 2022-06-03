// Packages
import React from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';

// CSS & Servcices
import './videoPlayer.css';

// else
import NavbarComponent from '../Components/Navbar/NavbarComponent';

export default class VideoPlayerRoute extends React.Component {
    render() {
        return <div className="VideoPlayerRoute">
            <NavbarComponent/>
            <h1>Imagine this being finished</h1>
        </div>
    }
}
