import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import {UserModule} from "../user/user.module";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        UserModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
