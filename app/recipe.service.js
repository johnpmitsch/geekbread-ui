"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Observable_1 = require('rxjs/Observable');
var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
        this.recipesUrl = 'http://localhost:3000/v1/recipes';
    }
    RecipeService.prototype.getRecipes = function () {
        return this.http.get(this.recipesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //  getRecipes(): Promise<Recipe[]> {
    //    return this.http.get(this.recipesUrl)
    //               .toPromise()
    //               .then(response => response.json().data as Recipe[])
    //               .catch(this.handleError);
    //  }
    RecipeService.prototype.extractData = function (res) {
        var body = res.json();
        return body["recipes"] || {};
    };
    RecipeService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    RecipeService.prototype.getRecipe = function (id) {
        return "hi";
        //    return this.http.get(this.recipesUrl + "/" + id)
        //               .toPromise()
        //               .then(response => response.json().data as Recipe[])
        //               .catch(this.handleError);
    };
    RecipeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map