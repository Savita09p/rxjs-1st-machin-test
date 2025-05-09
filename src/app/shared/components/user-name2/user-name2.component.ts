import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';

@Component({
  selector: 'app-user-name2',
  templateUrl: './user-name2.component.html',
  styleUrls: ['./user-name2.component.scss']
})
export class UserName2Component implements OnInit {
  userName !: string;
  constructor(
    private _userNameService : UserNameService
  ) { }

  ngOnInit(): void {
    this._userNameService.userName$
      .subscribe(res => {
        this.userName = res;
      })
  }



}
