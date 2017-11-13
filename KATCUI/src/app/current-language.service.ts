import {AppComponent} from './app.component';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class CurrentLanguageService {

    constructor(private _injector: Injector) { }

    public language(): string {
        const katc = this._injector.get(AppComponent);
        return katc.language;
    }
}
