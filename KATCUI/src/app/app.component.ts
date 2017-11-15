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

    constructor(private _router: Router) {
    }

}
