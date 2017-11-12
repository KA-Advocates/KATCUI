import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RuleDetailsComponent } from './rule-details/rule-details.component';
import { CommentFilterPipe } from './comment-filter.pipe';
import { HitListComponent } from './hit-list/hit-list.component';
import { RuleErrorsComponent } from './rule-errors/rule-errors.component';


@NgModule({
  declarations: [
    AppComponent,
    RuleDetailsComponent,
    CommentFilterPipe,
    HitListComponent,
    RuleErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
