import { ActivatedRoute, Router } from '@angular/router';
import { OverviewService } from '../overview.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
        private activatedRoute: ActivatedRoute) {
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
