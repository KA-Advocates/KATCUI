import {RuleErrorService} from '../rule-error.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentLanguage } from '../current-language';

@Component({
    selector: 'app-rule-errors',
    templateUrl: './rule-errors.component.html',
    styleUrls: ['./rule-errors.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RuleErrorsComponent implements OnInit {

    rule_errors: Array<string> = null;

    constructor(private _ruleErrorService: RuleErrorService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        CurrentLanguage.language(this._route).subscribe( lang => {
            this._ruleErrorService.getRuleErrors(lang).subscribe(data => {
                this.rule_errors = data;
            },
                error => alert(`Could not load rule errors data: ${error.status}`))
        });
    }

}
