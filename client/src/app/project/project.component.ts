import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-project',
    template: `
        <router-outlet></router-outlet>`,
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
