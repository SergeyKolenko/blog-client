import { Post } from '../classes/post';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Angular2TokenService } from "angular2-token";

@Injectable()
export class PostService {

  constructor(private authToken: Angular2TokenService) {
  }

  createPost(post: Post): Observable<Post> {
    return this.authToken
      .post(`posts`, post)
      .map(res => res.json())
      .catch(error => Observable.of(error));
  }

}
