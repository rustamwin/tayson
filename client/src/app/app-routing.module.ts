import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'users',
                loadChildren: './user/user.module#UserModule'
            },
            {
                path: 'projects',
                loadChildren: './project/project.module#ProjectModule'
            },
            {
                path: 'issues',
                loadChildren: './issue/issue.module#IssueModule'
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
