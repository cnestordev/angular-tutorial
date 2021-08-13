import { Component, OnInit } from '@angular/core';

import { IPost } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postServices: PostService) {}

  ngOnInit(): void {
    this.postServices.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}