import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavComponent} from "./layouts/nav/nav.component";

const routes: Routes = [
    {
        path: '',
        component: NavComponent,
        children: [
            {
                path: '',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule',
                data: {
                    activeClass: 'active'
                }
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
                data: {
                    activeClass: 'active'
                }
            },
            {
                path: 'project',
                loadChildren: './project/project.module#ProjectModule',
                data: {
                    activeClass: 'active'
                }
            },
            {
                path: 'issue',
                loadChildren: './issue/issue.module#IssueModule',
                data: {
                    activeClass: 'active'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
