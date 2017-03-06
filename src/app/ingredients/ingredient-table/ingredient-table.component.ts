import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient }    from '../shared/ingredient.model';

import { IngredientService } from '../ingredients.service';

@Component({
  selector: 'ingredient-table',
  templateUrl: './ingredient-table.component.html',
  styleUrls: ['./ingredient-table.component.css'],
  providers: [IngredientService]
})
export class IngredientTableComponent {
  @Input() ingredients: Ingredient[] 
  @Output() notify: EventEmitter<any> = new EventEmitter();
  errorMessage: string;

  constructor(
    private ingredientService: IngredientService
  ) {}

  ngOnInit() {
  }

  deleteIngredient(ingredientId): void {
    this.ingredientService.deleteIngredient(ingredientId)
                          .subscribe(success => this.notify.emit(null),
                                     error   => this.errorMessage = <any>error);
  }

  updateIngredient(ingredientId, name, percentage, flour, preferment): void {
    this.ingredientService.updateIngredient(ingredientId, name, percentage, flour, preferment)
                          .subscribe(success => this.notify.emit(null),
                                     error   => this.errorMessage = <any>error);
  }
}
