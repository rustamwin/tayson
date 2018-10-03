import { Component, OnInit } from '@angular/core';
import {Project} from "../../common/models/project";
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Issue} from "../../common/models/issue";

@Component({
  selector: 'app-issue-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    issue: Issue = {};

    constructor(private rpcService: RpcService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.rpcService.call('issue.view', {id: this.route.snapshot.params.id}).subscribe((response: RpcResponse) => {
            this.issue = response.result;
        });
    }

    delete() {
        this.rpcService.call('issue.delete', this.issue).subscribe((res) => {
            this.router.navigateByUrl('issue/index')
        })
    }

}
