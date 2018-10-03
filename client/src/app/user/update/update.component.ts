import {Component, OnInit} from '@angular/core';
import {User} from "../../common/models/user";
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-user-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    public user: User = {};
    public title: string;

    constructor(private rpcService: RpcService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.rpcService.call('user.view', {id: this.route.snapshot.params.id}).subscribe((response: RpcResponse) => {
            this.user = response.result;
            this.title = response.result.name;
        });
    }

    update() {
        this.rpcService.call('user.update', this.user).subscribe((response: RpcResponse) => {
            this.router.navigateByUrl(`user/view/${this.user.id}`);
        });
    }
}
