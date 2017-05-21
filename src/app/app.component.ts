import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
