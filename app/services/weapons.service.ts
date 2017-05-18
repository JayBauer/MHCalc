import { Injectable } from "@angular/core"; 

import { Weapon } from "../models/weapon";
import { WEAPONS } from "../lists/weapons";
import { ItemList } from "./items.service";

@Injectable()
export class WeaponList {
    
    private weapons = WEAPONS;

    getWeapon(name: string): Weapon {
        return this.weapons.filter(weapon => weapon.name === name)[0];
    }

    getWeapons(): Weapon[] {
        return this.weapons;
    }
}