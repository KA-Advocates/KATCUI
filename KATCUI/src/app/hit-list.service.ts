import { BaseURLService } from './base-url.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

class HitInfo {
    rule: any;
    hits: any;
}

@Injectable()
export class HitListService {
    constructor(private _http: HttpClient,
                private baseURLService: BaseURLService) {
    }

    getHits(language: string, rulename: string, filename: string): Observable<HitInfo> {
        const baseURL = this.baseURLService.getBaseURL();
        const url = filename ? `${baseURL}/${language}/${filename}/${rulename}.json`
            : `${baseURL}/${language}/${rulename}.json`;
        return this._http.get<HitInfo>(url);
    }
}