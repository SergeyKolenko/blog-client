import { Route } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostNewComponent } from './post-new/post-new.component';
import { PostsComponent } from './posts.component';
import { Angular2TokenService } from 'angular2-token';

export const PostsRouter: Route[] = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/new',
    component: PostNewComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent
  },
  {
    path: 'posts/:id/edit',
    component: PostComponent,
    canActivate: [Angular2TokenService]
  }
];
