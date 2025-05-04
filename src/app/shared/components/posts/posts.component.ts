import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
   postsTitleArr !: Array<string>
   postsSub ! : Subscription
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
   this.postsSub = this._postsService.fetchAllPosts()
      .subscribe((res : Array<any>) =>{
        console.log(res)
        this.postsTitleArr=res
      })
  }
  ngOnDestroy() : void {
    this.postsSub.unsubscribe()
  }

}
