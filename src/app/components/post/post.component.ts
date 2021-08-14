import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../services/post.service';
import { IPost } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent implements OnInit {
  post: IPost;

  constructor(private route: ActivatedRoute, private postServie: PostService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('postId');
    this.postServie.getPost(id).subscribe((post) => {
      console.log(post);
      this.post = post;
    });
  }
}
