import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  constructor(
    private _studentService : StudentService
  ) { }

  ngOnInit(): void {
  }

  onStudentAdd(studentName : HTMLInputElement){
    let val = studentName.value
    console.log(val);
    studentName.value = ''
    this._studentService.studentName$.next(val) //next method of observer
  }

}
