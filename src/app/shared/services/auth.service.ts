import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class AuthService {

  private API_path: string = 'http://localhost:3000';

  constructor(private _http: Http,
              private _tokenService: Angular2TokenService) {
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
    return this._http
      .post(`${this.API_path}/auth`, data);
  }

}
