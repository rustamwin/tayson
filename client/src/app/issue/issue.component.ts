import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-issue',
    template: `
        <router-outlet></router-outlet>`,
    styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
