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

    constructor() {
    }

    ngOnInit() {

    }

    delete() {

    }

}
