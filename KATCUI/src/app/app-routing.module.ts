import { OverviewComponent } from './overview/overview.component';
import { HitListComponent } from './hit-list/hit-list.component';
import { RuleErrorsComponent } from './rule-errors/rule-errors.component';
import { LintResultsComponent } from './lint-results/lint-results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartRedirectComponent } from './start-redirect/start-redirect.component';

const routes: Routes = [
  {
    path: '',
    component: StartRedirectComponent // Redirects to the appropriate language
  },
  {
    path: ':lang',
    component: OverviewComponent
  },
  {
    path: ':lang/overview/:filename',
    component: OverviewComponent,
  },
  {
    path: ':lang/hits/:mname/:filename', // Machine name
    component: HitListComponent
  },
  {
    path: ':lang/lint',
    component: LintResultsComponent
  }, {
    path: ':lang/ruleerrors',
    component: RuleErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
