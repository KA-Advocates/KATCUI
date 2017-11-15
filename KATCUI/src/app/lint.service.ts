import { BaseURLService } from './base-url.service';
import { HttpClient } from '@angular/common/http';
import { KATCLanguageService } from './katc-language.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LintService {

    constructor(private _http: HttpClient,
        private _baseURL: BaseURLService) { }

    getLintResults(language: string) {
        return this._http.get<any[]>(
            `${this._baseURL.getBaseURL()}/${language}/lint.json`);
    }
}
