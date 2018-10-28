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

    public driver: Driver = {};

    public customer: User = {};

    orders: Order[];

    title: string = 'Taxi tracker';

    @SocketClient("/user")
    protected io: any;

    ngOnInit() {
        console.log('inited');
        setTimeout(() => {
            this.initSocket();
        }, 0);
    }

    initSocket() {
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
                this.io.emit('driver:order', this.user);
                this.io.on('driver:order', order => {
                    if (order && order.id)
                        this.user.activeOrder = order;
                    //this.orders = undefined;
                    console.log(this.user.activeOrder);
                });
                this.io.on('driver:orders', list => {
                    if (!this.user.activeOrder)
                        this.orders = list;
                    console.log(this.orders);
                });
                this.io.on('order:created', order => {
                    this.orders.push(order);
                    console.log(order);
                });
            } else {
                this.io.emit('user:order', this.user);
                this.io.on('user:order', (order: Order) => {
                    this.user.order = order;
                    console.log(order);
                });
                this.io.on('order:status', (order: Order) => {
                    if (order.customer && order.customer.id == this.user.id) {
                        this.user.order = order;
                        console.log(order);
                    }
                });
            }
        }
    }

    createUser() {
        this.io.emit('user:create', this.customer);
    }

    createDriver() {
        this.io.emit('driver:create', this.driver);
    }

    approve(order) {
        this.orders = [];
        order.driver = this.user;
        this.io.emit('order:status', order, 'approve');
    }

    orderNew() {
        this.io.emit('order:new', this.user);
    }

    orderStatus(order) {
        this.io.emit('order:status', order, 'approve');
    }

    getNextStatus(order: Order) {
        if (order.status == 'new') {
            return 'approved';
        } else if (order.status == 'approved') {
            return 'arrived';
        } else if (order.status == 'arrived') {
            return 'process';
        } else if (order.status == 'process') {
            return "completed";
        }
        return order.status;
    }
}
