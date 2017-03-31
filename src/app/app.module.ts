import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { AlertModule, ModalModule } from 'ng2-bootstrap';
import { PostService } from './shared/services/post.service';
import { CommentService } from './shared/services/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
