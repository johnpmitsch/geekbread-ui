import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipesUrl = 'http://localhost:3000/v1/recipes';

  constructor(private http: Http) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }

  getRecipe(id: number): Promise<Recipe> {
    return this.getRecipes()
               .then(recipes => recipes.find(recipe => recipe.id === id));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
