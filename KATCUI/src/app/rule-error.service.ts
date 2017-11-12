import { Injectable } from '@angular/core';

@Injectable()
export class RuleErrorService {

    constructor(private _http: Http,
        private _langService: LanguageService) { }

    getRuleErrors() {
        const langObs = this._langService.getCurrentLanguage();
        return langObs.mergeMap((language) => {
            return this._http.get(`${language}/ruleerrors.json`)
                .map(res => res.json());
        });
    }
}
