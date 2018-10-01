import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from "./user.component";
import {CreateComponent} from './create/create.component';
import {IndexComponent} from './index/index.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations: [UserComponent, CreateComponent, IndexComponent]
})
export class UserModule {
}
