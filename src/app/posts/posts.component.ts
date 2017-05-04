import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../shared/classes/post";
import { partitionArray } from "../shared/helper";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [ './posts.component.scss' ]
})
export class PostsComponent implements OnInit {

  public posts: Post[];
  public maxSize: number = 5;
  public totalItems: number;
  public currentPage: number = 1;
  public numPages: number = 0;
  public itemsPerPage = 7;
  public splitedPosts: Post[][];

  constructor(protected tokenService: Angular2TokenService,
              private route: ActivatedRoute) {
    this.posts = this.route.snapshot.data[ 'posts' ];
    this.totalItems = this.posts.length;
    this.splitedPosts = partitionArray(this.posts, this.itemsPerPage);
  }

  ngOnInit() {
  }

}
