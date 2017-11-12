import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-overview',
  templateUrl: './file-overview.component.html',
  styleUrls: ['./file-overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FileOverviewComponent implements OnInit {

  @Input() filestats: any;

  constructor(private router: Router) {
  }

  viewFile(filename) {
    this.router.navigate(['Overview', { filename: filename }])
  }

  ngOnInit() {
  }

}
