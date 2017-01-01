import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable }     from 'rxjs/Observable';
import { TokenService } from '../users/token.service';
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

  getIngredients(recipeId: number, ingredientType: string = null): Observable<Ingredient[]> {
    let url = this.recipesUrl + "/" + recipeId + "/ingredients"
    if (ingredientType != null) { 
      url += "?ingredient_type=" + ingredientType
    }
    return this.tokenService._tokenService.get(url)
                                          .map(this.extractData)
  }

  deleteIngredient(ingredientId: number): Observable<Ingredient[]> {
    return this.tokenService._tokenService.delete(this.ingredientsUrl + "/" + ingredientId)
                                          .map(this.extractData)
  }

  updateIngredient(ingredientId: number, name: string, percentage: number, type: string): Observable<Ingredient[]> {
    let body = JSON.stringify({ ingredient: { name: name, percentage: percentage, type: type}});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.tokenService._tokenService.put(this.ingredientsUrl + "/" + ingredientId, body, options)
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
