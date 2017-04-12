import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  constructor(protected authService: AuthService, private router: Router) {
  }

  public signOut(): void {
    this.authService.signOut()
      .subscribe(
        () => this.router.navigate([ '/' ])
      );
  }

}
