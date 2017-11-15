import { Router, ActivatedRoute } from '@angular/router';
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

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    viewHitlist(rule) {
        const lang = this.route.snapshot.params['lang'];
        console.log(`Viewing rule ${rule.name} for ${lang}`);
        this.router.navigate(['/hits',
            lang,
            rule.machine_name,
            this.filename === null ? '' : this.filename
        ]);
    }

    ngOnInit() {
    }

}
