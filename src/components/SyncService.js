import useWebSocket, { ReadyState } from 'react-use-websocket';

export default class SyncService {
    constructor(player) {
        this.player = player;
    }

    playVideo(){
        //alert('playVideo')
    }

    pauseVideo(){
        //alert('pauseVideo')
    }

    bufferVideo(args){
        this.player.seekTo(args)
    }

    changeVideoTime(){
        alert('changeVideoTime')
    }

    changeVideo(videoID){
        alert(videoID)
    }

}