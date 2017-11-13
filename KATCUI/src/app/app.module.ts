import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RuleDetailsComponent } from './rule-details/rule-details.component';
import { CommentFilterPipe } from './comment-filter.pipe';
import { HitListComponent } from './hit-list/hit-list.component';
import { RuleErrorsComponent } from './rule-errors/rule-errors.component';
import { RuleOverviewComponent } from './rule-overview/rule-overview.component';
import { FileOverviewComponent } from './file-overview/file-overview.component';
import { OverviewComponent } from './overview/overview.component';
import { ExerciseSearchComponent } from './exercise-search/exercise-search.component';
import { LintResultsComponent } from './lint-results/lint-results.component';
import { KATCLanguageService } from './katc-language.service';
import { OverviewService } from './overview.service';
import { CurrentLanguageService } from './current-language.service';
import { HitListService } from './hit-list.service';
import { LintService } from './lint.service';
import { RuleErrorService } from './rule-error.service';


@NgModule({
  declarations: [
    AppComponent,
    RuleDetailsComponent,
    CommentFilterPipe,
    HitListComponent,
    RuleErrorsComponent,
    RuleOverviewComponent,
    FileOverviewComponent,
    OverviewComponent,
    ExerciseSearchComponent,
    LintResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    KATCLanguageService,
    OverviewService,
    CurrentLanguageService,
    HitListService,
    LintService,
    RuleErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
