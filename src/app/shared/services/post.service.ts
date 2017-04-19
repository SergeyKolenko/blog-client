import { Post } from '../classes/post';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Angular2TokenService } from "angular2-token";
import { Http } from "@angular/http";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";

@Injectable()
export class PostService {

  constructor(private authToken: Angular2TokenService,
              private http: Http,
              private router: Router) {
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
      .catch(error => {
        console.log(error.json());
        let e = error.json();
        if (e.status === 404) {
          this.router.navigate([ '/posts' ]);
        }

        return Observable.of(error);
      });
  }

  destroyPost(id: number): Observable<Response> {
    return this.authToken
      .delete(`posts/${id}`)
      .map(res => res.json())
      .catch(error => Observable.of(error));
  }

}
