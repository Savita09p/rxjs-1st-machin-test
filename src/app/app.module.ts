import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { UsersComponent } from './shared/components/users/users.component';
import { CommentsComponent } from './shared/components/comments/comments.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserNameFormComponent } from './shared/components/user-name-form/user-name-form.component';
import { UserName1Component } from './shared/components/user-name1/user-name1.component';
import { UserName2Component } from './shared/components/user-name2/user-name2.component';
import { UserName3Component } from './shared/components/user-name3/user-name3.component';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { Student1Component } from './shared/components/student1/student1.component';
import { Student2Component } from './shared/components/student2/student2.component';
import { Student3Component } from './shared/components/student3/student3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    TodosComponent,
    UsersComponent,
    CommentsComponent,
    NavbarComponent,
    UserNameFormComponent,
    UserName1Component,
    UserName2Component,
    UserName3Component,
    StudentFormComponent,
    Student1Component,
    Student2Component,
    Student3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
