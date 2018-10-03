import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {Router} from "@angular/router";
import {Issue} from "../../common/models/issue";
import {Project} from "../../common/models/project";
import {User} from "../../common/models/user";

@Component({
    selector: 'app-issue-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    public issue: Issue ={};
    public projects: Project[];
    public users: User[] = [];
    public assigner: User = {};

    constructor(private rpcService: RpcService, private router: Router) {
    }

    ngOnInit() {
        this.rpcService.call('project.list', {}).subscribe((response: RpcResponse) => {
            this.projects = response.result;
        });
        this.rpcService.call('user.list', {}).subscribe((response: RpcResponse) => {
            this.users = response.result;
        });
    }

    create() {
        this.rpcService.call('issue.create', this.issue).subscribe((response: RpcResponse) => {
            this.router.navigateByUrl(`/project/view/${response.result.id}`);
        });
    }
    assign() {
        this.issue.assigners.push(this.assigner);
        this.users = this.users.filter((item) => {
            return item.id != this.assigner.id;
        });
        this.assigner = {};
    }

}
