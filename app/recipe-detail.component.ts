import { Component, Input } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'my-recipe-detail',
  template: `
    <div *ngIf="recipe">
      <h2>{{recipe.name}} details!</h2>
      <div><label>id: </label>{{recipe.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="recipe.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class RecipeDetailComponent {
  @Input()
  recipe: Recipe
}
