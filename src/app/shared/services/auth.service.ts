import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable/*, Subject */} from 'rxjs';
// import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {


  constructor(private http: Http,
              /*private tokenService: Angular2TokenService*/) {
  }

  // searchUser(value): Observable<Response> {
  //   return this._http
  //     .post('http://localhost:3000/api/users/search', { user: value })
  // }

  signUp(user): Observable<Response> {
    const data = {
      nickname: user.nickname,
      email: user.email,
      password: user.passwordGroup.password,
      password_confirmation: user.passwordGroup.passwordConfirmation
    };
    return this.http
      .post(`${environment.api_path}/auth`, data);
  }

}
