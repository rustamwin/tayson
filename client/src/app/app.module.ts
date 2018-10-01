import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RpcService} from "./common/rpc.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {NavComponent} from "./nav/nav.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent
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
