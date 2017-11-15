import { BaseURLService } from './base-url.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentLanguageService } from './current-language.service';

import { Observable } from 'rxjs/Observable';

class HitInfo {
    rule: any;
    hits: any;
}

@Injectable()
export class HitListService {
    constructor(private _http: HttpClient,
                private lang: CurrentLanguageService,
                private baseURLService: BaseURLService) {
    }

    getHits(rulename: string, filename: string): Observable<HitInfo> {
        const language = this.lang.language;
        // Map lang to filename
        const baseURL = this.baseURLService.getBaseURL();
        const url = filename ? `${baseURL}/${language}/${filename}/${rulename}.json`
            : `${baseURL}/${language}/${rulename}.json`;
        return this._http.get<HitInfo>(url);
    }
}