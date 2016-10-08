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
var recipe_service_1 = require('./recipe.service');
var RecipeComponent = (function () {
    function RecipeComponent(recipeService) {
        this.recipeService = recipeService;
    }
    ;
    RecipeComponent.prototype.onSelect = function (recipe) {
        this.selectedRecipe = recipe;
    };
    ;
    RecipeComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes().then(function (recipes) { return _this.recipes = recipes; });
    };
    RecipeComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    RecipeComponent = __decorate([
        core_1.Component({
            selector: 'my-recipes',
            template: "\n    <h2>My Recipes</h2>\n    <ul>\n      <li *ngFor=\"let recipe of recipes\" (click)=\"onSelect(recipe)\">\n         {{recipe.name}}\n      </li>\n    </ul>\n    <my-recipe-detail [recipe]=\"selectedRecipe\"></my-recipe-detail>\n  ",
            providers: [recipe_service_1.RecipeService]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], RecipeComponent);
    return RecipeComponent;
}());
exports.RecipeComponent = RecipeComponent;
//# sourceMappingURL=recipe.component.js.map