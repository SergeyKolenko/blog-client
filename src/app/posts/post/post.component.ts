import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "../../shared/classes/post";
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.scss' ]
})
export class PostComponent {

  public post: Post;

  constructor(private route: ActivatedRoute,
              public tokenService: Angular2TokenService,
              private router: Router) {
    this.post = this.route.snapshot.data[ 'post' ] as Post;
  }

  edit() {
    this.router.navigate([ 'posts', this.post.id, 'edit' ]);
  }

  destroy() {

  }

}
