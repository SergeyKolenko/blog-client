import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './shared/services/auth.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    SignInComponent,
    SignUpComponent,
    PostNewComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostService,
    CommentService,
    Angular2TokenService,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
