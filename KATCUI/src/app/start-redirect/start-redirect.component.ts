import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { KATCLanguageService } from '../katc-language.service';

/**
 * Redirects the user to the appropriate language if he doesnt enter any specific URL
 * @export
 * @class StartRedirectComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-start-redirect',
    templateUrl: './start-redirect.component.html',
    styleUrls: ['./start-redirect.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class StartRedirectComponent implements OnInit {

    constructor(private _router: Router, private _langService: KATCLanguageService) { }

    ngOnInit() {
        // Try to read language
        const lang = this._langService.getStoredLanguage(); // stored language or default
        // Redirect to index page for that language
        console.log(`Redirecting to stored or default language ${lang}`);
        this._router.navigate(['/overview', {lang: lang}]);
    }

}
