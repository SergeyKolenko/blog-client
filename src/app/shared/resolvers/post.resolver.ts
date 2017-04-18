import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Post } from '../classes/post';
import { PostService } from '../services/post.service';

@Injectable()
export class PostResolver implements Resolve<Post> {
  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Post> {
    return this.postService.getPost(route.params[ 'id' ]);
  }
}
