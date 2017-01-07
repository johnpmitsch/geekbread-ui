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
var router_1 = require('@angular/router');
var recipe_service_1 = require('./recipe.service');
var RecipeComponent = (function () {
    function RecipeComponent(router, recipeService) {
        this.router = router;
        this.recipeService = recipeService;
        this.mode = 'Observable';
    }
    ;
    RecipeComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    RecipeComponent.prototype.onSelect = function (recipe) {
        this.selectedRecipe = recipe;
        this.router.navigate(['/recipe', this.selectedRecipe.id]);
    };
    ;
    RecipeComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes().subscribe(function (recipes) { return _this.recipes = recipes; }, function (error) { return _this.errorMessage = error; });
    };
    RecipeComponent.prototype.addRecipe = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this.recipeService.addRecipe(name)
            .subscribe(function (success) { return _this.getRecipes(); }, function (error) { return _this.errorMessage = error; });
        this.getRecipes();
    };
    RecipeComponent.prototype.deleteRecipe = function (recipe) {
        var _this = this;
        this.recipeService.deleteRecipe(recipe.id)
            .subscribe(function (sucess) { return _this.getRecipes(); }, function (error) { return _this.errorMessage = error; });
    };
    RecipeComponent = __decorate([
        core_1.Component({
            selector: 'my-recipes',
            templateUrl: 'app/recipes/recipes.component.html',
            providers: [recipe_service_1.RecipeService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, recipe_service_1.RecipeService])
    ], RecipeComponent);
    return RecipeComponent;
}());
exports.RecipeComponent = RecipeComponent;
//# sourceMappingURL=recipes.component.js.map