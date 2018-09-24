import {Section} from './section';
import {Answer} from './answer';

export interface Question {
  question: string;
  snippet: string;
  section: Section;
  answers: Answer[];
}
