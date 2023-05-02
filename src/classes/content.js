//import { serverTimestamp } from "firebase/firestore";
export class Content {
    tags = [];
    isErased = false;
    constructor(title, heading, image, body, previewUrl=null, isVideo=false, tags=null){
        this.title = title;
        this.heading = heading;
        this.image = image;
        this.body = body;
        this.isVideo = isVideo;
        this.previewUrl = previewUrl;
        if(tags){
            this.tags = this.createTags(tags);
        }
    }
  
    createTags(tags){
        if( tags && typeof tags === "string"){
            if (tags.includes(",")){
                return tags.split(', ');
            }else if(tags){
                /*tags should not be long */
                return tags;
            }
        }else if(tags && !typeof tags === "string"){
             console.log("Error, incorrect tags type");
        }
    }

    addTag(tag){
        if(!this.tags.includes(tag)){
            this.tags.push(tag);
            return `Tag "${tag}" added!`;
        }else{
            return `Tag "${tag}" alreday exist!`;
        }
    }

    delTag(tag){
        if (this.tags.includes(tag)){
            this.tags = this.tags.filter((t) => {
                return t !== tag;
            })
        }
    }
}