import React, { useState } from 'react';
import YouTube from "react-youtube";

import './Home.css';

// @mui Components
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { blue, green, orange } from '@mui/material/colors';
import { MdPlayArrow, MdPause } from "react-icons/md";
import Slider from '@mui/material/Slider';

// Services
import SyncService from '../../components/SyncService';

const Home = () => {

    // System Vars
    var player;
    var sync;
    var roomCode;
    var videoData;

    const opts = {
        height: '480',
        width: '854',
        playerVars: {
            controls: 1,
            autoplay: 1
        }
    }

    // User List
    var userList = [
        {
            id: 1,
            name: "John Doe",
            color: blue[500]
        }
    ]

    function _onReady(event) {
        player = event.target;
        sync = new SyncService(player);
        window.player = player
    }

    /**
     * -1 (unstarted)
     * 0 (ended)
     * 1 (playing)
     * 2 (paused)
     * 3 (buffering)
     * 5 (video cued)
     */
    function onStateChange(event) {
        switch (event.data) {
            case -1:
                console.log('unstarted');
                sync.pauseVideo();
                break;
            case 0:
                console.log('ended');
                //sync.pauseVideo();
                break;
            case 1:
                console.log('playing');
                sync.playVideo();
                break;
            case 2:
                console.log('paused');
                sync.pauseVideo();
                break;
            case 3:
                console.log('buffering');
                sync.bufferVideo(player.getCurrentTime());
                break;
            case 5:
                console.log('video cued');
                break;
            default:
                break;
        }
    }

    /**
     * Gets executed everytime Server says a new User has joined the room
     */
    var totalUsers = 2;
    function onUserJoin(){
    }

    function setNewVideo(){
        let input = document.querySelector('#newVideoURL').value
        let videoID = input.split('v=')[1];
        player.loadVideoById(videoID)
        sync.changeVideo(videoID)
    }

    
    return (
        <div>
            <div className="home_sidenav">
                <Avatar onClick={onUserJoin} sx={{ bgcolor: blue[500], width: 50, height: 50 }}>J</Avatar>
                <Chip label={totalUsers + " Users"} size="small" variant="outlined" />

                <Avatar sx={{ bgcolor: blue[500], width: 50, height: 50 }}>A</Avatar>
            </div>

            
            <div className="home_mainContent">

                <div className="home_urlInputArea">
                    <input id="newVideoURL" placeholder='Youtube Video URL'/>
                    <button onClick={setNewVideo}><MdPlayArrow/></button>
                </div>

                <Grid className="home_videoLeftW" container spacing={0}>
                    <Grid item md={8} className="home_videoPlayerWrapper">
                            <YouTube
                                className="home_videoPlayer"
                                videoId="Np_YDbq9iBs"
                                opts={opts}
                                onReady={_onReady}
                                onStateChange={onStateChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <p>Item</p>
                    </Grid>
                </Grid>


            </div>
        </div>
    )
}
export default Home;