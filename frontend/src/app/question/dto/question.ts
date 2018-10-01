import {Section} from './section';
import {Answer} from './answer';

export class Question {
  question: string;
  snippet: string;
  difficulty: number;
  section: Section;
  answers: Answer[];
  constructor(question: string, snippet: string, difficulty: number, section: Section, answers: Answer[]) {
    this.question = question;
    this.snippet = snippet;
    this.difficulty = difficulty;
    this.section = section;
    this.answers = answers;
  }
}
