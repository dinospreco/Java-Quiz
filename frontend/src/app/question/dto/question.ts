import {Section} from './section';
import {Answer} from './answer';

export interface Question {
  question: string;
  snippet: string;
  difficulty: number;
  section: Section;
  answers: Answer[];
}
