import { Routes } from '@angular/router';
import { PostsRouter } from './posts/posts.routes';
import { SignInRouter } from './sign-in/sign-in.routes';
import { SignUpRouter } from './sign-up/sign-up.routes';
import { ProfileRouter } from './profile/profile.routes';
import { NotFoundRouter } from './not-found/nof-found.routes';

export const routes: Routes = [
  ...PostsRouter,
  ...SignUpRouter,
  ...SignInRouter,
  ...ProfileRouter,
  ...NotFoundRouter
];
