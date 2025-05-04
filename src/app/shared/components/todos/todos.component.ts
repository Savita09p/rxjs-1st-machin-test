import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit,OnDestroy {
  postsTitlesArr ! : Array<any>
  todosSub !: Subscription
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
   this.todosSub = this._postsService.completedTodos()
      .subscribe ((res : Array<any>) => {
        console.log(res);
        this.postsTitlesArr = res
      })
  }
  ngOnDestroy() : void {
   this.todosSub.unsubscribe()
  }

}
