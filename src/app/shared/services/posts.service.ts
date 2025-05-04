import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BASE_URL : string = environment.baseUrl;
  POST_URL : string = `${environment.baseUrl}/posts`;
  TODOS_URL : string =`${environment.baseUrl}/todos`;
  USERS_URL : string =`${environment.baseUrl}/users`;
  COMMENTS_URL: string=`${environment.baseUrl}/comments`;
  constructor(
    private _http : HttpClient
  ) { }

  fetchAllPosts() : Observable<Array<string>>{
    return this._http.get<any>(this.POST_URL)
          .pipe(
            map((arrOfObj : Array<any>) => {
              let arrOfTitle :Array<string> =arrOfObj.map (post => {
                return post.title
              })
              return arrOfTitle
            })
          )
  }

  fetchAllTodos() : Observable<any[]>{
    return this._http.get<any[]>(this.TODOS_URL)
  }

  completedTodos() : Observable<any[]>{
    return this.fetchAllTodos()
      .pipe(
         map((arr : Array<any>) => {
          let completedtodoArr :Array<any> = arr.filter(todo => todo.completed)
          return completedtodoArr
         })
      )
  }

  fetchAllUsers(): Observable<any[]>{
    return this._http.get<any[]> (this.USERS_URL)
  }

  UsersTodo() : Observable<any[]>{
    return this.fetchAllUsers()
      .pipe(
         map((arr : Array<any>) => {
          let usersArr : Array<any> = arr.map(user => {
             return {
              "id" : user.id,
              "name": user.name,
              "email": user.email,
              "phone":user.phone,
              "website":user.website
             }
          })
          return usersArr
         })
      )
  }

  fetchAllComments():Observable<any[]>{
    return this._http.get<any[]>(this.COMMENTS_URL) 
  }

  commentsTodo() : Observable<any[]>{
    return this.fetchAllComments()
      .pipe(
        map((arr : Array <any>) => {
          let commentsArr : Array<any> = arr.map(comment =>{
            return {
              "name" : comment.name,
              "body" : comment.body
            }
          })
          return commentsArr
        })
      )
  }
}
