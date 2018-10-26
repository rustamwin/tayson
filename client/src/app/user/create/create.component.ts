import {Component, OnInit} from '@angular/core';
import {SocketClient} from "../../common/decorators";
import {Customer} from "../../common/models/customer";

@Component({
    selector: 'app-user-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    public user: Customer = {};

    constructor() {
    }

    @SocketClient()
    public io: any;

    ngOnInit() {
    }

    create() {
        this.io.emit('order', this.user);
    }

}
