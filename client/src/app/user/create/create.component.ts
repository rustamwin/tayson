import {Component, OnInit} from '@angular/core';
import {User} from "../../common/models/user";
import {RpcResponse, RpcService} from "../../common/rpc.service";
import {Router} from "@angular/router";
import {SocketClient} from "../../common/decorators";

@Component({
    selector: 'app-user-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    public user: User = {};

    constructor() {
    }

    @SocketClient()
    public io: any;

    ngOnInit() {
        this.io.on('handled', msg => {
            console.log(msg);
        });
        setTimeout(function (io) {
            console.log(io);
            io.on('order:saved', user => {
                console.log(user);
            });
            io.on('order:created', user => {
                console.log(user);
            });
        }, 0, this.io);

    }

    create() {
        this.io.emit('order', this.user);
    }

}
