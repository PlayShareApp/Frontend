export default class HTTPBackend {
    private url!: string;
    private mode = "development";

    constructor() {
        if (this.mode == "development") {
            this.url = "http://localhost:3002/a/";
            console.log("Running in development mode.");
        } else if (this.mode == "production") {
            this.url = "https://jnsaph.com/";
            console.log("Running in production mode.");
        }
    }

    /**
     * @name createRoom
     * @description Used to create a room on the backend.
     * @returns Object containg room_id and users Array
     */
    public async createRoom() {
        let request = await fetch(this.url + "create_r", {
            method: "POST",
            headers: {}
        });
        let response = await request.json()
        return response
    }

    /**
     * @name joinRoom
     * @description Used to join a room on the backend.
     * @param room_id 
     * @param user_id Get user_id from connecting to websocket.
     * @returns API Response
     */
    public async joinRoom(room_id: string, user_id: string) {
        let request = await fetch(this.url + "join_r", {
            method: "POST",
            headers: {
                "room_id": room_id,
                "user_id": user_id
            }
        });
        let response = await request.json()
        return response
    }

    /**
     * @name changeVideo
     * @description Used to change the video on the backend. 
     * @param room_id 
     * @param user_id Get user_id from connecting to websocket.
     * @param video_id 
     * @returns API Response
     */
    public async changeVideo(room_id: string, user_id: string, video_id: string) {
        let request = await fetch(this.url + "change_v", {
            method: "POST",
            headers: {
                "room_id": room_id,
                "user_id": user_id,
                "video_id": video_id
            }
        });
        let response = await request.json()
        return response
    }

    /**
     * @name changeVideo
     * @description Used to change the video on the backend.
     * @param room_id 
     * @param user_id Get user_id from connecting to websocket.
     * @param time 
     * @returns 
     */
    public async changeTime(room_id: string, user_id: string, time: string) {
        let request = await fetch(this.url + "change_v", {
            method: "POST",
            headers: {
                "room_id": room_id,
                "user_id": user_id,
                "time": time
            }
        });
        let response = await request.json()
        return response
    }

    public changeState(room_id: string, user_id: string, state: string) {
        let request = fetch(this.url + "change_s", {
            method: "POST",
            headers: {
                "room_id": room_id,
                "user_id": user_id,
                "state": state
            }
        });
        return request
    }
}