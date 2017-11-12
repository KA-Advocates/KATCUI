import {KATCLanguageService} from './katc-language.service';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OverviewService {

    constructor(private _http: Http,
                private _langService: KATCLanguageService) {}

    getOverviewData(filename: string = null) {
        const urlProto = filename == null ? `index.json` : `${filename}/index.json`;
        const langObs = this._langService.getCurrentLanguage();
        return langObs.mergeMap((language) =>
            this._http.get(`${language}/${urlProto}`)
                    .map(res => res.json())
        )
    }
}
