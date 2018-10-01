import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectComponent} from "./project.component";
import {IndexComponent} from "./index/index.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: IndexComponent
            },
            {
                path: 'index',
                component: IndexComponent
            },
            {
                path: 'create',
                component: CreateComponent
            },
            {
                path: 'update/:id',
                component: UpdateComponent
            },
            {
                path: 'view/:id',
                component: ViewComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {
}
