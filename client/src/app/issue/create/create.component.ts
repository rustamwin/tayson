import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {Router} from "@angular/router";
import {Issue} from "../../common/models/issue";
import {Project} from "../../common/models/project";

@Component({
    selector: 'app-issue-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    public issue: Issue ={};
    public projects: Project[];

    constructor(private rpcService: RpcService, private router: Router) {
    }

    ngOnInit() {
        this.rpcService.call('project.list', {}).subscribe((response: RpcResponse) => {
            this.projects = response.result;
        });
    }

    create() {
        this.rpcService.call('project.create', this.issue).subscribe((response: RpcResponse) => {
            this.router.navigateByUrl(`/project/view/${response.result.id}`);
        });
    }
}
