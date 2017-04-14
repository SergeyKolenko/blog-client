import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from "angular2-token";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  constructor(private router: Router, public tokenService: Angular2TokenService) {
  }

  public signOut(): void {
    this.tokenService.signOut()
      .subscribe(
        () => this.router.navigate([ '/' ])
      );
  }

}
