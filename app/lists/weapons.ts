import { Weapon } from "../models/weapon";

export const WEAPONS: Weapon[] = [
    { 
            name: "Anvil Hammer", 
            type: 4, 
            rarity: 4, 
            damage: 900,
            elementalType: null,
            elementalDamage: 0,
            affinity: 0.25,
            sharpness: "Blue",
            sharpnessPlus: "Purple",
            slots: 2,
            materials: [0,1],
            price: 1000,
            description: "A description"
    },
    { 
            name: "Hunter's Dagger", 
            type: 1, 
            rarity: 1, 
            damage: 100, 
            elementalType: null,
            elementalDamage: 0,
            affinity: 0,
            sharpness: "Orange",
            sharpnessPlus: "Yellow",
            slots: 2,
            materials: [0,1],
            price: 500,
            description: "A hunter's dagger description"
    }
];