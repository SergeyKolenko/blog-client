import { Component, OnInit } from '@angular/core';
import { CatcherService } from "../shared/services/catcher.service";

@Component({
  selector: 'app-flash-errors',
  templateUrl: './flash-errors.component.html',
  styleUrls: [ './flash-errors.component.scss' ]
})
export class FlashErrorsComponent implements OnInit {

  public errorText: string;

  constructor(public catcher: CatcherService) {
    catcher.message$.subscribe(
      (val) => {
        this.errorText = val;
        console.log(val);
      }
    );
  }

  ngOnInit() {
  }

}
