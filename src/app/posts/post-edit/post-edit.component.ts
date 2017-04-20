import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from "../../shared/services/post.service";
import { Angular2TokenService } from "angular2-token";
import { Post } from "../../shared/classes/post";
import { User } from "../../shared/classes/user";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: [ './post-edit.component.scss' ]
})
export class PostEditComponent implements OnInit {

  public post: Post;
  public postForm: FormGroup;
  public formSubmitted: boolean = false;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              public tokenService: Angular2TokenService,
              private router: Router,
              private fb: FormBuilder) {
    this.post = this.route.snapshot.data[ 'post' ];

    this.tokenService.validateToken().subscribe(user => {
      if (user.json().data.id !== this.post.user.id) {
        this.router.navigate([ 'posts', this.post.id ]);
      }
    });

    this.postForm = fb.group({
      title: [ this.post.title, Validators.required ],
      body: [ this.post.body, Validators.required ]
    });
  }

  ngOnInit() {
  }

  updatePost() {
    this.formSubmitted = true;
    if (this.postForm.valid) {
      this.postService.updatePost(this.post.id, this.postForm.value)
        .subscribe(
          () => this.router.navigate([ 'posts', this.post.id ])
        );
    }
  }

  cancel() {
    this.router.navigate([ 'posts', this.post.id ]);
  }

}
