import { ActivatedRoute, Router } from '@angular/router';
import { OverviewService } from '../overview.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrentLanguageService } from '../current-language.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit {
    data: any;
    rulestats: any;
    filestats: any;
    filename: string = null;

    constructor(public overviewService: OverviewService,
        private router: Router,
        activatedRoute: ActivatedRoute,
        curlang: CurrentLanguageService) {
        // filename might be null for total overview
        this.filename = activatedRoute['filename'];
    }

    ngOnInit() {
        this.overviewService.getOverviewData(this.filename)
            .subscribe(data => {
                this.rulestats = data.stats;
                this.filestats = data.files;
                this.data = data;
            }, error => alert(`Could not load overview data: ${error.status}`));
    }

}
