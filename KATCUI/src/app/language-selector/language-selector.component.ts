import { KATCLanguageService } from '../katc-language.service';
import { CurrentLanguageService } from '../current-language.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LanguageSelectorComponent implements OnInit {
    private language = 'de';

    constructor(private _langService: KATCLanguageService,
        private _curlangService: CurrentLanguageService,
        private _router: Router) {

    }

    ngOnInit() {
        this._curlangService.language().then(lang => {
            console.log(`Current language: ${lang}`);
            this.language = lang;
        });
    }

    onLanguageChange(evt) {
        console.log(`Changing language to ${evt.target.value} ...`);
        this.language = evt.target.value;
        // Persist language
        this._langService.storeLanguage(this.language);
        // Navigate to language
        this._router.navigateByUrl(`/${this.language}`);
    }

}