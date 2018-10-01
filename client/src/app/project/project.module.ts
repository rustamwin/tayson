import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule
    ],
    declarations: [ProjectComponent]
})
export class ProjectModule {
}
