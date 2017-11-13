import {ActivatedRoute} from '@angular/router';
import { AppComponent } from './app.component';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentLanguageService {

    constructor(private _route: ActivatedRoute) { }

    public language(): Observable<string> {
        return this._route.params.map(params => {
            const lang = params['lang'];
            console.log(`Current lang: ${lang}`);
            return lang === null ? 'de' : lang;
        });
    }
}
