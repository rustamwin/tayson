import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RpcService} from "./common/rpc.service";
import {HttpClientModule} from "@angular/common/http";
import {NavComponent} from './nav/nav.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { AssignerComponent } from './assigner/assigner.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        AssignerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [RpcService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
