// Packages
import React from 'react';
import YouTube from "react-youtube";
import { Button, Navbar, Container } from 'react-bootstrap';

// CSS & Servcices
import './videoPlayer.css';

// else
import NavbarComponent from '../Components/Navbar/NavbarComponent';

export default class VideoPlayerRoute extends React.Component {

    /**
     * @name opts
     * @description Options for the YouTube player
     */
    private opts: Object = {
        height: 480,
        width: 853,
        playerVars: {
            controls: 1,
            autoplay: 1
        }
    }

    /**
     * @name onReady
     * @description Callback when the YouTube player is ready
     * @param event 
     */
    private _onReady(event: any): void {
        console.log(event)
    }

    /**
     * @name onStateChange
     * @description Callback when the YouTube player state changes
     * @param event 
     */
    private onStateChange(event: any): void {
        console.log(event.target.getCurrentTime())
    }


    render() {
        return <div className="VideoPlayerRoute">
            <NavbarComponent/>
            <YouTube
            className='videoPlayer'
            opts={this.opts}
            onReady={this._onReady}
            onStateChange={this.onStateChange}
            />
        </div>
    }
}
