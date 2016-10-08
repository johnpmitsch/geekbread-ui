import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';

@Component({
  selector: 'my-recipe-detail',
  templateUrl: 'app/recipe-detail.component.html' 
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
      this.recipeService.getRecipe(id)
        .then(recipe => this.recipe = recipe);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
