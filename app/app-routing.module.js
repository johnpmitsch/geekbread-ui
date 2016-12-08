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
var user_component_1 = require('./users/user.component');
var register_component_1 = require('./users/register/register.component');
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
                        pathMatch: 'full'
                    },
                    {
                        path: 'user',
                        component: user_component_1.UserComponent
                    },
                    {
                        path: 'register',
                        component: register_component_1.RegisterComponent
                    },
                    {
                        path: 'recipes',
                        component: recipes_component_1.RecipeComponent,
                    },
                    {
                        path: 'recipe/:id',
                        component: recipe_detail_component_1.RecipeDetailComponent,
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