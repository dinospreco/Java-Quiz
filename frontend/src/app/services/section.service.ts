import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Section} from '../question/dto/section';
import {HttpClient} from '@angular/common/http';

const ENDPOINT_BASE = 'http://localhost:8080/api/sections/';
@Injectable({
  providedIn: 'root'
})
export class SectionService {
  constructor(private http: HttpClient) { }
  getAllSections(): Observable<Section[]> {
    return this.http.get<Section[]>(ENDPOINT_BASE);
  }
}
