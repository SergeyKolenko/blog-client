import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "../classes/user";
import { CatcherService } from "./catcher.service";
import { environment } from "../../../environments/environment";

@Injectable()
export class UserService {

  constructor(private http: Http, private catcher: CatcherService) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get(`${environment.api_path}/users`)
      .map(res => res.json())
      .catch(error => {
        this.catcher.catch(error);
        return Observable.of(error);
      });
  }

  getUser(id: number): Observable<User> {
    return this.http.get(`${environment.api_path}/users/${id}`)
      .map(res => res.json())
      .catch(error => {
        this.catcher.catch(error);
        return Observable.of(error);
      });
  }

}
