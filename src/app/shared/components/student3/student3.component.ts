import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student3',
  templateUrl: './student3.component.html',
  styleUrls: ['./student3.component.scss']
})
export class Student3Component implements OnInit {
  studentName !: string;
  constructor(
    private _studentService : StudentService
  ) { }

  ngOnInit(): void {
    this._studentService.studentName$
      .subscribe(res => {
        this.studentName =res;
      })
  }

}
