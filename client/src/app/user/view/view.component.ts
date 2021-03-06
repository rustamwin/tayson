import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../common/models/user";

@Component({
    selector: 'app-project-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    public user: User = {};

    constructor(private rpcService: RpcService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.rpcService.call('user.view', {id: this.route.snapshot.params.id}).subscribe((response: RpcResponse) => {
            this.user = response.result;
        });
    }

    delete() {
        this.rpcService.call('user.delete', this.user).subscribe((res) => {
            this.router.navigateByUrl('/user/index')
        })
    }

}
