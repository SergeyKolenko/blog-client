import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent {

  public signInForm: FormGroup;
  public formSubmitted: boolean = false;
  public serverErrors: string[];

  constructor(private authToken: Angular2TokenService, private _fb: FormBuilder, private router: Router) {
    this.signInForm = _fb.group({
      email: [ '', [
        Validators.required,
        Validators.pattern('.+?@.+?\\..+') ]
      ],
      password: [ '', [
        Validators.required,
        Validators.minLength(8) ]
      ]
    });
  }

  public signIn(form) {
    this.formSubmitted = true;
    if (form.valid) {
      this.authToken.signIn(form.value)
        .subscribe(
          () => {
            this.router.navigate([ '' ]);
          },
          error => {
            this.serverErrors = error.json().errors;
          }
        );
    }
  }

}
