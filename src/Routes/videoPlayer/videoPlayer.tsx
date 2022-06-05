// Packages
import React, { useEffect } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useParams } from 'react-router-dom';
import { Button, Navbar, Container } from 'react-bootstrap';

// CSS & Servcices
import './videoPlayer.css';
import hTTPBackend from '../../services/httpBackend';
import SocketBackend from '../../services/wsBackend';

// else
import NavbarComponent from '../Components/Navbar/NavbarComponent';
import httpBackend from '../../services/httpBackend';

var player: any;
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
            if (response.status !== 200) {
                alert(response.message);
            }

        } else {
            setTimeout(init, 250);
        }
    }

    async function changeVideo() {
        let input = document.getElementById("videoID") as HTMLInputElement;
        let video_id = input.value;
        let response = await hTTPBackend.changeVideo(room_id, socketBackend.user_id, video_id);
        if (response.status !== 200) {
            alert(response.message);
            console.log(response);
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
        let time: Number = event.target.getCurrentTime();
        console.log(event);
        

        switch (event.data) {
            case -1:
                // VIDEO_CHANGE

                break;
            case 0:
                // VIDEO_END

                break;
            case 1:
                // PLAY
                httpBackend.changeState(room_id, socketBackend.user_id, false);
                break;
            case 2:
                // PAUSE
                httpBackend.changeState(room_id, socketBackend.user_id, true);
                break;
            case 3:
                httpBackend.changeTime(room_id, socketBackend.user_id, time);
                // CHANGE_TIME
                break;
        }
    }


    return (
        <div className="VideoPlayerRoute" onLoad={init}>
            <input id="videoID" placeholder='VIDEO ID'/>
            <button onClick={changeVideo}>CHANGE</button>
            <NavbarComponent />
            <YouTube
                className='videoPlayer'
                videoId='5mGuCdlCcNM'
                opts={_opts}
                onReady={_onReady}
                onStateChange={_onStateChange}
            />
        </div>
    )
}

export default VideoPlayerRoute;