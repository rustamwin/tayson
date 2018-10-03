import {Component, OnInit} from '@angular/core';
import {Project} from "../../common/models/project";
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Issue} from "../../common/models/issue";

@Component({
    selector: 'app-issue-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    public issue: Issue = {};
    public projects: Project[] = [];
    public title: string;

    constructor(private rpcService: RpcService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.rpcService.call('issue.view', {id: this.route.snapshot.params.id}).subscribe((response: RpcResponse) => {
            this.issue = response.result;
            this.title = response.result.text;
        });
        this.rpcService.call('project.list', {}).subscribe((response: RpcResponse) => {
            this.projects = response.result;
        });
    }

    update() {
        this.rpcService.call('issue.update', this.issue).subscribe((response: RpcResponse) => {
            this.router.navigateByUrl(`/issue/view/${this.issue.id}`);
        });
    }

}
