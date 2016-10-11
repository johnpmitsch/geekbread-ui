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
var recipe_1 = require('./recipe');
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(recipeService, route) {
        this.recipeService = recipeService;
        this.route = route;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (id > 0) {
                _this.recipeService.getRecipe(id)
                    .subscribe(function (recipe) { return _this.recipe = recipe; });
            }
        });
    };
    RecipeDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', recipe_1.Recipe)
    ], RecipeDetailComponent.prototype, "recipe", void 0);
    RecipeDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-recipe-detail',
            templateUrl: 'app/recipe-detail.component.html'
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.ActivatedRoute])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=recipe-detail.component.js.map