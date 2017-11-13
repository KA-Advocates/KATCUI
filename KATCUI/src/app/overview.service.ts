import { CurrentLanguageService } from './current-language.service';
import {KATCLanguageService} from './katc-language.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OverviewService {

    constructor(private _http: HttpClient,
                private lang: CurrentLanguageService) {}

    getOverviewData(filename: string = null) {
        const urlProto = filename == null ? `index.json` : `${filename}/index.json`;
        const language = this.lang.language;
        return this._http.get(`${language}/${urlProto}`).map(res => res.json());
    }
}
