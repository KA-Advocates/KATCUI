import { BaseURLService } from './base-url.service';
import {KATCLanguageService} from './katc-language.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class OverviewInfo {
    stats: any;
    files: any;
}

@Injectable()
export class OverviewService {

    constructor(private _http: HttpClient,
                private baseurl: BaseURLService) {}

    getOverviewData(language: string, filename: string = null): Observable<OverviewInfo> {
        console.log(`Get overview for ${filename}`);
        const urlProto = filename == null ? `index.json`: `${filename}/index.json`;

        console.log(`Requesting overview for ${language}`);
        return this._http.get<OverviewInfo>(
            `${this.baseurl.getBaseURL()}/${language}/${urlProto);
    }
}
