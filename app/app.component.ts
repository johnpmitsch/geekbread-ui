import { Component } from '@angular/core';
import { TokenService } from './users/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' 
})

export class AppComponent  {
	private _output: any;

	constructor(
		private tokenService: TokenService,
    private router: Router
	) {};

  title = 'Geekbread';

  currentUserSignedIn() {
    return this.tokenService._tokenService.userSignedIn();
  }

	signOut() {
		this.tokenService._tokenService.signOut().subscribe(
      res => {
        this._output    = res;
        this.router.navigate(['/sign-in']);
      }, error => {
        this._output    = error;
    });
	}
}
