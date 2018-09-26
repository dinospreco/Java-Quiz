import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../dto/section';
import {Question} from '../dto/question';
import {Answer} from '../dto/answer';

@Component({
  selector: 'app-add-question',
  templateUrl: './add.question.component.html',
  styleUrls: ['./add.question.component.css']
})
export class AddQuestionComponent implements OnInit {
  selectedSection: string;
  newSectionOptionText: string;
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
  private questionDTO: Question;
  private section: Section;
  private answers: Answer[];
  constructor() {
  }
  ngOnInit(): void {
    this.difficulty = 3;
    this.hasNewSection = false;
    this.hideSnippetArea = false;
    this.hideSnippetAreaText = 'hide';
    this.newSectionOptionText = 'Nova Oblast';
  }
  enterNewSection() {
    if (this.isNewSectionSelected()) {
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
    this.questionDTO.question = this.question;
    this.questionDTO.difficulty = this.difficulty;
    if (this.isNewSectionSelected()) {
      this.section.section = this.newSection;
    } else {
      this.section.section = this.selectedSection;
    }
    this.questionDTO.section = this.section;
    this.questionDTO.snippet = this.snippetCode;
    this.questionDTO.answers = [
      {answer: this.correctAnswer, correctAnswer: true},
      {answer: this.answerOption1, correctAnswer: false},
      {answer: this.answerOption2, correctAnswer: false},
      {answer: this.answerOption3, correctAnswer: false}];

  }
  logForm() {
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
  isNewSectionSelected() {
    return this.selectedSection === this.newSectionOptionText;
  }

}
