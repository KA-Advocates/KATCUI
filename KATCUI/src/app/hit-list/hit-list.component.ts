import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-hit-list',
    templateUrl: './hit-list.component.html',
    styleUrls: ['./hit-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HitListComponent implements OnInit, CanReuse {
    rule: any
    hits: any
    commentFilterArg: string = null;

    constructor(private _hitListService: HitListService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        const mname = this._routeParams.get('mname')
        const filename = this._routeParams.get('filename')
        this.commentFilterArg = this._routeParams.get('commentFilter')
        console.log(`Route machine name: ${mname}`)
        console.log(`Route filename: ${filename}`)
        console.log(`Comment filter: ${this.commentFilterArg}`)
        this._hitListService.getHits(mname, filename)
            .subscribe(data => {
                this.rule = data.rule;
                this.hits = data.hits;
            },
            error => alert('Could not load hit data: ' + error.status))
    }


    routerCanReuse() { return false;}

}
