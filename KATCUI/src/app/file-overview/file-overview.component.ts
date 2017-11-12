import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-file-overview',
  templateUrl: './file-overview.component.html',
  styleUrls: ['./file-overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FileOverviewComponent implements OnInit {

  @Input() filestats: any;

  constructor(injector: Injector) {
    this.router = injector.parent.get(Router);
  }

  viewFile(filename) {
    this.router.navigate(['Overview', { filename: filename }])
  }

}
