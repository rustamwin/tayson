import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import {UserModule} from "../user/user.module";
import {CreateComponent as UserComponent} from "../user/create/create.component";
import {FormsModule} from "@angular/forms";
import {CreateComponent} from "../driver/create/create.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        UserModule
    ],
    declarations: [HomeComponent, CreateComponent, UserComponent]
})
export class HomeModule {
}
