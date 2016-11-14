import { Component } from '@angular/core';

import { AuthData } from '../shared/auth.model';

@Component({
  selector: 'sign-in',
  templateUrl: 'app/users/sign-in/sign-in.component.html'
})

export class SignInComponent {
	private _authData: AuthData = <AuthData>{};

    onSubmit() {
			this._output = null;
			this._tokenService.signIn(
					this._authData.email,
					this._authData.password
			).subscribe(
					res => {
							this._authData  = <AuthData>{};
							this._output    = res;
					}, error => {
							this._authData  = <AuthData>{};
							this._output    = error;
					}
			);
  }

}
