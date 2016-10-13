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
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var Observable_1 = require('rxjs/Observable');
var IngredientService = (function () {
    function IngredientService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/v1/';
        this.recipesUrl = this.baseUrl + 'recipes';
        this.ingredientsUrl = this.baseUrl + 'ingredients';
    }
    IngredientService.prototype.getIngredients = function (recipeId) {
        return this.http.get(this.recipesUrl + "/" + recipeId + "/ingredients")
            .map(this.extractIngredientData)
            .catch(this.handleError);
    };
    IngredientService.prototype.deleteIngredient = function (ingredientId) {
        return this.http.delete(this.ingredientsUrl + "/" + ingredientId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IngredientService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    IngredientService.prototype.extractIngredientData = function (res) {
        var body = res.json();
        return body["ingredients"] || {};
    };
    IngredientService.prototype.handleError = function (error) {
        if (error) {
            var errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
            console.error(errMsg); // log to console instead
            return Observable_1.Observable.throw(errMsg);
        }
    };
    IngredientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IngredientService);
    return IngredientService;
}());
exports.IngredientService = IngredientService;
//# sourceMappingURL=ingredient.service.js.map