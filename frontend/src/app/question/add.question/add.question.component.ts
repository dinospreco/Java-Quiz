import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../dto/section';

@Component({
  selector: 'app-add-question',
  templateUrl: './add.question.component.html',
  styleUrls: ['./add.question.component.css']
})
export class AddQuestionComponent implements OnInit {
  difficulty: number;
  codePreview = 'public class Test {}';
  selectedSection: String;
  newSection: boolean;
  @Input() sections: Section[];
  constructor() {
  }
  ngOnInit(): void {
    this.difficulty = 3;
    this.codePreview = 'public class Test {}';
    this.newSection = false;
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
    this.newSection = !this.newSection;
  }

}
