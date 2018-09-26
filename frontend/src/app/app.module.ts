import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddQuestionComponent } from './question/add.question/add.question.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import {SectionService} from './services/section.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodemirrorModule,
    HttpClientModule
  ],
  providers: [
    SectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
