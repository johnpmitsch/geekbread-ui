import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import '../shared/rxjs-operators';
import { Observable }     from 'rxjs/Observable';
import { TokenService } from '../shared/token.service';
import { Angular2TokenService } from 'angular2-token';
import { Recipe } from './shared/recipe.model';

@Injectable()
export class RecipeService {
  private apiVersion = 'v1'
  private recipesUrl = this.apiVersion + '/recipes';
  private ingredientsUrl = this.apiVersion + '/ingredients';

  constructor(
    private http: Http,
    private tokenService: TokenService
  ) {}

  getRecipes(): Observable<Recipe[]> {
    return this.tokenService._tokenService.get(this.recipesUrl)
                                          .map(this.extractData)
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.tokenService._tokenService.get(this.recipesUrl + "/" + id)
                                          .map(this.extractData)
  }

  addRecipe(name: string): Observable<Recipe> {
    let body = JSON.stringify({recipe: { name }});
    return this.tokenService._tokenService.post(this.recipesUrl, body)
                                          .map(this.extractData)
  }


  addIngredientToRecipe(recipeId: number, name: string, percentage: number, flour: boolean, preferment: boolean): Observable<Recipe> {
    let body = JSON.stringify({ 
      ingredient: { 
        name: name, 
        percentage: percentage, 
        recipe_id: recipeId, 
        flour: flour, 
        preferment: preferment 
      }
    });
    return this.tokenService._tokenService.post(this.ingredientsUrl, body)
                                          .map(this.extractData)
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.tokenService._tokenService.delete(this.recipesUrl + "/" + id)
                                          .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();  
    return body || { };
  }

  private handleError (error: any) {
    if (error) {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
  }
}
