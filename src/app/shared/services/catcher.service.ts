import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class CatcherService {

  public message$ = new BehaviorSubject('');

  constructor(private router: Router) {
  }

  catch(error: Response) {
    console.log(error);
    console.log(error.json());
    switch (error.status) {
      case 404: {
        this.router.navigate([ '404' ]);
        break;
      }
      case 401 || 403: {
        this.router.navigate([ 'sign-in' ]);
        break;
      }
      case 422: {
        this.message$.next(error.statusText);
        break;
      }
      default: {
        this.message$.next(error.statusText);
      }
    }
  }

}
