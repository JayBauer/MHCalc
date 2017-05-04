import { Injectable } from "@angular/core";
import { Item } from "../models/item";
import { ITEMS } from "../lists/items";

@Injectable()
export class ItemList {
    
    private items = ITEMS;

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }

    getItems(ids: number[]): Item[] {
        let list = Array<Item>();
        ids.forEach(id => list.push(this.getItem(id)));
        return list;
    }
}