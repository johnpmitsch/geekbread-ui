import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Angular2TokenService } from 'angular2-token';

import { AppComponent }  from './app.component';
import { RecipeComponent }  from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeService } from './recipes/recipe.service';
import { IngredientComponent } from './ingredients/ingredients.component';
import { IngredientService } from './ingredients/ingredient.service';
import { IngredientFormComponent } from './ingredients/ingredient-form.component';
import { UserComponent } from './users/user.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    RecipeComponent,
    RecipeDetailComponent,
    IngredientComponent,
    IngredientFormComponent,
    UserComponent 
  ],
  providers: [
    RecipeService,
    IngredientService,
    Angular2TokenService 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
