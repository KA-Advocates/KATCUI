import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-rule-details',
  templateUrl: './rule-details.component.html',
  styleUrls: ['./rule-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RuleDetailsComponent implements OnInit {

  @Input() rule: any;

  constructor() { }

  ngOnInit() {
  }

}
