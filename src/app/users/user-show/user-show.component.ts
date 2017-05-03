import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../shared/classes/user";
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: [ './user-show.component.scss' ]
})
export class UserShowComponent {

  public user: User;

  constructor(private route: ActivatedRoute,
              private tokenService: Angular2TokenService, private router: Router) {
    this.user = this.route.snapshot.data[ 'user' ];
    this.tokenService.validateToken().subscribe(user => {
      if (user.json().data.id === this.user.id) {
        this.router.navigate([ 'profile' ]);
      }
    });
  }

}
