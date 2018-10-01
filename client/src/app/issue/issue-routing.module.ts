import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IssueComponent} from "./issue.component";
import {IndexComponent} from "./index/index.component";
import {CreateComponent} from "./create/create.component";
import {ViewComponent} from "./view/view.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
    {
        path: '',
        component: IssueComponent,
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
                path: 'view/:id',
                component: ViewComponent
            },
            {
                path: 'update/:id',
                component: UpdateComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IssueRoutingModule {
}
