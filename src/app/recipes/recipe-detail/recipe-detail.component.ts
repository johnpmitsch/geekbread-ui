import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from '../recipes.service';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'my-recipe-detail',
  templateUrl: './recipe-detail.component.html' 
})

export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id > 0) {
        this.getRecipe(id);
      }
    });
  }

  getRecipe(id: number): void {
    this.recipeService.getRecipe(id)
          .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    window.history.back();
  }
}
