import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Question} from '../question/dto/question';

const ENDPOINT_BASE = 'http://localhost:8080/api/questions/';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  addQuestion(question: Question) {
    return this.http.post(ENDPOINT_BASE, question).subscribe(
      () => {
      },
      error => {
        console.log(error);
      }
    );
  }
}
