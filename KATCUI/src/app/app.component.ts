import {KATCLanguageService} from './katc-language.service';
import {Router} from '@angular/router';
import { Component } from '@angular/core';
import { CurrentLanguageService } from './current-language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'KATC';
    languages: any;

    language(): string {
        return this._curlangService.language;
    }

    setLanguage(lang: string) {
        this._curlangService.language = lang;
        this._router.navigateByUrl('/');
    }

    constructor(private _langService: KATCLanguageService,
        private _curlangService: CurrentLanguageService,
        private _router: Router) {
        this.languages = _langService.allLanguages();
    }

    onLanguageChange(evt) {
        console.log(evt.target.value);
        this.language = evt.target.value;
        this._langService.storeLanguage(this.language());
    }

}
