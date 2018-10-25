import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from "./user.component";
import {CreateComponent} from './create/create.component';
import {IndexComponent} from './index/index.component';
import {FormsModule} from "@angular/forms";
import {UpdateComponent} from "./update/update.component";
import {ViewComponent} from "./view/view.component";

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule
    ],
    declarations: [UserComponent, IndexComponent, UpdateComponent, ViewComponent]
})
export class UserModule {
}
