import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lint-results',
  templateUrl: './lint-results.component.html',
  styleUrls: ['./lint-results.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LintResultsComponent implements OnInit {

  lang: string;

  routerCanReuse() { return false; }

  constructor(private _lintService: LintService,
    private _langService: LanguageService) {
    this._langService.getCurrentLanguage().subscribe(
      (lang) => this.lang = lang)

    this._lintService.getLintResults(this.lang)
      .subscribe(data => this.lintEntries = data,
      error => alert(`Could not load lint data: ${error.status}`));
  }
  ngOnInit() {
  }

}
