import { Http } from '@angular/http';
import { KATCLanguageService } from './katc-language.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LintService {

    constructor(private _http: Http,
        private _langService: KATCLanguageService) { }

    getLintResults() {
        const language = this._langService.getCurrentLanguage();
        return this._http.get(`${language}/lint.json`).map(res => res.json());
    }
}
