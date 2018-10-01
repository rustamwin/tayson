import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcResult, RpcService} from "../../common/rpc.service";
import {User} from "../../common/models/user";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    title: string = 'Users';
    public userList: RpcResult | User[];

    constructor(private rpcService: RpcService) {
    }

    ngOnInit() {
        this.rpcService.call('user.list', {}).subscribe((res: RpcResponse) => {
            this.userList = res.result;
        });
    }
}
