export class Content {
    tags = [];
    constructor(title, heading, image, body, isVideo=false, tags=null){
        this.title = title;
        this.heading = heading;
        this.image = image;
        this.body = body;
        // this.date = new Date.now();
        this.isVideo = isVideo;
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
             console.log("incorrect tags type");
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