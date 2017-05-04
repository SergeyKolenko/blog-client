import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from "../shared/classes/user";
import { Angular2TokenService } from "angular2-token";
import { partitionArray } from "../shared/helper";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {

  public users: User[];
  public maxSize: number = 5;
  public totalItems: number;
  public currentPage: number = 1;
  public numPages: number = 0;
  public itemsPerPage = 10;
  public splitedUsers: User[][];

  constructor(private route: ActivatedRoute, public tokenService: Angular2TokenService) {
    this.users = this.route.snapshot.data[ 'users' ];
    this.totalItems = this.users.length;
    this.splitedUsers = partitionArray(this.users, this.itemsPerPage);
  }

  ngOnInit() {
  }

}
