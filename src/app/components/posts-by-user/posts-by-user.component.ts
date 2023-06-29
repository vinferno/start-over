import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-by-user',
  templateUrl: './posts-by-user.component.html',
  styleUrls: ['./posts-by-user.component.scss']
})
export class PostsByUserComponent implements OnInit {

  @Input() userId!: number;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  get posts() {
    return this.postsService.posts.filter( post => post.userId === this.userId)
  }

}
