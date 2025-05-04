import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArr !: Array<any>
  usersSub !: Subscription
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
   this.usersSub = this._postsService.UsersTodo()
      .subscribe((res : Array<any>) =>{
        console.log(res)
        this.usersArr = res
      })
  }

  ngOnDestroy(): void {
   this.usersSub.unsubscribe() 
  }

}
