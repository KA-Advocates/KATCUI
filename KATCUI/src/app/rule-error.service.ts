import { CurrentLanguageService } from './current-language.service';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RuleErrorService {

    constructor(private _http: Http,
        private lang: CurrentLanguageService) { }

    getRuleErrors() {
        const language = this.lang.language();
        return this._http.get(`${language}/ruleerrors.json`)
            .map(res => res.json());
    }
}
