import { Component, OnInit } from "@angular/core";

import { Weapon } from "../models/weapon";
import { WeaponList } from "../services/weapons.service";

@Component({
    selector: "weapon-list",
    moduleId: module.id,
    templateUrl: "./weapons.component.html",
})
export class WeaponsComponent implements OnInit {
    weapons: Weapon[];

    constructor(private weaponList: WeaponList) { }

    ngOnInit(): void {
        this.weapons = this.weaponList.getWeapons();
    }
}