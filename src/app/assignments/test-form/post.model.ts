export class Post {
    id: string = '' + Math.floor(Math.random() * 1000);
    title: string = "";
    content: string = "";
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

}