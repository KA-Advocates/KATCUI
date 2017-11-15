import { LintService } from '../lint.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentLanguage } from '../current-language';

@Component({
    selector: 'app-lint-results',
    templateUrl: './lint-results.component.html',
    styleUrls: ['./lint-results.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LintResultsComponent implements OnInit {

    lang: string;
    lintEntries: any[];

    constructor(private _lintService: LintService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        CurrentLanguage.language(this._route).subscribe(lang => {
            this._lintService.getLintResults(lang)
                .subscribe(data => this.lintEntries = data,
                error => alert(`Could not load lint data: ${error.status}`));
        });
    }

}
