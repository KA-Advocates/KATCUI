import { CurrentLanguageService } from './current-language.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RuleErrorService {

    constructor(private _http: HttpClient,
        private lang: CurrentLanguageService) { }

    getRuleErrors() {
        const language = this.lang.language;
        return this._http.get(`${language}/ruleerrors.json`)
            .map(res => res.json());
    }
}
