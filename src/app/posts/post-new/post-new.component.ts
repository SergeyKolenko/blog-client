import { Component, OnInit } from '@angular/core';
import { PostService } from "../../shared/services/post.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: [ './post-new.component.scss' ],
  providers: [ PostService ]
})
export class PostNewComponent implements OnInit {

  public postForm: FormGroup;
  public formSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) {
    this.postForm = fb.group({
      title: [ '', Validators.required ],
      body: [ '', Validators.required ]
    });
  }

  ngOnInit() {
  }

  createPost() {
    this.formSubmitted = true;
    if (this.postForm.valid) {
      this.postService.createPost(this.postForm.value)
        .subscribe(
          res => this.router.navigate(['/posts', res.id]),
          error => console.log(error)
        );
    }
  }

}
