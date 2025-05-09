import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentName$ = new BehaviorSubject<string>('Jhon Doe')
  constructor( ) { }
}
