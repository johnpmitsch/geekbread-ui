import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthData } from '../shared/auth.model';
import { UserComponent } from '../user.component';
import { TokenService } from '../token.service';

@Component({
    selector: 'register',
    templateUrl: 'app/users/register/register.component.html'
})
export class RegisterComponent {

    private _authData: AuthData = <AuthData>{};
    private _output: any;
    private error_message: any;

		constructor(
			private tokenService: TokenService
		) {};

    onSubmit() {
        this._output = null;

        this.tokenService._tokenService.registerAccount(
            this._authData.email,
            this._authData.password,
            this._authData.passwordConfirmation
        ).subscribe(
            res => {
                this._authData  = <AuthData>{};
                this._output    = res;
            }, error => {
                this._authData  = <AuthData>{};
                this._output    = error;
                this.error_message = error["errors"]["full_messages"].toString()
            }
        );
    }
}
