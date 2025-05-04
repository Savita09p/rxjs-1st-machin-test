import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentsArr !: Array<any>
  commentsSub ! : Subscription
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
   this.commentsSub = this._postsService.commentsTodo()
      .subscribe((res : Array<any>) =>{
        console.log(res)
        this.commentsArr = res
      })
  }

  ngOnDestroy() : void {
    this.commentsSub.unsubscribe()
  }

}
