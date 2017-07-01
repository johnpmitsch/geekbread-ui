import { Component, OnInit } from '@angular/core';
import { TokenService } from '../shared/token.service';
import { Router } from '@angular/router';
import { Angular2TokenService, UpdatePasswordData } from 'angular2-token';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent {
  updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};
  output:             any;
	success: 						any;
 
  constructor(
    private tokenService: TokenService
  ) {};

  onSubmit() {
    this.output = null;
    this.tokenService._tokenService.updatePassword(this.updatePasswordData).subscribe(
      res => {
        this.updatePasswordData    = <UpdatePasswordData>{};
				this.success    					 = "Password changed successfully";
        this.output                = res;
      }, error => {
        this.updatePasswordData    = <UpdatePasswordData>{};
        this.output                = error;
      }
    );
  }
}
