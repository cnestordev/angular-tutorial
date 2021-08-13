import { Component, OnInit } from '@angular/core';

import { IPost } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass'],
})
export class PostFormComponent implements OnInit {
  constructor(private postServices: PostService) {}

  ngOnInit(): void {}

  addPost(title, body) {
    if (!title || !body) alert('please add post');
    else {
      let post = {
        id: Math.floor(Math.random() * 1000000),
        title,
        body,
      };

      this.postServices.savePost({ title, body } as IPost).subscribe((post) => {
        console.log(post);
      });
    }
  }
}
