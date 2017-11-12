import { Injectable } from '@angular/core';

@Injectable()
export class OverviewService {

    constructor(private _http: Http,
                private _langService: LanguageService) {}

    getOverviewData(filename: string = null) {
        let urlProto = filename == null ? `index.json` : `${filename}/index.json`;
        let langObs = this._langService.getCurrentLanguage();
        return langObs.mergeMap((language) =>
            this._http.get(`${language}/${urlProto}`)
                    .map(res => res.json())
        )
    }
}
