import { Component } from '@angular/core';
import { AuthData } from '../shared/auth.model';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'sign-in',
  templateUrl: 'app/users/sign-in/sign-in.component.html'
})

export class SignInComponent {
	private _authData: AuthData = <AuthData>{};
	private _output: any;

  constructor(private _tokenService: Angular2TokenService) { }

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

		currentUserSignedIn() {
			this._tokenService.userSignedIn();
		}

		signOut() {
			this._tokenService.signOut().subscribe(
					res =>      console.log(res),
					error =>    console.log(error)
			);
		}
}
