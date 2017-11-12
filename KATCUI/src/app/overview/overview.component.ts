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

  routerCanReuse() { return false; }

  viewHitlist(rule) {
    //this._router.navigate();
    this.router.navigate(['Hitlist', {
      mname: rule.machine_name,
      filename: this.filename === null ? "" : this.filename
    }])
  }

  constructor(public overviewService: OverviewService, injector: Injector) {
    const routeParams = injector.parent.get(RouteParams);
    //filename Might be null for total overview
    this.filename = routeParams.get("filename")
    this.overviewService.getOverviewData(this.filename)
      .subscribe((data) => {
        this.rulestats = data.stats;
        this.filestats = data.files;
        this.data = data;
      },
      error => alert("Could not load overview data: " + error.status))
  }
  ngOnInit() {
  }

}
