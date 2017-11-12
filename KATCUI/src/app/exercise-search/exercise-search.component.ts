import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {KATCLanguageService} from '../katclanguage.service';
import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';

class HitCount {
    constructor(public rule, public count: number) {
    }
}

@Component({
    selector: 'app-exercise-search',
    templateUrl: './exercise-search.component.html',
    styleUrls: ['./exercise-search.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ExerciseSearchComponent implements OnInit {
    filename: string;
    term: string = 'combining-like-terms';
    hits: HitCount[];
    working: boolean;
    router: Router;

    constructor(injector: Injector, private _http: Http,
                private _langService: KATCLanguageService) {
        this.router = injector.parent.get(Router);
    }

    /**
     * Search every rule hit for each rule
     */
    searchTComment() {
        this.hits = [];
        this.working = true;
        this.getAllRuleURLs().mergeMap((url) => {
            let rule = null;
            return this._http.get(url)
                .map(res => res.json())
                .do(data => rule = data.rule)
                .flatMap(data => data.hits)
                .filter(hit => hit.hasOwnProperty('tcomment'))
                .count(hit => hit.tcomment.includes(this.term))
                .filter(count => count > 0)
                .map(count => new HitCount(rule, count))
                .catch(Rx.Observable.empty())
        }).toArray().subscribe(hits => this.hits = hits,
            err => console.error(err),
            () => this.working = false)
    }

    viewHitlist(rule) {
        //this._router.navigate();
        this.router.navigate(['Hitlist', {
            mname: rule.machine_name,
            filename: this.filename === null ? '' : this.filename,
            commentFilter: this.term
        }])
    }

    private getAllRuleURLs() {
        const langObs = this._langService.getCurrentLanguage();
        return langObs.mergeMap((language) => {
            return this._http.get(`/${language}/index.json`)
                .map(res => res.json())
                .flatMap(data => data.stats)
                .filter(stat => stat.num_hits > 0)
                .map(stat => `/${language}/${stat.machine_name}.json`)
        }
        )
    }
    ngOnInit() {
    }

}
