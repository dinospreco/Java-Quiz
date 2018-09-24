import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-add-question',
  templateUrl: './add.question.component.html',
  styleUrls: ['./add.question.component.css']
})
export class AddQuestionComponent implements OnInit {
  difficulty: number;
  snippet: boolean;
  @Input() codePreview = 'public class Test {}';

  ngOnInit(): void {
    this.difficulty = 3;
    this.snippet = false;
    this.codePreview = 'public class Test {}';
  }
  toggleSnippet() {
    this.snippet = !this.snippet;
  }


}
