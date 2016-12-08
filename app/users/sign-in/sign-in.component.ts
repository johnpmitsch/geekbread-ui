import { Component } from '@angular/core';
import { AuthData } from '../shared/auth.model';
import { Angular2TokenService } from 'angular2-token';
import { TokenService } from '../token.service';

@Component({
  selector: 'sign-in',
  templateUrl: 'app/users/sign-in/sign-in.component.html'
})

export class SignInComponent {
	private _authData: AuthData = <AuthData>{};
	private _output: any;

  constructor(
		private tokenService: TokenService
  ) {};

    onSubmit() {
			this._output = null;
			this.tokenService._tokenService.signIn(
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

		currentUserSignedIn() {
			this.tokenService._tokenService.userSignedIn();
		}

		signOut() {
			this.tokenService._tokenService.signOut().subscribe(
					res =>      console.log(res),
					error =>    console.log(error)
			);
		}
}