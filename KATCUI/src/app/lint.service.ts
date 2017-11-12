import { Injectable } from '@angular/core';

@Injectable()
export class LintService {

    constructor(private _http: Http,
        private _langService: LanguageService) { }

    getLintResults() {
        const langObs = this._langService.getCurrentLanguage();
        return langObs.mergeMap((language) =>
            this._http.get(`${language}/lint.json`)
                .map(res => res.json())
        );
    }
}
