import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {IndexComponent} from "./index/index.component";

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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
