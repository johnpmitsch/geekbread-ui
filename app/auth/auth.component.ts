import { Component } from '@angular/core';

//import { Ingredient } from '../../ingredients/shared/ingredient.model'

@Component({
  selector: 'auth',
	template: `
hi {{ hero.name }}
`
  //templateUrl: 'app/auth/auth.component.html'
})

export class AuthComponent {

  hero: Ingredient = {
    name: 'Windstorm'
  };
 // signIn(email: string, password: string): void {
 //   this._tokenService.signIn(
 //     email,
 //     password
 //   ).subscribe(
 //     res =>      console.log(res),
 //     error =>    console.log(error)
 //   );
 // }
} 
