import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Ingredient } from './shared/ingredient.model';
import { IngredientService } from './ingredients.service';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';

import { Recipe } from '../recipes/shared/recipe.model';

@Component({
  selector: 'recipe-ingredients',
  templateUrl: './ingredients.component.html',
  providers: [IngredientService]
})

export class IngredientsComponent implements OnInit {
  @Input() recipe: Recipe;

  ingredients: Ingredient[];
  specifiedIngredients: Ingredient[];
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

  isFlour?(ingredient): boolean {
    return ingredient.type == "Flour";
  }

  getTotalPercentage(): number {
    let total = 0;
    for (var ingredient of this.ingredients) {
      total += +ingredient.percentage;
    }
    return total
  }

  getSpecifiedIngredientPercentage(ingredientType: string): number {
    let total = 0;
    for (var ingredient of this.ingredients) {
      if (ingredient.type == ingredientType) {
        total += +ingredient.percentage;
      }
    }
    return total
  }

  getFlourWeight(): void {
    let totalPercentage = this.getTotalPercentage();
    this.flourWeight = (this.totalDoughWeight / totalPercentage) * 100;
  }

  resetIngredientAmounts(): void {
    for (var ingredient of this.ingredients) {
      ingredient.amount = null;
    }
  }

  updateIngredientAmounts(): void {
    for (var ingredient of this.ingredients) {
      ingredient.amount = (this.flourWeight * +ingredient.percentage)/100
    }
  }
 
  submitTotalDoughWeight(doughWeight: number): void {
    this.totalDoughWeight = doughWeight;
    this.getFlourWeight();
    let flourPercentage = this.getSpecifiedIngredientPercentage("Flour");
    this.updateIngredientAmounts();
    if (flourPercentage != 100) {
      this.errorMessage = "The flour ingredient percentages for this recipe do not add up to %100. Please correct them and re-submit";
    } 
  }

  getIngredients(): void {
    this.ingredientService.getIngredients(this.recipe.id).subscribe(ingredients => this.ingredients = ingredients,
                                                                    error       => this.errorMessage = <any>error);
  }

  deleteIngredient(ingredientId): void {
    this.ingredientService.deleteIngredient(ingredientId)
                          .subscribe(success => this.getIngredients(),
                                     error   => this.errorMessage = <any>error);
  }

  updateIngredient(ingredientId, name, percentage, type): void {
    this.ingredientService.updateIngredient(ingredientId, name, percentage, type)
                          .subscribe(success =>  this.getIngredients(),
                                     error   => this.errorMessage = <any>error);
    location.reload(); 
  }

  updateIngredients(evt): void {
    this.getIngredients();
  }
}

