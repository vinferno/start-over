import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts: Post[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.getPosts()
   }


  private getPosts() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      this.posts = data;
    })
  }
}
