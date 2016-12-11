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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var angular2_token_1 = require('angular2-token');
var app_component_1 = require('./app.component');
var recipes_component_1 = require('./recipes/recipes.component');
var recipe_detail_component_1 = require('./recipes/recipe-detail/recipe-detail.component');
var recipe_service_1 = require('./recipes/recipe.service');
var ingredients_component_1 = require('./ingredients/ingredients.component');
var ingredient_service_1 = require('./ingredients/ingredient.service');
var ingredient_form_component_1 = require('./ingredients/ingredient-form.component');
var user_component_1 = require('./users/user.component');
var token_service_1 = require('./users/token.service');
var sign_in_component_1 = require('./users/sign-in/sign-in.component');
var register_component_1 = require('./users/register/register.component');
var output_component_1 = require('./users/shared/output/output.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                recipes_component_1.RecipeComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                ingredients_component_1.IngredientComponent,
                ingredient_form_component_1.IngredientFormComponent,
                user_component_1.UserComponent,
                sign_in_component_1.SignInComponent,
                register_component_1.RegisterComponent,
                output_component_1.OutputComponent
            ],
            providers: [
                recipe_service_1.RecipeService,
                ingredient_service_1.IngredientService,
                token_service_1.TokenService,
                angular2_token_1.Angular2TokenService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map