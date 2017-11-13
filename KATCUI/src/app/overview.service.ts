import { CurrentLanguageService } from './current-language.service';
import {KATCLanguageService} from './katc-language.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class OverviewInfo {
    stats: any;
    files: any;
}

@Injectable()
export class OverviewService {

    constructor(private _http: HttpClient,
                private _lang: CurrentLanguageService) {}

    getOverviewData(filename: string = null): Promise<OverviewInfo> {
        const urlProto = filename == null ? `index.json` : `${filename}/index.json`;
        return this._lang.language().then(language => {
            return this._http.get<OverviewInfo>(`${language}/${urlProto}`).toPromise();
        })
    }
}
