import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

import { AuthData } from './shared/auth.model';

@Component({
  selector: 'users',
  templateUrl: 'app/users/user.component.html'
})

export class UserComponent {

  constructor(public _tokenService: Angular2TokenService) {
	 this._tokenService.init({
			apiPath:                    "http://localhost:3000",

			signInPath:                 'auth/sign_in',
			signInRedirect:             null,
			signInStoredUrlStorageKey:  null,

			signOutPath:                'auth/sign_out',

			registerAccountPath:        'auth',
			deleteAccountPath:          'auth',
			registerAccountCallback:    'recipes',

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
}
