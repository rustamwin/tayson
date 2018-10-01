import {Component, OnInit} from '@angular/core';
import {Project} from "../../common/models/project";
import {RpcResponse, RpcService} from "../../common/rpc.service";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    public projectList: Project[];

    constructor(private rpcService: RpcService) {
    }

    ngOnInit() {
        this.rpcService.call('project.list', {}).subscribe((response: RpcResponse) => {
            this.projectList = response.result;
        });
    }

}
