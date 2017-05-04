import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { WeaponsComponent } from "./components/weapons.component";
import { WeaponDetailComponent } from "./components/weapon-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/weapons", pathMatch: "full" },
    { path: "weapons", component: WeaponsComponent },
    { path: "weapon/:type", component: WeaponDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule { }