import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../common/models/user";
import {Order} from "../../common/models/order";
import {SocketClient} from "../../common/decorators";

@Component({
    selector: 'app-order-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    public order: Order = {};

    constructor() {
    }

    @SocketClient("/order")
    io: any;

    ngOnInit() {
        this.io.on('order:status', order => {
            this.order = order
        });
    }

    delete() {

    }

}
