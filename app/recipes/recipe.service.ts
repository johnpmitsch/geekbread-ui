import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable }     from 'rxjs/Observable';

import { Recipe } from './shared/recipe.model';

@Injectable()
export class RecipeService {
  private recipesUrl = 'http://localhost:3000/v1/recipes';

  constructor(private http: Http) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl)
                    .map(this.extractRecipesData)
                    .catch(this.handleError)
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get(this.recipesUrl + "/" + id)
                    .map(this.extractRecipeData)
                    .catch(this.handleError)
  }

  addRecipe(name: string): Observable<Recipe> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.recipesUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.http.delete(this.recipesUrl + "/" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();  
    return body || { };
  }

  private extractRecipesData(res: Response) {
    let body = res.json();  
    return body["recipes"] || { };
  }

  private extractRecipeData(res: Response) {
    let body = res.json();  
    return body["recipe"] || { };
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
