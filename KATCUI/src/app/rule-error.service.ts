import { Observable } from 'rxjs/Observable';
import { BaseURLService } from './base-url.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RuleErrorService {

    constructor(private _http: HttpClient,
        private _baseURL: BaseURLService) { }

    getRuleErrors(language: string): Observable<string[]> {
        return this._http.get<string[]>(
            `${this._baseURL.getBaseURL()}/${language}/ruleerrors.json`);
    }
}
