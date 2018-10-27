import {Component, Input, OnInit} from '@angular/core';
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

    ngOnInit() {

    }

    create() {

    }

}
