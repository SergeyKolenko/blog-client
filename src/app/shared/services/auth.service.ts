import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  userSignedIn$: Subject<boolean> = new Subject();

  constructor(private _http: Http,
              private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiBase: environment.api_path
    });
    this._tokenService.validateToken().map(
      res => {
        res.status === 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false);
        return res;
      },
      error => {
        this.userSignedIn$.next(false);
        return error;
      }
    );
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
      .post(`${environment.api_path}/auth`, data).map(res => {
          this.userSignedIn$.next(true);
          return res;
        }
      );
  }

  signIn(signInData: { email: string, password: string }): Observable<Response> {
    return this._tokenService.signIn(signInData).map(
      res => {
        this.userSignedIn$.next(true);
        return res;
      }
    );
  }

  signOut(): Observable<Response> {

    return this._tokenService.signOut().map(
      res => {
        this.userSignedIn$.next(false);
        return res;
      }
    );
  }

}
