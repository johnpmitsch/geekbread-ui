import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import '../shared/rxjs-operators';
import { Observable }  from 'rxjs/Observable';
import { TokenService } from '../shared/token.service';
import { Angular2TokenService } from 'angular2-token';
import { Ingredient } from './shared/ingredient.model';

@Injectable()
export class IngredientService {
  private apiVersion = 'v1'
  private recipesUrl = this.apiVersion + '/recipes';
  private ingredientsUrl = this.apiVersion + '/ingredients';

  constructor(
    private http: Http,
    private tokenService: TokenService
  ) {}

  getIngredients(recipeId: number): Observable<Ingredient[]> {
    let url = this.recipesUrl + "/" + recipeId + "/ingredients"
    return this.tokenService._tokenService.get(url)
                                          .map(this.extractData)
  }

  deleteIngredient(ingredientId: number): Observable<Ingredient[]> {
    return this.tokenService._tokenService.delete(this.ingredientsUrl + "/" + ingredientId)
                                          .map(this.extractData)
  }

  updateIngredient(ingredientId: number, name: string, percentage: number, flour: boolean, preferment: boolean): Observable<Ingredient[]> {
    let body = JSON.stringify({ ingredient: { name: name, percentage: percentage, flour: flour, preferment: preferment}});
    return this.tokenService._tokenService.put(this.ingredientsUrl + "/" + ingredientId, body)
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
