import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { WeaponsComponent } from "./components/weapons.component";
import { WeaponDetailComponent } from "./components/weapon-detail.component";
import { ItemDetailComponent } from "./components/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/weapons", pathMatch: "full" },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "weapons", component: WeaponsComponent },
    { path: "weapon/:name", component: WeaponDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule { }