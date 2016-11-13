import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'users',
  templateUrl: 'app/users/user.component.html'
})

export class UserComponent {

  constructor(private _tokenService: Angular2TokenService) {
	 this._tokenService.init({
			apiPath:                    "http://localhost:3000",

			signInPath:                 'auth/sign_in',
			signInRedirect:             null,
			signInStoredUrlStorageKey:  null,

			signOutPath:                'auth/sign_out',
			validateTokenPath:          'auth/validate_token',

			registerAccountPath:        'auth',
			deleteAccountPath:          'auth',
			registerAccountCallback:    window.location.href,

			updatePasswordPath:         'auth',
			resetPasswordPath:          'auth/password',
			resetPasswordCallback:      window.location.href,

			userTypes:                  null,

			globalOptions: {
				headers: {
						'Content-Type':     'application/json',
						'Accept':           'application/json'
				}
			}
    });
  }

  signIn(email: string, password: string): void {
    this._tokenService.signIn(
      email,
      password
    ).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }
}
