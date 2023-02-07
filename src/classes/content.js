export class Content {
    constructor(title, image, body){
        this.title = title;
        this.image = image;
        this.body = body;
        this.date = new Date.now();
    }
}