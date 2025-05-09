import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.scss']
})
export class Student2Component implements OnInit {
 studentName !: string;
  constructor(
    private _studentService : StudentService
  ) { }

  ngOnInit(): void {
    this._studentService.studentName$
      .subscribe(res => {
        this.studentName = res;
      })
  }

}
