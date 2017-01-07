import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

import { Ingredient }    from './shared/ingredient.model';
import { Recipe }    from '../recipes/shared/recipe.model';

@Component({
  moduleId: module.id,
  selector: 'ingredient-form',
  templateUrl: 'ingredient-form.component.html',
})

export class IngredientFormComponent {
  @Input() recipe: Recipe 
  @Output() notify: EventEmitter<any> = new EventEmitter();
  errorMessage: string;

  constructor(
    private recipeService: RecipeService) {
  }

  model = new Ingredient;

  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;

  newIngredient(name: string, percentage: number, type: string) {
    this.recipeService.addIngredientToRecipe(this.recipe.id, name, percentage, type)
                      .subscribe(sucess => this.notify.emit(null),
                                 error  => this.errorMessage = <any>error);
    
  }
}
