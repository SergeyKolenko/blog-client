import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from "../../shared/classes/user";

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: [ './user-show.component.scss' ]
})
export class UserShowComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute) {
    this.user = this.route.snapshot.data[ 'user' ];
  }

  ngOnInit() {
  }

}
