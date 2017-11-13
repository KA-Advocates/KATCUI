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


    constructor(private _router: Router) {
    }

}
