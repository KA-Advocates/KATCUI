import { CurrentLanguageService } from './current-language.service';
import { Http } from '@angular/http';
import { KATCLanguageService } from './katc-language.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LintService {

    constructor(private _http: Http,
        private lang: CurrentLanguageService) { }

    getLintResults() {
        const language = this.lang.language();
        return this._http.get(`${language}/lint.json`).map(res => res.json());
    }
}
