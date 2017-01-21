import { Component, OnInit } from '@angular/core';
import { TokenService } from '../shared/token.service';
import { Router } from '@angular/router';
import { RegisterData } from 'angular2-token';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    private _registerData: RegisterData = <RegisterData>{};
    private _output: any;
    private error_message: any;

		constructor(
      private router: Router,
			private tokenService: TokenService
		) {};

    onSubmit() {
        this._output = null;

        this.tokenService._tokenService.registerAccount(this._registerData).subscribe(
            res => {
                this._registerData = <RegisterData>{};
                this._output       = res
                this.router.navigate(['/recipes']);
            }, error => {
                this._registerData = <RegisterData>{};
                this._output       = error;
            }
        );
    }
}
