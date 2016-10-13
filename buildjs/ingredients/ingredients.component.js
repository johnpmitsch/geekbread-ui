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
var ingredient_service_1 = require('./ingredient.service');
var ingredient_form_component_1 = require('./ingredient-form.component');
var recipe_model_1 = require('../recipes/shared/recipe.model');
var IngredientComponent = (function () {
    function IngredientComponent(ingredientService) {
        this.ingredientService = ingredientService;
    }
    ;
    IngredientComponent.prototype.ngOnInit = function () {
        this.getIngredients();
        this.totalDoughWeight = this.totalDoughWeight || 0;
    };
    IngredientComponent.prototype.getTotalPercentage = function () {
        var total = 0;
        for (var _i = 0, _a = this.ingredients; _i < _a.length; _i++) {
            var ingredient = _a[_i];
            total += ingredient.percentage;
        }
        return total;
    };
    IngredientComponent.prototype.getFlourWeight = function () {
        var totalPercentage = this.getTotalPercentage();
        this.flourWeight = (this.totalDoughWeight / totalPercentage) * 100;
    };
    IngredientComponent.prototype.updateIngredientAmounts = function () {
        for (var _i = 0, _a = this.ingredients; _i < _a.length; _i++) {
            var ingredient = _a[_i];
            ingredient.amount = (this.flourWeight * ingredient.percentage) / 100;
        }
    };
    IngredientComponent.prototype.submitTotalDoughWeight = function (doughWeight) {
        this.totalDoughWeight = doughWeight;
        this.getFlourWeight();
        this.updateIngredientAmounts();
    };
    IngredientComponent.prototype.getIngredients = function () {
        var _this = this;
        this.ingredientService.getIngredients(this.recipe.id).subscribe(function (ingredients) { return _this.ingredients = ingredients; });
    };
    IngredientComponent.prototype.deleteIngredient = function (ingredientId) {
        var _this = this;
        this.ingredientService.deleteIngredient(ingredientId)
            .subscribe(function (success) { return _this.getIngredients(); }, function (error) { return _this.errorMessage = error; });
    };
    IngredientComponent.prototype.updateIngredients = function (evt) {
        this.getIngredients();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', recipe_model_1.Recipe)
    ], IngredientComponent.prototype, "recipe", void 0);
    IngredientComponent = __decorate([
        core_1.Component({
            selector: 'recipe-ingredients',
            templateUrl: 'app/ingredients/ingredients.component.html',
            providers: [ingredient_service_1.IngredientService],
            directives: [ingredient_form_component_1.IngredientFormComponent]
        }), 
        __metadata('design:paramtypes', [ingredient_service_1.IngredientService])
    ], IngredientComponent);
    return IngredientComponent;
}());
exports.IngredientComponent = IngredientComponent;
//# sourceMappingURL=ingredients.component.js.map