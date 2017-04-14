import { Route } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostNewComponent } from './post-new/post-new.component';
import { PostsComponent } from './posts.component';
import { Angular2TokenService } from 'angular2-token';
import { PostEditComponent } from './post-edit/post-edit.component';

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
    component: PostNewComponent,
    canActivate: [ Angular2TokenService ]
  },
  {
    path: 'posts/:id',
    component: PostComponent
  },
  {
    path: 'posts/:id/edit',
    component: PostEditComponent,
    canActivate: [ Angular2TokenService ]
  }
];
