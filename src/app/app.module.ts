import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { AlertModule, ModalModule } from 'ng2-bootstrap';
import { PostService } from './shared/services/post.service';
import { CommentService } from './shared/services/comment.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PostNewComponent } from './posts/post-new/post-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    SignInComponent,
    SignUpComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostService,
    CommentService,
    Angular2TokenService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
