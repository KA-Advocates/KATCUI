import { LintService } from '../lint.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrentLanguageService } from '../current-language.service';

@Component({
    selector: 'app-lint-results',
    templateUrl: './lint-results.component.html',
    styleUrls: ['./lint-results.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LintResultsComponent implements OnInit {

    lang: string;
    lintEntries: any[];

    routerCanReuse() { return false; }

    constructor(private _lintService: LintService,
        private langService: CurrentLanguageService) {
    }

    ngOnInit() {
        this.langService.language().subscribe(lang => {
            this.lang = lang;
        });
        this._lintService.getLintResults()
            .subscribe(data => this.lintEntries = data,
            error => alert(`Could not load lint data: ${error.status}`));
    }

}
