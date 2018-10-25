import {Component, OnInit} from '@angular/core';
import {User} from "../../common/models/user";
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {Router} from "@angular/router";
import {Driver} from "../../common/models/driver";

@Component({
    selector: 'app-driver-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    public driver: Driver = {};

    constructor() {
    }

    ngOnInit() {
    }

    create() {

    }

}
