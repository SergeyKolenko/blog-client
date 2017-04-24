import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Comment } from '../classes/comment';
import { CommentService } from '../services/comment.service';

@Injectable()
export class CommentsResolver implements Resolve<Comment[]> {
  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Comment[]> {
    return this.commentService.getComments(route.params[ 'id' ]);
  }
}
