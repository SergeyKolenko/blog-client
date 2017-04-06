import  { Route } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostNewComponent } from './post-new/post-new.component';
import { PostsComponent } from './posts.component';

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
  }
];
