import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../dto/section';

@Component({
  selector: 'app-add-question',
  templateUrl: './add.question.component.html',
  styleUrls: ['./add.question.component.css']
})
export class AddQuestionComponent implements OnInit {
  selectedSection: string;
  hasNewSection: boolean;
  hideSnippetArea: boolean;
  hideSnippetAreaText: string;
  @Input() sections: Section[];
  // Form inputs
  newSection: string;
  difficulty: number;
  question: string;
  snippetCode: string;
  correctAnswer: string;
  answerOption1: string;
  answerOption2: string;
  answerOption3: string;
  constructor() {
  }
  ngOnInit(): void {
    this.difficulty = 3;
    this.hasNewSection = false;
    this.hideSnippetArea = false;
    this.hideSnippetAreaText = 'hide';
  }
  enterNewSection() {
    if (this.selectedSection === 'Nova oblast') {
      this.selectedSection = '';
      this.toggleNewSection();
    }
  }
  cancelNewSection() {
    this.selectedSection = this.sections[0].section;
    this.toggleNewSection();
  }
  toggleNewSection() {
    this.hasNewSection = !this.hasNewSection;
  }
  toggleSnippetAreaVisibility() {
    this.hideSnippetArea = !this.hideSnippetArea;
    if (this.hideSnippetAreaText === 'hide') {
      this.hideSnippetAreaText = 'show';
    } else {
      this.hideSnippetAreaText = 'hide';
    }
  }
  submit() {
    console.log('selectedSection: ' + this.selectedSection);
    console.log('hasNewSection: ' + this.hasNewSection);
    console.log('hideSnippetArea: ' + this.hideSnippetArea);
    console.log('hideSnippetAreaText: ' + this.hideSnippetAreaText);
    console.log('newSection: ' + this.newSection);
    console.log('difficulty: ' + this.difficulty);
    console.log('question: ' + this.question);
    console.log('snippetode: ' + this.snippetCode);
    console.log('correctAnswer: ' + this.correctAnswer);
    console.log('answer1: ' + this.answerOption1);
    console.log('answer2: ' + this.answerOption2);
    console.log('answer3: ' + this.answerOption3);
  }

}
