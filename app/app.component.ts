import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'my-app',
  template: `
    <h2>My Recipes</h2>
    <ul>
      <li *ngFor="let recipe of recipes" (click)="onSelect(recipe)">
         {{recipe.name}}
      </li>
    </ul>
    <my-recipe-detail [recipe]="selectedRecipe"></my-recipe-detail>
  `,
  providers: [RecipeService]
})

export class AppComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { };

  onSelect(recipe: Recipe): void { 
    this.selectedRecipe = recipe; 
  }; 

  getRecipes(): void {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  ngOnInit(): void {
    this.getRecipes();
  }
}
