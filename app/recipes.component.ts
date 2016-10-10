import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'my-recipes',
  templateUrl: 'app/recipes.component.html',
  providers: [RecipeService]
})

export class RecipeComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(
    private router: Router,
    private recipeService: RecipeService) { };

  onSelect(recipe: Recipe): void { 
    this.selectedRecipe = recipe; 
  }; 

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  ngOnInit(): void {
    this.getRecipes();
  }
}
