import { Component } from '@angular/core';
import {SectionService} from './services/section.service';
import {Observable} from 'rxjs';
import {Section} from './question/dto/section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Java Quiz';
  constructor() {
  }
}
