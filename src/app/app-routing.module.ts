import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { Angular2TokenService } from 'angular2-token';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: RecipesComponent,
        pathMatch: 'full',
        canActivate: [Angular2TokenService] 
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'recipes',
        component: RecipesComponent,
        canActivate: [Angular2TokenService] 
      },
      {
        path: 'recipe/:id',
        component: RecipeDetailComponent,
        canActivate: [Angular2TokenService] 
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
