import {Http} from '@angular/http';
import {KATCLanguageService} from './katc-language.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RuleErrorService {

    constructor(private _http: Http,
        private _langService: KATCLanguageService) { }

    getRuleErrors() {
        const language = this._langService.getCurrentLanguage();
        return this._http.get(`${language}/ruleerrors.json`)
            .map(res => res.json());
    }
}
