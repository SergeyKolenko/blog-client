import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from "../shared/classes/user";
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {

  public users: User[];

  constructor(private route: ActivatedRoute, public tokenService: Angular2TokenService) {
    this.users = this.route.snapshot.data[ 'users' ];
  }

  ngOnInit() {
  }

}
