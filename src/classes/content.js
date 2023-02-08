export class Content {
    tags = [];
    constructor(title, heading, image, body){
        this.title = title;
        this.heading = heading;
        this.image = image;
        this.body = body;
        this.date = new Date.now();
    }
}