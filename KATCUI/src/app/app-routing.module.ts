import { OverviewComponent } from './overview/overview.component';
import { HitListComponent } from './hit-list/hit-list.component';
import { RuleErrorsComponent } from './rule-errors/rule-errors.component';
import { LintResultsComponent } from './lint-results/lint-results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '/',
    component: OverviewComponent
  },
  {
    path: '/overview/:filename',
    component: OverviewComponent,
  },
  {
    path: '/hits/:mname/:filename', // Machine name
    component: HitListComponent
  },
  {
    path: '/lint',
    component: LintResultsComponent
  }, {
    path: '/ruleerrors',
    component: RuleErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
