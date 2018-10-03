import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {Issue} from "../../common/models/issue";

@Component({
    selector: 'app-issue-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    title: string = 'Issues';
    public issueList: Issue[];

    constructor(private rpcService: RpcService) {
    }

    ngOnInit() {
        this.rpcService.call('issue.list', {}).subscribe((response: RpcResponse) => {
            this.issueList = response.result;
        });
    }

}
