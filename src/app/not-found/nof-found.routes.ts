import { Route } from "@angular/router";
import { NotFoundComponent } from "./not-found.component";

export const NotFoundRouter: Route[] = [
  {
    path: '**',
    component: NotFoundComponent
  }
];
