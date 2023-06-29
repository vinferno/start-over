import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { UserByIdComponent } from './components/user-by-id/user-by-id.component';
import { PostsByUserComponent } from './components/posts-by-user/posts-by-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    PostsListComponent,
    UserByIdComponent,
    PostsByUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
