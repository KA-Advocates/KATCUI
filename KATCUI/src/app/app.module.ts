import { BaseURLService } from './base-url.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { HitListService } from './hit-list.service';
import { LintService } from './lint.service';
import { RuleErrorService } from './rule-error.service';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { StartRedirectComponent } from './start-redirect/start-redirect.component';


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
    LintResultsComponent,
    LanguageSelectorComponent,
    StartRedirectComponent
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
    HitListService,
    LintService,
    RuleErrorService,
    BaseURLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
