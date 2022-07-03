import ListItem from "./ListItem";

export default class SingleList {
    name: string;
    isFavourite: boolean;
    items: ListItem[];

    constructor(name: string, isFavourite: boolean, items: ListItem[]) {
        this.isFavourite = isFavourite;
        this.items = items;
        this.name = name;
    }
}