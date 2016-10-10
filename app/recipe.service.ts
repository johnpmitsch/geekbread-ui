import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipesUrl = 'http://localhost:3000/v1/recipes';

  constructor(private http: Http) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl)
                    .map(this.extractData)
                    .catch(this.handleError)
  }
//  getRecipes(): Promise<Recipe[]> {
//    return this.http.get(this.recipesUrl)
//               .toPromise()
//               .then(response => response.json().data as Recipe[])
//               .catch(this.handleError);
//  }

  private extractData(res: Response) {
    let body = res.json();  
    return body["recipes"] || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getRecipe(id: number): any {
    return  "hi"
//    return this.http.get(this.recipesUrl + "/" + id)
//               .toPromise()
//               .then(response => response.json().data as Recipe[])
//               .catch(this.handleError);
  }

//  private handleError(error: any): Promise<any> {
//      console.error('An error occurred', error); // for demo purposes only
//        return Promise.reject(error.message || error);
//  }
}
