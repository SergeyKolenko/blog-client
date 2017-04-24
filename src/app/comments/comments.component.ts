import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../shared/classes/comment';
import { ActivatedRoute } from "@angular/router";
import { Angular2TokenService } from "angular2-token";
import { CommentService } from "../shared/services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: [ './comments.component.scss' ]
})
export class CommentsComponent implements OnInit {

  @Input() postID: number;
  public comments: Comment[];

  constructor(private route: ActivatedRoute,
              public tokenService: Angular2TokenService,
              private commentService: CommentService) {
    this.comments = this.route.snapshot.data[ 'comments' ];
  }

  fetchComments() {
    this.commentService
      .getComments(this.postID)
      .subscribe(
        res => {
          this.comments = res;
          console.log(res);
        }
        // res => console.log(res)
      );
  }

  ngOnInit() {
    // this.fetchComments();
  }

}
