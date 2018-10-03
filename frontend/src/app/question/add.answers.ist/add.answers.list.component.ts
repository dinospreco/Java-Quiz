import {Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {Answer} from '../dto/answer';

@Component({
  selector: 'app-add-answers-list',
  templateUrl: './add.answers.list.component.html',
  styleUrls: ['./add.answers.list.component.css']
})
export class AddAnswersListComponent implements OnInit, OnChanges {
  // Logic Variables:
  selectBoxSize: number;
  @ViewChildren('answerElement') answerElement;
  // Form input
  answer: string;
  correctAnswer: boolean;
  // Answers
  @Output() answers: Answer[];
  // Selected answer for deleting;
  selectedAnswer: string;
  constructor() { }
  ngOnInit() {
    this.resetValues();
    this.answers = [];
    this.setSelectBoxSize();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setSelectBoxSize();
  }
  setSelectBoxSize() {
    if (this.answers === null || this.answers.length < 4) {
      this.selectBoxSize = 4;
    } else {
      this.selectBoxSize = this.answers.length;
    }
  }
  addAnswer() {
    this.answerElement.first.nativeElement.focus();
    if (this.answer !== null && this.answer !== '') {
      this.answers.push(new Answer(this.answer, this.correctAnswer));
    }
    this.resetValues();
    this.setSelectBoxSize();
  }
  resetValues() {
    this.answer = '';
    this.correctAnswer = false;
  }
  removeAnswer() {
    for (let i = 0 ; i < this.selectedAnswer.length ; i++) {
      this.answers = this.answers.filter(answer => answer.answer !== this.selectedAnswer[i]);
    }
    this.setSelectBoxSize();
  }
  correctAnswerText(isCorrect: boolean): string {
    if (isCorrect) {
      return 'Tačan odgovor';
    } else {
      return 'Netačan odgovor';
    }
  }
}
