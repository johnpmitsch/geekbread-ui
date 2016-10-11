import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Ingredient } from './shared/ingredient.model';
import { IngredientService } from './ingredient.service';

import { Recipe } from '../recipes/shared/recipe.model';

@Component({
  selector: 'recipe-ingredients',
  templateUrl: 'app/ingredients/ingredients.component.html',
  providers: [IngredientService]
})

export class IngredientComponent implements OnInit {
  @Input() recipe: Recipe;

  ingredients: Ingredient[];
  errorMessage: string;
  totalDoughWeight: number;
  flourWeight: number

  constructor(
    private ingredientService: IngredientService
  ) {};

  ngOnInit(): void {
    this.getIngredients();
    this.totalDoughWeight = this.totalDoughWeight ||  0;
  }

  getTotalPercentage(): number {
    let total = 0;
    for (var ingredient of this.ingredients) {
      total += ingredient.percentage;
    }
    return total
  }

  getFlourWeight(): void {
    let totalPercentage = this.getTotalPercentage();
    this.flourWeight = (this.totalDoughWeight / totalPercentage) * 100;
  }

  submitTotalDoughWeight(doughWeight: number): void {
    this.totalDoughWeight = doughWeight;
    this.getFlourWeight()
  }

  getIngredients(): void {
    this.ingredientService.getIngredients(this.recipe.id).subscribe(ingredients => this.ingredients = ingredients);
  }
}

