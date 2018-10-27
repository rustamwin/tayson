import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DriverRoutingModule} from './driver-routing.module';
import {DriverComponent} from "./driver.component";
import {CreateComponent} from './create/create.component';
import {IndexComponent} from './index/index.component';
import {FormsModule} from "@angular/forms";
import {UpdateComponent} from "./update/update.component";
import {ViewComponent} from "./view/view.component";

@NgModule({
    imports: [
        CommonModule,
        DriverRoutingModule,
        FormsModule
    ],
    declarations: [
        DriverComponent,
        IndexComponent,
        UpdateComponent,
        ViewComponent
    ]
})
export class DriverModule {
}
