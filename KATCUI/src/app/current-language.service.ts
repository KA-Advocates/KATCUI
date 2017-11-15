import { KATCLanguageService } from './katc-language.service';
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
            return lang === undefined ? 'de' : lang;
        });
    }

    public languageSnapshot(): string {
        const lang = this._route.snapshot.params['lang'];
        return lang ? lang : 'de';
    }
}
