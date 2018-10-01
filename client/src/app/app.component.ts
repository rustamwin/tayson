import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcService} from "./common/rpc.service";

@Component({
    selector: 'app-root',
    template: `
        <div class="wrap">
            <app-nav></app-nav>
            <div class="container content">
                <router-outlet></router-outlet>
            </div>
            <footer class="footer"></footer>
        </div>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Todo app';

    constructor(private rpcService: RpcService) {
    }

    ngOnInit() {

    }
}
