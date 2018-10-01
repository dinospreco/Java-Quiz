import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Section} from '../dto/section';
import {QuestionService} from '../../services/question.service';
import {Question} from '../dto/question';
import {AddAnswersListComponent} from '../add.answers.ist/add.answers.list.component';

@Component({
  selector: 'app-add-question',
  templateUrl: './add.question.component.html',
  styleUrls: ['./add.question.component.css']
})
export class AddQuestionComponent implements OnInit {
  newSectionOptionText: string;
  hasNewSection: boolean;
  hideSnippetArea: boolean;
  hideSnippetAreaText: string;
  noSections: boolean;
  @Input() sections: Section[];
  // Form inputs
  question: Question;
  //
  existingSection: string;
  newSection: string;
  @ViewChild(AddAnswersListComponent) child;

  constructor(private questionService: QuestionService) {
  }
  ngOnInit(): void {
    this.hasNewSection = false;
    this.hideSnippetArea = false;
    this.hideSnippetAreaText = 'hide';
    this.newSectionOptionText = 'Nova Oblast';
    this.question = new Question('', '', 3, null, null);
  }
  cancelNewSection() {
    this.existingSection = this.sections[0].section;
    this.toggleNewSection();
  }
  toggleNewSection() {
    this.hasNewSection = !this.hasNewSection;
  }
  checkIfNewSectionIsBeingAdded() {
    if (this.existingSection === this.newSectionOptionText) {
      this.hasNewSection = true;
    }
  }
  getSectionInput(): Section {
    if (this.hasNewSection) {
      return new Section(this.newSection);
    } else {
      return new Section(this.existingSection);
    }
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
    this.question.section = this.getSectionInput();
    this.question.answers = this.child.answers;
    this.questionService.addQuestion(this.question);
  }
}
