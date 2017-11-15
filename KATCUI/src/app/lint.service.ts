import { CurrentLanguageService } from './current-language.service';
import { HttpClient } from '@angular/common/http';
import { KATCLanguageService } from './katc-language.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LintService {

    constructor(private _http: HttpClient,
        private lang: CurrentLanguageService) { }

    getLintResults() {
        const language = this.lang.language;
        return this._http.get<any[]>(`${language}/lint.json`);
    }
}
