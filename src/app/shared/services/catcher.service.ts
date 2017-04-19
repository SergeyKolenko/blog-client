import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class CatcherService {

  constructor(private router: Router) {
  }

  catch(error: Response) {
    switch (error.status) {
      case 404: {
        this.router.navigate([ '404' ]);
        break;
      }
      case 401 || 403: {
        this.router.navigate([ 'sign-in' ]);
        break;
      }
    }
  }

}
