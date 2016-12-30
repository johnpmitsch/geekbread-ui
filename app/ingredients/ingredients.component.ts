import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Ingredient } from './shared/ingredient.model';
import { IngredientService } from './ingredient.service';
import { IngredientFormComponent } from './ingredient-form.component';

import { Recipe } from '../recipes/shared/recipe.model';

@Component({
  selector: 'recipe-ingredients',
  templateUrl: 'app/ingredients/ingredients.component.html',
  providers: [IngredientService]
})

export class IngredientComponent implements OnInit {
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
    this.getIngredientType("Flour");
    this.totalDoughWeight = this.totalDoughWeight ||  0;
  }

  getTotalPercentage(): number {
    let total = 0;
    for (var ingredient of this.ingredients) {
      total += ingredient.percentage;
    }
    return total
  }

  getSpecifiedIngredientPercentage(): number {
    let total = 0;
    for (var ingredient of this.specifiedIngredients) {
      total += ingredient.percentage;
    }
    return total
  }

  getFlourWeight(): void {
    let totalPercentage = this.getTotalPercentage();
    this.flourWeight = (this.totalDoughWeight / totalPercentage) * 100;
  }

  updateIngredientAmounts(): void {
    for (var ingredient of this.ingredients) {
      ingredient.amount = (this.flourWeight * ingredient.percentage)/100
    }
  }
 
  submitTotalDoughWeight(doughWeight: number): void {
    this.totalDoughWeight = doughWeight;
    this.getIngredients();
    this.getFlourWeight();
    this.getIngredientType("Flour")
    let flourPercentage = this.getSpecifiedIngredientPercentage();
    console.log(flourPercentage);
    if (flourPercentage == 100) {
      this.updateIngredientAmounts();
    } else {
      this.errorMessage = "The flour ingredient percentages for this recipe do not add up to %100. Please correct them and re-submit";
    } 
  }

  getIngredients(): void {
    this.ingredientService.getIngredients(this.recipe.id).subscribe(ingredients => this.ingredients = ingredients);
  }

  getIngredientType(ingredientType: string): void {
    this.ingredientService.getIngredients(this.recipe.id, ingredientType).subscribe(specifiedIngredients => this.specifiedIngredients = specifiedIngredients);
  }

  deleteIngredient(ingredientId): void {
    this.ingredientService.deleteIngredient(ingredientId)
                          .subscribe(success => this.getIngredients(),
                                     error   => this.errorMessage = <any>error);
  }

  updateIngredient(ingredientId, name, percentage): void {
    this.ingredientService.updateIngredient(ingredientId, name, percentage)
                          .subscribe(success => this.ingredients = this.getIngredients(),
                                     error   => this.errorMessage = <any>error);
    location.reload(); 
  }

  updateIngredients(evt): void {
    this.getIngredients();
  }
}

