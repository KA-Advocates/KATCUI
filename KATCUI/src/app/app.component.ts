import {KATCLanguageService} from './katc-language.service';
import {Router} from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'KATC';
    language: string;
    languages: any;

    constructor(private _langService: KATCLanguageService,
        private _router: Router) {
        this.languages = _langService.allLanguages();
        this.language = this._langService.getStoredLanguage();
    }

    onLanguageChange(evt) {
        console.log(evt.target.value);
        this.language = evt.target.value;
        this._langService.storeLanguage(this.language);
    }

}
