import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable }     from 'rxjs/Observable';

import { Ingredient } from './shared/ingredient.model';

@Injectable()
export class IngredientService {
  private baseUrl = 'http://localhost:3000/v1/';
  private recipesUrl = this.baseUrl + 'recipes';
  private ingredientsUrl = this.baseUrl + 'ingredients';

  constructor(private http: Http) {}

  getIngredients(recipeId: number, ingredientType: string = null): Observable<Ingredient[]> {
    let url = this.recipesUrl + "/" + recipeId + "/ingredients"
    if (ingredientType != null) { 
      url += "?ingredient_type=" + ingredientType
    }
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  deleteIngredient(ingredientId: number): Observable<Ingredient[]> {
    return this.http.delete(this.ingredientsUrl + "/" + ingredientId)
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  updateIngredient(ingredientId: number, name: string, percentage: number, type: string): Observable<Ingredient[]> {
    let body = JSON.stringify({ ingredient: { name: name, percentage: percentage, type: type}});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.ingredientsUrl + "/" + ingredientId, body, options)
                    .map(this.extractData)
                    .catch(this.handleError)
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
