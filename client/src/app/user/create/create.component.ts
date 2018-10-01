import {Component, OnInit} from '@angular/core';
import {User} from "../../common/models/user";
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    public user: User;

    constructor(private rpcService: RpcService, private router: Router) {
    }

    ngOnInit() {
    }

    create() {
        this.rpcService.call('user.create', this.user).subscribe((res: RpcResponse | User) => {
            this.router.navigate(['/', 'user', res.result.id]);
        });
    }

}
