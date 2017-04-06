import { Routes } from '@angular/router';
import { PostsRouter } from './posts/posts.routes';
import { SignInRouter } from './sign-in/sign-in.routes';
import { SignUpRouter } from './sign-up/sign-up.routes';

export const routes: Routes = [
  ...PostsRouter,
  ...SignUpRouter,
  ...SignInRouter
];
