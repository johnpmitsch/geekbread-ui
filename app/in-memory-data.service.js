"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var recipes = [
            { id: 11, name: 'Rustic Sourdough' },
            { id: 12, name: 'Whole Wheat' },
            { id: 13, name: 'Pan loaf' }
        ];
        return { recipes: recipes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map