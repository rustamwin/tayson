import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcService} from "./common/rpc.service";

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Todo app';

    constructor(private rpcService: RpcService) {
    }

    ngOnInit() {

    }
}
