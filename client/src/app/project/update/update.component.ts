import {Component, OnInit} from '@angular/core';
import {Project} from "../../common/models/project";
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    public project: Project = {};
    public title: string;

    constructor(private rpcService: RpcService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.rpcService.call('project.view', {id: this.route.snapshot.params.id}).subscribe((response: RpcResponse) => {
            this.project = response.result;
            this.title = response.result.name;
        });
    }

    update() {
        this.rpcService.call('project.update', this.project).subscribe((response: RpcResponse) => {
            this.router.navigateByUrl(`project/view/${this.project.id}`);
        });
    }
}
