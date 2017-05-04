import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Weapon } from "../models/weapon";
import { Item } from "../models/item";
import { WeaponList } from "../services/weapons.service";
import { ItemList } from "../services/items.service";

@Component({
    selector: "weapon-details",
    moduleId: module.id,
    templateUrl: "./weapon-detail.component.html",
})

export class WeaponDetailComponent implements OnInit {
    weapon: Weapon;
    materialList: Item[];

    constructor(
        private weaponList: WeaponList,
        private itemList: ItemList,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const type = +this.route.snapshot.params["type"];
        this.weapon = this.weaponList.getWeapon(type);
        console.dump(this.itemList.getItem(1));

        this.materialList = this.itemList.getItems(this.weapon.materials);
        console.dump(this.itemList.getItems(this.weapon.materials));
    }
}