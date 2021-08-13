import { HttpClient } from '@angular/common/http';
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
    // makes an http request to server with HttpClient
    this.postServices.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onNewPost(post) {
    this.posts.unshift(post);
  }
}
