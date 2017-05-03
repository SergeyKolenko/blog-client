import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommentService } from "../../shared/services/comment.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: [ './comment-form.component.scss' ]
})
export class CommentFormComponent implements OnInit {

  @Input() postID: number;
  @Output() commentAdded: EventEmitter<any> = new EventEmitter();

  public commentForm: FormGroup;
  public formSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private commentService: CommentService) {
    this.commentForm = fb.group({
      text: [ '', Validators.required ]
    });
  }

  ngOnInit() {
  }

  createComment() {
    this.formSubmitted = true;
    if (this.commentForm.valid) {
      this.commentService.createComment(this.postID, this.commentForm.value)
        .subscribe(
          () => {
            this.commentForm.reset();
            this.formSubmitted = false;
            this.commentAdded.emit(null);
          }
        );
    }
  }

}
