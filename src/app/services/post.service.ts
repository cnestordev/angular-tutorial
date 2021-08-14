import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IPost } from './../models/Post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postUrl);
  }

  savePost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(this.postUrl, post, httpOptions);
  }

  updatePost(post: IPost): Observable<IPost> {
    const url = `${this.postUrl}/${post.id}`;
    return this.http.put<IPost>(url, post, httpOptions);
  }

  removePost(post: IPost | number): Observable<IPost> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postUrl}/${id}`;
    return this.http.delete<IPost>(url, httpOptions);
  }

  getPost(id: number): Observable<IPost> {
    const url = `${this.postUrl}/${id}`;
    return this.http.get<IPost>(url);
  }
}
