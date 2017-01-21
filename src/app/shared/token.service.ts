import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class TokenService {
  constructor(public _tokenService: Angular2TokenService) {
    if (process.env.ENV === 'production') {
      var api_path = "http://geekbread-154401.appspot-preview.com"
    } else {
      var api_path = 'http://localhost:3000'
    }

	  this._tokenService.init({
      apiPath:                    api_path,
			signInPath:                 'auth/sign_in',
			signInRedirect:             'sign-in',
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
