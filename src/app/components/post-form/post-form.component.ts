import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { IPost } from './../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass'],
})
export class PostFormComponent implements OnInit {
  //
  @Output() newPost: EventEmitter<IPost> = new EventEmitter();
  @Output() updatedPost: EventEmitter<IPost> = new EventEmitter();
  @Input() currentPost: IPost;
  @Input() isEdit: boolean;

  constructor(private postServices: PostService) {}

  ngOnInit(): void {}

  addPost(title, body) {
    if (!title || !body) alert('please add post');
    else {
      let newPost = {
        id: Math.floor(Math.random() * 1000000),
        title,
        body,
      };

      this.postServices.savePost(newPost as IPost).subscribe((post) => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    this.postServices.updatePost(this.currentPost).subscribe((post) => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}
