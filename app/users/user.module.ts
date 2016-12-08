import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { UserComponent } from './user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    UserComponent,
    SignInComponent,
    UserComponent,
    RegisterComponent
  ],
	providers: [
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
