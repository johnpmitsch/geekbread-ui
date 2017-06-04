import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from './shared/recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'my-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
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
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes,
                                              error   => this.errorMessage = <any>error);
  }

  addRecipe(name: string) {
    if (!name) { return; } 
    this.recipeService.addRecipe(name)
                      .subscribe(recipe   => this.onSelect(recipe),
                                 error    => this.errorMessage = <any>error);
    this.getRecipes();
  }

  deleteRecipe(recipe: Recipe): void {
    this.recipeService.deleteRecipe(recipe.id)
                      .subscribe(sucess => this.getRecipes(),
                                 error  => this.errorMessage = <any>error);
  }

}
