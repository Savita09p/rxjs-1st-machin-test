import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';

@Component({
  selector: 'app-user-name1',
  templateUrl: './user-name1.component.html',
  styleUrls: ['./user-name1.component.scss']
})
export class UserName1Component implements OnInit {
  userName !:string;
  constructor(
    private _userNameService : UserNameService
  ) { }

  ngOnInit(): void {
    this._userNameService.userName$
      .subscribe(res => {    //subcribe to get data here subject act like subscriber(consumer)
        this.userName = res;
      })
  }

}
