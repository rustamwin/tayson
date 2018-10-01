import {Component, OnInit} from '@angular/core';
import {Project} from "../../common/models/project";
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    public project: Project = {};

    constructor(private rpcService: RpcService, private router: Router) {
    }

    ngOnInit() {
    }

    create() {
        this.rpcService.call('project.create', this.project).subscribe((response: RpcResponse) => {
            this.router.navigate(['/', 'view', response.result.id]);
        });
    }
}
