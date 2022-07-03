export default class ListItem {
    isDone: boolean;
    text: string;

    constructor(isDone: boolean, text: string) {
        this.isDone = isDone;
        this.text = text;
    }
}