import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HitListService {
    constructor(private _http: Http,
                private _langService: KATCLanguageService) { }

    getHits(rulename: string, filename: string) {
        const langObs = this._langService.getCurrentLanguage();
        return langObs.mergeMap((language) => {
            // Map lang to filename
            const url = filename ? `${language}/${filename}/${rulename}.json`
                : `${language}/${rulename}.json`;
            return this._http.get(url).map(res => res.json());
        });
    }
}