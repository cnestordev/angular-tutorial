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
  currentPost: IPost = {
    id: 0,
    title: '',
    body: '',
  };
  isEdit: boolean = false;

  constructor(private postServices: PostService) {}

  ngOnInit(): void {
    // makes an http request to server with HttpClient
    this.postServices.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onNewPost(post) {
    this.posts.unshift(post);
    this.currentPost = {
      id: 0,
      title: '',
      body: '',
    };
  }

  editPost(post: IPost) {
    this.currentPost = post;
    this.isEdit = true;
  }

  updatedPost(post: IPost) {
    this.posts.forEach((current, index) => {
      if (post.id === current.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: '',
        };
      }
    });
  }

  removePost(post: IPost) {
    this.postServices.removePost(post.id).subscribe(() => {
      // delete from posts array
      this.posts = this.posts.filter((curr) => {
        return curr.id !== post.id;
      });
    });
  }
}
