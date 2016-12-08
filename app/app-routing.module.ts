import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipeComponent }  from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { UserComponent } from './users/user.component';
import { RegisterComponent } from './users/register/register.component';

import { Angular2TokenService } from 'angular2-token';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: RecipeComponent,
        pathMatch: 'full'
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'recipes',
        component: RecipeComponent,
      },
      {
        path: 'recipe/:id',
        component: RecipeDetailComponent,
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
