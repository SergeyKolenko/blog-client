import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(protected tokenService: Angular2TokenService) { }

  ngOnInit() {
  }

}
