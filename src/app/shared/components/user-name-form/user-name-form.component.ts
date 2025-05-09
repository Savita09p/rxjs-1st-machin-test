import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';

@Component({
  selector: 'app-user-name-form',
  templateUrl: './user-name-form.component.html',
  styleUrls: ['./user-name-form.component.scss']
})
export class UserNameFormComponent implements OnInit {

  constructor(
    private _userNameService : UserNameService 
  ) { }

  ngOnInit(): void {
  }

  onUserNameAdd(userName : HTMLInputElement){
    let val = userName.value
    console.log(val);
    userName.value = ''
    this._userNameService.userName$.next(val)  //next method of observer here subject act like a observer(emiter)
  }

}
