import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipeComponent }  from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: RecipeComponent
      },
      {
        path: 'auth',
        component: AuthComponent
      },
      {
        path: 'recipes',
        component: RecipeComponent
      },
      {
        path: 'recipe/:id',
        component: RecipeDetailComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
