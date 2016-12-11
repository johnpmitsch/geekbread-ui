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
var recipes_component_1 = require('./recipes/recipes.component');
var recipe_detail_component_1 = require('./recipes/recipe-detail/recipe-detail.component');
var register_component_1 = require('./users/register/register.component');
var sign_in_component_1 = require('./users/sign-in/sign-in.component');
var angular2_token_1 = require('angular2-token');
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: recipes_component_1.RecipeComponent,
                        pathMatch: 'full',
                        canActivate: [angular2_token_1.Angular2TokenService]
                    },
                    {
                        path: 'sign-in',
                        component: sign_in_component_1.SignInComponent
                    },
                    {
                        path: 'register',
                        component: register_component_1.RegisterComponent
                    },
                    {
                        path: 'recipes',
                        component: recipes_component_1.RecipeComponent,
                        canActivate: [angular2_token_1.Angular2TokenService]
                    },
                    {
                        path: 'recipe/:id',
                        component: recipe_detail_component_1.RecipeDetailComponent,
                        canActivate: [angular2_token_1.Angular2TokenService]
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map