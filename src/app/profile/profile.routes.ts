import { Route } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { Angular2TokenService } from 'angular2-token';

export const ProfileRouter: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ Angular2TokenService ]
  }
];
