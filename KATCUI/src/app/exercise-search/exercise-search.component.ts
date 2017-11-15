import { Hit } from '../hit';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import { CurrentLanguageService } from '../current-language.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

class HitCount {
    constructor(public rule, public count: number) {
    }
}

class TransferHitInfo {
    rule: any;
    hits: any;
}

class TransferRuleURLs {
    stats: any;
}

@Component({
    selector: 'app-exercise-search',
    templateUrl: './exercise-search.component.html',
    styleUrls: ['./exercise-search.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ExerciseSearchComponent implements OnInit {
    filename: string;
    term = 'combining-like-terms';
    hits: HitCount[];
    working: boolean;
    rule: any;

    constructor(private _http: HttpClient,
                private router: Router,
                private curlang: CurrentLanguageService) {
    }

    getHits(url): Observable<Hit> {
        return this._http.get<TransferHitInfo>(url)
            .do(data => this.rule = data.rule)
            .flatMap(data => data.hits);
    }

    /**
     * Search every rule hit for each rule
     */
    searchTComment() {
        this.hits = [];
        this.working = true;
        this.getAllRuleURLs().mergeMap(url => {
            return this.getHits(url)
                .filter(hit => hit.hasOwnProperty('tcomment'))
                .count(hit => hit['tcomment'].includes(this.term))
                .filter(count => count > 0)
                .map(count => new HitCount(this.rule, count));
                // .catch(Observable.empty);
        }).toArray().subscribe(hits => this.hits = hits,
            err => console.error(err),
            () => this.working = false);
    }

    viewHitlist(rule) {
        this.router.navigate(['Hitlist', {
            mname: rule.machine_name,
            filename: this.filename === null ? '' : this.filename,
            commentFilter: this.term
        }]);
    }

    private getAllRuleURLs() {
        const language = this.curlang.language;
        return this._http.get<TransferRuleURLs>(`/${language}/index.json`)
            .map(data => data.stats)
            .filter(stat => stat.num_hits > 0)
            .map(stat => `/${language}/${stat.machine_name}.json`)
    }

    ngOnInit() {
    }

}
