import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { environment } from "../../../environments/environment";
import { CatcherService } from "./catcher.service";
import { Comment } from '../classes/comment';
import { Angular2TokenService } from "angular2-token";

@Injectable()
export class CommentService {

  constructor(private http: Http,
              private catcher: CatcherService,
              private tokenService: Angular2TokenService) {
  }


  getComments(postId: number): Observable<Comment[]> {
    return this.http.get(`${environment.api_path}/posts/${postId}/comments`)
      .map(res => res.json())
      .catch(error => {
        this.catcher.catch(error);
        return Observable.of(error);
      });
  }

  createComment(postId: number, comment: Comment): Observable<Comment> {
    return this.tokenService.post(`posts/${postId}/comments`, comment)
      .map(res => res.json())
      .catch(error => {
        this.catcher.catch(error);
        return Observable.of(error);
      });
  }

}
