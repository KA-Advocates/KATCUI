import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { CurrentLanguageService } from './current-language.service';

@Injectable()
export class HitListService {
    constructor(private _http: Http,
                private lang: CurrentLanguageService) { }

    getHits(rulename: string, filename: string) {
        const language = this.lang.language();
        // Map lang to filename
        const url = filename ? `${language}/${filename}/${rulename}.json`
            : `${language}/${rulename}.json`;
        return this._http.get(url).map(res => res.json());
    }
}