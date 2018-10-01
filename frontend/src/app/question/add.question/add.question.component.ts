import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Section} from '../dto/section';
import {QuestionService} from '../../services/question.service';
import {Question} from '../dto/question';
import {AddAnswersListComponent} from '../add.answers.ist/add.answers.list.component';
import {SectionService} from '../../services/section.service';
import {Observable} from 'rxjs';

const NEW_SECTION_OPTION_TEXT = 'Nova Oblast';

@Component({
  selector: 'app-add-question',
  templateUrl: './add.question.component.html',
  styleUrls: ['./add.question.component.css']
})
export class AddQuestionComponent implements OnInit {
  // Logic Variables:
  hasNewSection: boolean;
  hideSnippetArea: boolean;
  hideSnippetAreaText: string;
  noSections: boolean;
  newSectionOptionText = NEW_SECTION_OPTION_TEXT;
  // Input Variables:
  $sections: Observable<Section[]>;
  @Input() sections: Section[];
  // Variables for generating request:
  @ViewChild(AddAnswersListComponent) child;
  existingSection: string;
  newSection: string;
  // Request variable
  question: Question;
  constructor(private questionService: QuestionService, private sectionService: SectionService) {
  }
  ngOnInit(): void {
    this.hasNewSection = false;
    this.hideSnippetArea = false;
    this.hideSnippetAreaText = 'hide';
    this.question = new Question('', '', 3, null, null);
    this.existingSection = this.returnFirstOrNewSection();
    this.getSectionsFromDB();
  }
  returnFirstOrNewSection(): string {
    if (this.sections === null || this.sections.length === 0) {
      return this.newSectionOptionText;
    } else {
      return this.sections[0].section;
    }
  }
  cancelNewSection() {
    console.log('cancelNewSection');
    this.existingSection = this.returnFirstOrNewSection();
    this.toggleNewSection();
  }
  toggleNewSection() {
    console.log('toggleNewSection');
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
  getSectionsFromDB() {
    this.$sections = this.sectionService.getAllSections();
    this.$sections.subscribe(
      sections => {
        this.sections = sections as Section[];
    },
      () => {
        console.log('error iz observablea');
    },
      () => {
      this.existingSection = this.returnFirstOrNewSection();
      if (this.sections.length === 0) {
        this.noSections = true;
        this.hasNewSection = true;
      }
      });
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
