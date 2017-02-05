import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeService } from './recipes/recipes.service';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientService } from './ingredients/ingredients.service';
import { IngredientFormComponent } from './ingredients/ingredient-form/ingredient-form.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TokenService } from './shared/token.service';
import { OutputComponent } from './shared/output/output.component';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { IngredientTableComponent } from './ingredients/ingredient-table/ingredient-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    IngredientsComponent,
    RegisterComponent,
    SignInComponent,
    IngredientFormComponent,
    OutputComponent,
    MissingPageComponent,
    IngredientTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
		IngredientService,
		TokenService,
		Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
