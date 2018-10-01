import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Answer} from '../dto/answer';

@Component({
  selector: 'app-add-answers-list',
  templateUrl: './add.answers.list.component.html',
  styleUrls: ['./add.answers.list.component.css']
})
export class AddAnswersListComponent implements OnInit {
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
  }
  addAnswer() {
    if (this.answer !== null && this.answer !== '') {
      this.answers.push(new Answer(this.answer, this.correctAnswer));
    }
    this.resetValues();
  }
  resetValues() {
    this.answer = '';
    this.correctAnswer = false;
  }
  removeAnswer() {
    for (let i = 0 ; i < this.selectedAnswer.length ; i++) {
      this.answers = this.answers.filter(answer => answer.answer !== this.selectedAnswer[i]);
    }
  }
  correctAnswerText(isCorrect: boolean): string {
    if (isCorrect) {
      return 'Tačan odgovor';
    } else {
      return 'Netačan odgovor';
    }
  }
}
