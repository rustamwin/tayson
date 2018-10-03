import {Component, OnInit} from '@angular/core';
import {Project} from "../../common/models/project";
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-project-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    project: Project = {};

    constructor(private rpcService: RpcService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.rpcService.call('project.view', {id: this.route.snapshot.params.id}).subscribe((response: RpcResponse) => {
            this.project = response.result;
        });
    }

    delete() {
        this.rpcService.call('project.delete', this.project).subscribe((res) => {
            this.router.navigateByUrl('project/index')
        })
    }

}
