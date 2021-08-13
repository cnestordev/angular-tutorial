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
  postUrl: string =
    'https://jsonblob.com/api/jsonblob/a2b01cdc-fc61-11eb-8616-37df21072d73';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postUrl);
  }

  savePost(post: IPost): Observable<IPost> {
    return this.http.put<IPost>(this.postUrl, post, httpOptions);
  }
}
