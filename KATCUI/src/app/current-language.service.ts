import {AppComponent} from './app.component';
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class CurrentLanguageService {

    constructor(private _route: ActivatedRoute) { }

    public language(): Promise<string> {
        return this._route.params.toPromise().then(params => {
            const lang = params['lang'];
            return lang === null ? 'de' : lang;
        });
    }
}
