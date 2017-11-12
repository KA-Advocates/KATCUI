import {Http} from '@angular/http';
import {KATCLanguageService} from './katc-language.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RuleErrorService {

    constructor(private _http: Http,
        private _langService: KATCLanguageService) { }

    getRuleErrors() {
        const langObs = this._langService.getCurrentLanguage();
        return langObs.mergeMap((language) => {
            return this._http.get(`${language}/ruleerrors.json`)
                .map(res => res.json());
        });
    }
}
