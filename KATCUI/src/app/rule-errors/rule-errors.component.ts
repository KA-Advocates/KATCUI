import {RuleErrorService} from '../rule-error.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-rule-errors',
    templateUrl: './rule-errors.component.html',
    styleUrls: ['./rule-errors.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RuleErrorsComponent implements OnInit {

    rule_errors: Array<string> = null;

    constructor(private _ruleErrorService: RuleErrorService) {
        this._ruleErrorService.getRuleErrors().subscribe(data => {
            this.rule_errors = data;
        },
            error => alert('Could not load rule errors data: ' + error.status))
    }

    ngOnInit() {
    }

}
