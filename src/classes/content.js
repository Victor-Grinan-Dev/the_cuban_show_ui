//import { serverTimestamp } from "firebase/firestore";
export class Content {
    isErased = false;
    constructor(title, heading, image, body, previewUrl=null, isVideo=false, tags=[]){
        this.title = title;
        this.heading = heading;
        this.image = image;
        this.body = body;
        this.isVideo = isVideo;
        this.previewUrl = previewUrl;
        this.tags = tags;
    }
}