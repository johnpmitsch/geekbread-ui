import { Component } from '@angular/core';
import { TokenService } from './users/token.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' 
})

export class AppComponent  {
	constructor(
		private tokenService: TokenService
	) {};

  title = 'Geekbread';

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
