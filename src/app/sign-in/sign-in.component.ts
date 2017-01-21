import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService, SignInData } from 'angular2-token';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html'
})

export class SignInComponent {
  private _signInData: SignInData = <SignInData>{};
	private _output: any;

  constructor(
    private router: Router,
		private tokenService: TokenService
  ) {};

  onSubmit() {
		this._output = null;
		this.tokenService._tokenService.signIn(this._signInData).subscribe(
				res => {
            this._signInData = <SignInData>{};
						this._output    = res;
            this.router.navigate(['/recipes']);
				}, error => {
            this._signInData = <SignInData>{};
						this._output    = error;
				}
		);
  }

	currentUserSignedIn() {
		return this.tokenService._tokenService.userSignedIn();
	}

	signOut() {
		this.tokenService._tokenService.signOut().subscribe(
				res =>      console.log(res),
				error =>    console.log(error)
		);
	}
}
