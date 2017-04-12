import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [ './sign-up.component.scss' ],
  providers: [ AuthService ]
})
export class SignUpComponent {

  public signUpForm: FormGroup;
  public formSubmitted: boolean = false;
  public serverErrors: string[];

  constructor(private _fb: FormBuilder, private _authService: AuthService, private router: Router) {
    this.signUpForm = _fb.group({
      nickname: [ '', Validators.required ],
      email: [ '', [
        Validators.required,
        Validators.pattern('.+?@.+?\\..+') ]
      ],
      passwordGroup: _fb.group({
        password: [ '', [
          Validators.required,
          Validators.minLength(8) ]
        ],
        passwordConfirmation: [ '' ]
      }, { validator: this.equalValidator })
    });
  }

  public equalValidator({ value }: FormGroup): { [key: string]: boolean } {
    const [ first, ...rest ] = Object.keys(value || {});
    const valid = rest.every(v => value[ v ] === value[ first ]);
    return valid ? null : { equal: true };
  }

  public signUp(form) {
    this.formSubmitted = true;
    if (form.valid) {
      this._authService.signUp(form.value)
        .subscribe(
          () => this.router.navigate([ '/sign-in' ]),
          error => {
            this.serverErrors = error.json().errors.full_messages as string[];
          }
        );
    }
  }

}
