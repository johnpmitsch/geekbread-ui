import { Component } from '@angular/core';
import { Recipe } from './recipe';

const RECIPES: Recipe[] = [
  { id: 11, name: 'Rustic Sourdough' },
  { id: 12, name: 'Whole Wheat' },
  { id: 13, name: 'Pan loaf' }
];


@Component({
  selector: 'my-app',
  template: `
    <h2>My Recipes</h2>
    <ul>
      <li *ngFor="let recipe of recipes" (click)="onSelect(recipe)">
         {{recipe.name}}
      </li>
    </ul>
    <my-recipe-detail [recipe]="selectedRecipe"></my-recipe-detail>
    `
})

export class AppComponent {
  recipes = RECIPES;
  selectedRecipe: Recipe;
  onSelect(recipe: Recipe) { this.selectedRecipe = recipe; }
}
