import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { WeaponList } from "./services/weapons.service";
import { ItemList } from "./services/items.service";
import { WeaponsComponent } from "./components/weapons.component";
import { WeaponDetailComponent } from "./components/weapon-detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        WeaponsComponent,
        WeaponDetailComponent
    ],
    providers: [
        WeaponList,
        ItemList
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
