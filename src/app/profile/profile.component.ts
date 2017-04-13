import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})
export class ProfileComponent implements OnInit {

  constructor(protected authTokenService: Angular2TokenService,
              protected authService: AuthService,
              private router: Router) {
  }

  signOut() {
    this.authService.signOut()
      .subscribe(
        () => this.router.navigate([ '/' ])
      );
  }

  ngOnInit() {
  }

}
