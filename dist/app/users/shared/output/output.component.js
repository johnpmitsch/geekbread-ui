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
var http_1 = require('@angular/http');
var OutputComponent = (function () {
    function OutputComponent() {
    }
    Object.defineProperty(OutputComponent.prototype, "data", {
        set: function (res) {
            this._output = {};
            if (res != null) {
                this._output.status = res.statusText + ' (' + res.status + ')';
                if (res.json().errors != null)
                    if (res.json().errors.full_messages != null)
                        this._output.errors = res.json().errors.full_messages;
                    else
                        this._output.errors = res.json().errors;
                else
                    this._output.data = res.json().data;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', http_1.Response), 
        __metadata('design:paramtypes', [http_1.Response])
    ], OutputComponent.prototype, "data", null);
    OutputComponent = __decorate([
        core_1.Component({
            selector: 'output',
            templateUrl: 'app/users/shared/output/output.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OutputComponent);
    return OutputComponent;
}());
exports.OutputComponent = OutputComponent;
//# sourceMappingURL=output.component.js.map