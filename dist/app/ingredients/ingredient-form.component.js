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
var recipe_service_1 = require('../recipes/recipe.service');
var ingredient_model_1 = require('./shared/ingredient.model');
var recipe_model_1 = require('../recipes/shared/recipe.model');
var IngredientFormComponent = (function () {
    function IngredientFormComponent(recipeService) {
        this.recipeService = recipeService;
        this.notify = new core_1.EventEmitter();
        this.model = new ingredient_model_1.Ingredient;
        this.submitted = false;
        this.active = true;
    }
    IngredientFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    IngredientFormComponent.prototype.newIngredient = function (name, percentage, type) {
        var _this = this;
        this.recipeService.addIngredientToRecipe(this.recipe.id, name, percentage, type)
            .subscribe(function (sucess) { return _this.notify.emit(null); }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', recipe_model_1.Recipe)
    ], IngredientFormComponent.prototype, "recipe", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], IngredientFormComponent.prototype, "notify", void 0);
    IngredientFormComponent = __decorate([
        core_1.Component({
            selector: 'ingredient-form',
            templateUrl: 'app/ingredients/ingredient-form.component.html',
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], IngredientFormComponent);
    return IngredientFormComponent;
}());
exports.IngredientFormComponent = IngredientFormComponent;
//# sourceMappingURL=ingredient-form.component.js.map