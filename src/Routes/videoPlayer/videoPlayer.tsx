// Packages
import React, { useEffect } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useParams } from 'react-router-dom';
import { Button, Navbar, Container } from 'react-bootstrap';

// CSS & Servcices
import './videoPlayer.css';
import HTTPBackend from '../../services/httpBackend';
import SocketBackend from '../../services/wsBackend';

// else
import NavbarComponent from '../Components/Navbar/NavbarComponent';

var player: any;
const hTTPBackend = new HTTPBackend();
const socketBackend = new SocketBackend()

const VideoPlayerRoute = () => {
    /** 
     * @description Array for Params
     */
    const { room_id } = useParams();
    
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

    /**
     * @name init
     * @description Gets called once the DOM is loaded. Connects user to the room.
     */
    async function init() {
        if (typeof socketBackend.user_id !== "undefined") {
            let response = await hTTPBackend.joinRoom(room_id, socketBackend.user_id);
            if(response.status !== 200) {
                alert(response.message);
            }
            
        } else {
            setTimeout(init, 250);
        }
    }

    /**
     * @name onReady
     * @description Callback when the YouTube player is ready
     * @param event 
     * player.seekTo(s);
     * player.pauseVideo();
     * player.playVideo();
     */
    async function _onReady(event: any) {
        player = event.target;
        await socketBackend.setPlayer(event.target);
        global.player = player
    }

    /**
     * @name onStateChange
     * @description Callback when the YouTube player state changes
     * @param event 
     */
    function _onStateChange(event: any): void {
        //console.log(event)
    }


    return (
        <div className="VideoPlayerRoute" onLoad={init}>
            <NavbarComponent />
            <p>ROOM: {room_id}</p>
            <p>USER: {socketBackend.user_id}</p>
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