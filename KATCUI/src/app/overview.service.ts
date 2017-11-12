import {KATCLanguageService} from './katc-language.service';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OverviewService {

    constructor(private _http: Http,
                private _langService: KATCLanguageService) {}

    getOverviewData(filename: string = null) {
        const urlProto = filename == null ? `index.json` : `${filename}/index.json`;
        const language = this._langService.getCurrentLanguage();
        return this._http.get(`${language}/${urlProto}`).map(res => res.json());
    }
}
