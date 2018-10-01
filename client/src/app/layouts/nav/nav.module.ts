import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavRoutingModule} from './nav-routing.module';
import {NavComponent} from "./nav.component";

@NgModule({
    imports: [
        CommonModule,
        NavRoutingModule
    ],
    declarations: [NavComponent]
})
export class NavModule {
}
