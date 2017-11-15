import { KATCLanguageService } from '../katc-language.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageInfo } from '../language-info';
import { CurrentLanguage } from '../current-language';

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LanguageSelectorComponent implements OnInit {
    private language = 'de';
    private allLanguages: LanguageInfo[] = [];

    constructor(private _langService: KATCLanguageService,
        private _router: Router) {

    }

    ngOnInit() {
        this.allLanguages = this._langService.allLanguages();
        this.language = this._langService.getStoredLanguage();
    }

    onLanguageChange(evt) {
        console.log(`Changing language to ${evt.target.value} ...`);
        this.language = evt.target.value;
        // Persist language
        this._langService.storeLanguage(this.language);
        // Navigate to language
        this._router.navigate(['/overview', this.language]);
    }
}
