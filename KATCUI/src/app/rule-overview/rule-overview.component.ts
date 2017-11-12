import {Router} from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Injector, Input } from '@angular/core';

@Component({
    selector: 'app-rule-overview',
    templateUrl: './rule-overview.component.html',
    styleUrls: ['./rule-overview.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RuleOverviewComponent implements OnInit {

    @Input() rulestats: any;
    @Input() filename: string;

    constructor(private router: Router) {
    }

    viewHitlist(rule) {
        // this._router.navigate();
        this.router.navigate(['Hitlist', {
            mname: rule.machine_name,
            filename: this.filename === null ? '' : this.filename
        }]);
    }

    ngOnInit() {
    }

}
