import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../shared/classes/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [ './posts.component.scss' ]
})
export class PostsComponent implements OnInit {

  public posts: Post[];

  constructor(protected tokenService: Angular2TokenService,
              private route: ActivatedRoute) {
    this.posts = this.route.snapshot.data[ 'posts' ];
  }

  ngOnInit() {
  }

}
