import { Injectable } from "@angular/core"; 

import { Weapon } from "../models/weapon";
import { WEAPONS } from "../lists/weapons";
import { ItemList } from "./items.service";

@Injectable()
export class WeaponList {
    
    private weapons = WEAPONS;

    getWeapon(type: number): Weapon {
        return this.weapons.filter(weapon => weapon.type === type)[0];
    }

    getWeapons(): Weapon[] {
        return this.weapons;
    }
}