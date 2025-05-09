import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {
  userName$ = new Subject<string>()
  constructor() { }
}
