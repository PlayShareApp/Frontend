import HTTPBackend from "./httpBackend";

export default class SocketBackend {

    private url!: string;
    private mode = "development";

    private videoSocket: WebSocket;
    private player: any;

    public user_id: string;
    room_id: any;

    constructor() {
        if (this.mode == "development") {
            this.url = "ws://localhost:1213";
            console.log("Running in development mode.");
        } else if (this.mode == "production") {
            this.url = "https://jnsaph.com/";
            console.log("Running in production mode.");
        }

        this.videoSocket = new WebSocket(this.url);
        this.videoSocket.onmessage = (event) => {
            let data = JSON.parse(event.data);           

            switch (data.METHOD_NAME) {
                case "HELLO_WORLD":
                    this.HELLO_WORLD(data);
                    break;
                case "JOIN_ROOM":
                    this.JOIN_ROOM(data);
                    break;
                case "JOIN_ROOM_SUCCESS":
                    this.JOIN_ROOM_SUCCESS(data);
                    break;
                case "PLAY":
                    this.PLAY(data);
                    break;
                case "PAUSE":
                    this.PAUSE(data);
                    break;
                case "CHANGE_VIDEO":
                    this.CHANGE_VIDEO(data);
                    break;
                case "VIDEO_END":
                    this.VIDEO_END(data);
                    break;
                case "CHANGE_TIME":
                    this.CHANGE_TIME(data);
                    break;
            }

        }
    }

    public setPlayer(player: any) {
        this.player = player
    }

    private async HELLO_WORLD(data: any) {
        this.user_id = data.PARAMS.id
    }

    private JOIN_ROOM(data: any) {
        alert("NEW USER JOINED" + JSON.stringify(data));
    }

    private JOIN_ROOM_SUCCESS(data: any) {
        alert("YOU JOINED A ROOM");
    }

    private PLAY(data: any) {
        let time: number = data.PARAMS.TIME;
        this.player.playVideo();
    }

    private PAUSE(data: any) {
        this.player.pauseVideo();
    }

    private CHANGE_VIDEO(data: any) {
        let video: string = data.PARAMS.VIDEO_ID;
        this.player.cueVideoById(video);
        
    }

    private VIDEO_END(data: any) {
        alert("Not implemented");
    }

    private CHANGE_TIME(data: any) {
        let time: number = data.PARAMS.TIME;
        this.player.seekTo(time);        
    }
}