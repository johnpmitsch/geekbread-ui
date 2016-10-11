import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable }     from 'rxjs/Observable';

import { Ingredient } from './shared/ingredient.model';

@Injectable()
export class IngredientService {
  private recipesUrl = 'http://localhost:3000/v1/recipes/';

  constructor(private http: Http) {}

  getIngredients(recipeId: number): Observable<Ingredient[]> {
    return this.http.get(this.recipesUrl + recipeId + "/ingredients")
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  private extractData(res: Response) {
    let body = res.json();  
    return body["ingredients"] || { };
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
