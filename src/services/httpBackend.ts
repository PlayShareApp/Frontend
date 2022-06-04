var mode;

if (mode == "development") {
    var url = "http://localhost:3002/a/";
    console.log("Running in development mode.");
} else if (mode == "production") {
    var url = "https://jnsaph.com/";
    console.log("Running in production mode.");
}


export default {
    /**
     * @name createRoom
     * @description Used to create a room on the backend.
     * @returns Object containg room_id and users Array
     */
    async createRoom() {
        let request = await fetch(url + "create_r", {
            method: "POST",
            headers: {}
        });
        let response = await request.json()
        return response
    },

    /**
     * @name joinRoom
     * @description Used to join a room on the backend.
     * @param room_id 
     * @param user_id Get user_id from connecting to websocket.
     * @returns API Response
     */
    async joinRoom(room_id: string, user_id: string) {
        console.log(url + "join_r");
        
        let request = await fetch(url + "join_r", {
            method: "POST",
            headers: {
                "room_id": room_id,
                "user_id": user_id
            }
        });
        let response = await request.json()
        
        console.log("HELLO WORLD")
        
        return response
    },

    /**
     * @name changeVideo
     * @description Used to change the video on the backend. 
     * @param room_id 
     * @param user_id Get user_id from connecting to websocket.
     * @param video_id 
     * @returns API Response
     */
    async changeVideo(room_id: string, user_id: string, video_id: string) {
        let request = await fetch(url + "change_v", {
            method: "POST",
            headers: {
                "room_id": room_id,
                "user_id": user_id,
                "video_id": video_id
            }
        });
        let response = await request.json()
        return response
    },

    /**
     * @name changeVideo
     * @description Used to change the video on the backend.
     * @param room_id 
     * @param user_id Get user_id from connecting to websocket.
     * @param time 
     * @returns 
     */
    async changeTime(room_id: string, user_id: string, time: string) {
        let request = await fetch(url + "change_v", {
            method: "POST",
            headers: {
                "room_id": room_id,
                "user_id": user_id,
                "time": time
            }
        });
        let response = await request.json()
        return response
    },

    async changeState(room_id: string, user_id: string, state: string) {
        let request = fetch(url + "change_s", {
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