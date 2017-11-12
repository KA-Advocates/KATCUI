import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '/',
    name: 'Home',
    component: OverviewComponent,
    useAsDefault: true
  },
  {
    path: '/overview/:filename',
    name: 'Overview',
    component: OverviewComponent,
  },
  {
    path: '/hits/:mname/:filename', //Machine name
    name: 'Hitlist',
    component: HitListComponent
  },
  {
    path: '/lint',
    name: 'Lint results',
    component: LintComponent
  }
    {
    path: '/ruleerrors',
    name: 'Rule errors',
    component: RuleErrorsComponent
  }
    {
    path: '/**',
    name: 'Catchall',
    redirectTo: ['Home']
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
