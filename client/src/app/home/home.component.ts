import {Component, OnInit} from '@angular/core';
import {SocketClient} from "../common/decorators";
import {User} from "../common/models/user";
import {Driver} from "../common/models/driver";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    user: User;
    driver: Driver;
    title: string = 'Taxi tracker';

    @SocketClient()
    protected io: any;

    ngOnInit() {
        this.io.on('order:created', m => {
            console.log(m);
            this.user = m;
        });
    }

}
