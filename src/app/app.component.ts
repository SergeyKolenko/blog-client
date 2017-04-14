import { Component } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../environments/environment";
// import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  constructor(/*private authToken: AuthService*/ private tokenService: Angular2TokenService) {
    this.tokenService.init({
      apiBase: environment.api_path
    });
    // this.authToken.validateToken();
  }
}
