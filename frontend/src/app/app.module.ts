import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddQuestionComponent } from './question/add.question/add.question.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import {SectionService} from './services/section.service';
import {HttpClientModule} from '@angular/common/http';
import {QuestionService} from './services/question.service';
import { AddAnswersListComponent } from './question/add.answers.ist/add.answers.list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    AddAnswersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodemirrorModule,
    HttpClientModule
  ],
  providers: [
    SectionService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
