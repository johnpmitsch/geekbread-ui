import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Ingredient } from './shared/ingredient.model';
import { IngredientService } from './ingredients.service';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';

import { Recipe } from '../recipes/shared/recipe.model';

@Component({
  selector: 'recipe-ingredients',
  templateUrl: './ingredients.component.html',
  providers: [IngredientService],
  styleUrls: ['./ingredients.component.css']
})

export class IngredientsComponent implements OnInit {
  @Input() recipe: Recipe;

  ingredients: Ingredient[];
  prefermentIngredients: Ingredient[];
  baseIngredients: Ingredient[];
  errorMessage: string;
  totalDoughWeight: number;
  baseFlourWeight: number
  prefermentFlourWeight: number;

  constructor(
    private ingredientService: IngredientService
  ) {};

  ngOnInit(): void {
    this.getIngredients();
    this.totalDoughWeight = this.totalDoughWeight ||  0;
  }

  getTotalPercentage(prefermentIngredientsOnly: boolean = false): number {
    let total = 0;
    if (prefermentIngredientsOnly) {
      var ingredients = this.prefermentIngredients
    } else {
      var ingredients = this.baseIngredients
    }
    for (var ingredient of ingredients) {
      total += +ingredient.percentage;
    }
    return total
  }

  getBaseIngredientFlourPercentage(): number {
    let total = 0
    for (var ingredient of this.baseIngredients) {
      if (ingredient.flour) {
        total += +ingredient.percentage;
      }
    }
    return total
  }

  getPrefermentIngredientFlourPercentage(): number {
    let total = 0
    for (var ingredient of this.prefermentIngredients) {
      if (ingredient.flour) {
        total += +ingredient.percentage;
      }
    }
    return total
  }

  getSpecifiedIngredientPercentage(ingredientType: string): number {
    // ingredientType can be preferment, levain, and flour as they are all booleans
    let total = 0;
    for (var ingredient of this.ingredients) {
      if (ingredient[ingredientType]) {
        total += +ingredient.percentage;
      }
    }
    return total
  }

  getFlourWeight(): void {
    let totalPercentage = this.getTotalPercentage();
    this.baseFlourWeight = (this.totalDoughWeight / totalPercentage) * 100;
  }

  resetIngredientAmounts(): void {
    for (var ingredient of this.ingredients) {
      ingredient.amount = null;
    }
  }

  updateBaseIngredientAmounts(): void {
    for (var ingredient of this.baseIngredients) {
      ingredient.amount = (this.baseFlourWeight * +ingredient.percentage)/100
    }
  }

  updatePrefermentIngredientAmounts(): void {
    let levainPercentage = this.getSpecifiedIngredientPercentage("levain");
    let levainTotalWeight = (this.baseFlourWeight * levainPercentage)/100; 
    let totalPrefermentIngredientPercentage = this.getTotalPercentage(true);
    this.prefermentFlourWeight = (levainTotalWeight / totalPrefermentIngredientPercentage) * 100;
    for (var ingredient of this.prefermentIngredients) {
      ingredient.amount = (this.prefermentFlourWeight * +ingredient.percentage)/100
    }
  }
 
  submitTotalDoughWeight(doughWeight: number): void {
    this.totalDoughWeight = doughWeight;
    this.getFlourWeight();
    let baseFlourPercentage = this.getBaseIngredientFlourPercentage();
    if (this.prefermentIngredients.length) {
      var prefermentFlourPercentage = this.getPrefermentIngredientFlourPercentage();
    } else {
      var prefermentFlourPercentage = 100;
    }
    this.updateBaseIngredientAmounts();
    this.updatePrefermentIngredientAmounts();
    if (baseFlourPercentage != 100 || prefermentFlourPercentage != 100) {
      this.errorMessage = "The flour ingredient percentages for this recipe do not add up to %100. Please correct them and re-submit";
    } 
  }

  getIngredients(): void {
    this.ingredientService.getIngredients(this.recipe.id).subscribe(ingredients => this.sortIngredients(ingredients),
                                                                    error       => this.errorMessage = <any>error);
  }

  sortIngredients(ingredients): void {
    this.ingredients = ingredients
    this.baseIngredients = this.ingredients.filter(ingredient => ingredient.preferment === false)
    this.prefermentIngredients = this.ingredients.filter(ingredient => ingredient.preferment === true)
  }

  updateIngredients(evt): void {
    this.getIngredients();
  }
}

