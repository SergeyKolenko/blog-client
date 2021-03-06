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
import { AlertModule, ModalModule, PaginationModule } from 'ng2-bootstrap';
import { PostService } from './shared/services/post.service';
import { CommentService } from './shared/services/comment.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PostNewComponent } from './posts/post-new/post-new.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './shared/services/auth.service';
import { ProfileComponent } from './users/profile/profile.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostResolver } from "./shared/resolvers/post.resolver";
import { NotFoundComponent } from './not-found/not-found.component';
import { CatcherService } from "./shared/services/catcher.service";
import { PostsResolver } from "./shared/resolvers/posts.resolver";
import { FlashErrorsComponent } from './flash-errors/flash-errors.component';
import { UserService } from "./shared/services/user.service";
import { UsersComponent } from './users/users.component';
import { UserShowComponent } from './users/user-show/user-show.component';
import { UserResolver } from "./shared/resolvers/user.resolver";
import { UsersResolver } from "./shared/resolvers/users.resolver";
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentsResolver } from "./shared/resolvers/comments.resolver";

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
    ProfileComponent,
    PostEditComponent,
    NotFoundComponent,
    FlashErrorsComponent,
    UsersComponent,
    UserShowComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostService,
    CommentService,
    Angular2TokenService,
    AuthService,
    PostResolver,
    PostsResolver,
    CatcherService,
    UserService,
    UserResolver,
    UsersResolver,
    CommentsResolver
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
