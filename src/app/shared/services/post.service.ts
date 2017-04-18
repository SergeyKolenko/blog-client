import { Post } from '../classes/post';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Angular2TokenService } from "angular2-token";
import { Http } from "@angular/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class PostService {

  constructor(private authToken: Angular2TokenService, private http: Http) {
  }

  createPost(post: Post): Observable<Post> {
    return this.authToken
      .post(`posts`, post)
      .map(res => res.json())
      .catch(error => Observable.of(error));
  }

  getPost(id: number): Observable<Post> {
    return this.http
      .get(`${environment.api_path}/posts/${id}`)
      .map(res => res.json())
      .catch(error => Observable.of(error));
  }

}
