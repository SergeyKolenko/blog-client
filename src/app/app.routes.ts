import { Routes } from '@angular/router';
import { PostsRouter } from './posts/posts.routes';
import { SignInRouter } from './sign-in/sign-in.routes';
import { SignUpRouter } from './sign-up/sign-up.routes';
import { ProfileRouter } from './users/profile/profile.routes';
import { NotFoundRouter } from './not-found/nof-found.routes';
import { UsersRouter } from "./users/users.routes";

export const routes: Routes = [
  ...PostsRouter,
  ...SignUpRouter,
  ...SignInRouter,
  ...ProfileRouter,
  ...UsersRouter,
  ...NotFoundRouter
];
