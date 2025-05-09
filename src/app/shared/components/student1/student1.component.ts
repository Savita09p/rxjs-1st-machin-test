import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.scss']
})
export class Student1Component implements OnInit {
  studentName !: string;
  constructor(
    private _studentService : StudentService
  ) { }

  ngOnInit(): void {
    this._studentService.studentName$
      .subscribe(res => {          //subscribe to get data
        this.studentName = res ;
      })
  }

}
