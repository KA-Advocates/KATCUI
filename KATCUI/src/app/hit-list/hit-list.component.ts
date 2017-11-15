import {HitListService} from '../hit-list.service';
import {ActivatedRoute, Route} from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-hit-list',
    templateUrl: './hit-list.component.html',
    styleUrls: ['./hit-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HitListComponent implements OnInit {
    rule: any;
    hits: any;
    commentFilterArg: string = null;

    constructor(private _hitListService: HitListService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            const lang = params['lang'];
            const mname = params['mname'];
            const filename = params['filename'];
            console.log(`Route machine name: ${mname}`);
            console.log(`Route filename: ${filename}`);
            this._hitListService.getHits(lang, mname, filename)
                .subscribe(data => {
                    this.rule = data.rule;
                    this.hits = data.hits;
                },
                error => alert('Could not load hit data: ' + error.status))
        });
    }
}
