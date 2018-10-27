import {Component, Inject, OnInit} from '@angular/core';
import {CurrentUser, SocketClient} from "../common/decorators";
import {User} from "../common/models/user";
import {Driver} from "../common/models/driver";
import {Order} from "../common/models/order";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    @CurrentUser()
    user: User & Driver;

    driver: Driver;

    customer: User;

    orders: Order[];

    title: string = 'Taxi tracker';

    @SocketClient("/user")
    protected io: any;

    ngOnInit() {
        if (!this.user) {
            this.io.on('user:created', user => {
                this.user = user;
                localStorage.setItem('__identity', JSON.stringify(user));
            });
            this.io.on('driver:created', user => {
                this.driver = user;
                localStorage.setItem('__identity', JSON.stringify(user));
            });
        }
        if (this.user) {
            this.title = this.user.firstName;

            if (this.user.carNumber) {
                this.io.on('driver:orders', list => {
                    this.orders = list;
                });
                this.io.emit('driver:order', this.user);
            } else {
                this.io.on('user:order', order => {
                    this.user.order = order
                });
                this.io.emit('user:order', this.user);
            }
        }
    }

    createUser() {
        this.io.emit('user:create', this.customer);
    }

    createDriver() {
        this.io.emit('driver:create', this.driver);
    }
}
