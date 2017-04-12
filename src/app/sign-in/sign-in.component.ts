import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent {

  public signInForm: FormGroup;
  public formSubmitted: boolean = false;
  public serverErrors: string[];

  constructor(private _authToken: AuthService, private _fb: FormBuilder, private router: Router) {
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
      this._authToken.signIn(
        {
          email: form.value.email,
          password: form.value.password
        }
      )
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
