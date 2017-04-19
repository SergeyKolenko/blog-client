import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "../../shared/classes/post";
import { Angular2TokenService } from "angular2-token";
import { PostService } from "../../shared/services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.scss' ]
})
export class PostComponent {

  public post: Post;

  constructor(private route: ActivatedRoute,
              public tokenService: Angular2TokenService,
              private router: Router,
              private postService: PostService) {
    this.post = this.route.snapshot.data[ 'post' ] as Post;
  }

  edit() {
    this.router.navigate([ 'posts', this.post.id, 'edit' ]);
  }

  destroy() {
    if (confirm('A you sure?')) {
      this.postService.destroyPost(this.post.id)
        .subscribe(
          () => this.router.navigate([ 'posts' ])
        );
    }
  }

}
