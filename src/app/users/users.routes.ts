import { Route } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserShowComponent } from "./user-show/user-show.component";
import { UsersResolver } from "../shared/resolvers/users.resolver";
import { UserResolver } from "../shared/resolvers/user.resolver";

export const UsersRouter: Route[] = [
  {
    path: 'users',
    component: UsersComponent,
    resolve: {
      users: UsersResolver
    }
  },
  {
    path: 'users/:id',
    component: UserShowComponent,
    resolve: {
      user: UserResolver
    }
  }
];
