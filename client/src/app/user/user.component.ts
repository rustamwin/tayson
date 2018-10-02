import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcService} from "../common/rpc.service";

@Component({
    selector: 'app-user',
    template: `
        <router-outlet></router-outlet>`,
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    constructor(private rpcService: RpcService) {
    }

    ngOnInit() {
    }

}
