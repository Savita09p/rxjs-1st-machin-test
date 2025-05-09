import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';

@Component({
  selector: 'app-user-name3',
  templateUrl: './user-name3.component.html',
  styleUrls: ['./user-name3.component.scss']
})
export class UserName3Component implements OnInit {
  userName !: string;
  constructor(
    private _userNameService : UserNameService
  ) { }

  ngOnInit(): void {
    this._userNameService.userName$
      .subscribe(res =>{
        this.userName = res;
      })
  }

}
