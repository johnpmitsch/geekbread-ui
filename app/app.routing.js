"use strict";
var router_1 = require('@angular/router');
var recipes_component_1 = require('./recipes.component');
var recipe_detail_component_1 = require('./recipe-detail.component');
var appRoutes = [
    {
        path: 'recipes',
        component: recipes_component_1.RecipeComponent
    },
    {
        path: '',
        component: recipes_component_1.RecipeComponent
    },
    {
        path: 'detail/:id',
        component: recipe_detail_component_1.RecipeDetailComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map