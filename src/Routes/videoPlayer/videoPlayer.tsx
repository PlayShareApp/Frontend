// Packages
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useParams } from 'react-router-dom';
import { Button, Navbar, Container } from 'react-bootstrap';

// CSS & Servcices
import './videoPlayer.css';
import HTTPBackend from '../../services/httpBackend';
import SocketBackend from '../../services/wsBackend';

// else
import NavbarComponent from '../Components/Navbar/NavbarComponent';

const hTTPBackend = new HTTPBackend();
new SocketBackend();

const VideoPlayerRoute = () => {
    function init() {
        let roomid: any = room_id
        let userid: any = localStorage.getItem('localUserID');

        hTTPBackend.joinRoom(roomid, userid);
    }

    /**
     * @name opts
     * @description Options for the YouTube player
     */
    let _opts: Object = {
        height: 480,
        width: 853,
        playerVars: {
            controls: 1,
            autoplay: 1
        }
    };

    const { room_id } = useParams();

    /**
     * @name onReady
     * @description Callback when the YouTube player is ready
     * @param event 
     */
    function _onReady(event: any): void {
        console.log(event)
    }

    /**
     * @name onStateChange
     * @description Callback when the YouTube player state changes
     * @param event 
     */
    function _onStateChange(event: any): void {
        console.log(event)
    }

    return (
        <div className="VideoPlayerRoute" onLoad={init}>
            <h1>{room_id}</h1>
            <NavbarComponent />
            <YouTube
                className='videoPlayer'
                videoId='Np_YDbq9iBs'
                opts={_opts}
                onReady={_onReady}
                onStateChange={_onStateChange}
            />
        </div>
    )
}

export default VideoPlayerRoute;