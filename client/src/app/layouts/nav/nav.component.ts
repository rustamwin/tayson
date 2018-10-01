import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    activeLink: string = '';

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.activeLink = this.route.snapshot.data.activeClass;
    }

}
