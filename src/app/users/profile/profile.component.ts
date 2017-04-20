import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})
export class ProfileComponent implements OnInit {

  constructor(protected tokenService: Angular2TokenService,
              private router: Router) {
  }

  signOut() {
    this.tokenService.signOut()
      .subscribe(
        () => this.router.navigate([ '/' ])
      );
  }

  ngOnInit() {
  }

}
