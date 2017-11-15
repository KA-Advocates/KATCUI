import { CurrentLanguageService } from '../current-language.service';
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
        private route: ActivatedRoute,
        private curlang: CurrentLanguageService) {
    }

    viewHitlist(rule) {
        const filename = this.route.snapshot.params['filename'];
        const lang = this.curlang.languageSnapshot();
        console.log(`Viewing rule ${rule.name} for ${lang}`);
        this.router.navigate(['/hits',
            lang,
            rule.machine_name,
            filename ? filename : ''
        ]);
    }

    ngOnInit() {
    }

}
