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
  errorMessage: string;
  recipes: Recipe[];
  selectedRecipe: Recipe;
  mode = 'Observable';

  constructor(
    private router: Router,
    private recipeService: RecipeService) { };

  ngOnInit(): void {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void { 
    this.selectedRecipe = recipe; 
    this.router.navigate(['/recipe', this.selectedRecipe.id]);
  }; 

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  addRecipe(name: string) {
    if (!name) { return; } 
    this.recipeService.addRecipe(name)
                      .subscribe(recipe  => this.recipes = this.getRecipes(),
                                 error   => this.errorMessage = <any>error);
    this.getRecipes();
  }

  deleteRecipe(recipe: Recipe): void {
    this.recipeService.deleteRecipe(recipe.id)
                      .subscribe(recipe => this.recipes = this.getRecipes(),
                                 error  => this.errorMessage = <any>error);
  }
}
