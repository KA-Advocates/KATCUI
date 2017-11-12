import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rule-overview',
  templateUrl: './rule-overview.component.html',
  styleUrls: ['./rule-overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RuleOverviewComponent implements OnInit {

  @Input() rulestats: any;
  @Input() filename: string;

  constructor(injector: Injector) {
    this.router = injector.parent.get(Router);
  }

  viewHitlist(rule) {
    //this._router.navigate();
    this.router.navigate(['Hitlist', {
      mname: rule.machine_name,
      filename: this.filename === null ? "" : this.filename
    }])
  }

}
