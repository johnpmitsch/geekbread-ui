import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent }      from './recipes.component';
import { RecipeDetailComponent }      from './recipe-detail.component';
import { RecipeService }      from './recipe.service';

const appRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipeComponent
  },
  {
    path: '',
    component: RecipeComponent
  },
  {
      path: 'detail/:id',
      component: RecipeDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
