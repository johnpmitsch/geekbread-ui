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
var angular2_token_1 = require('angular2-token');
var TokenService = (function () {
    function TokenService(_tokenService) {
        this._tokenService = _tokenService;
        this._tokenService.init({
            apiPath: "http://localhost:3000",
            signInPath: 'auth/sign_in',
            signInRedirect: 'sign-in',
            signInStoredUrlStorageKey: null,
            signOutPath: 'auth/sign_out',
            registerAccountPath: 'auth',
            deleteAccountPath: 'auth',
            registerAccountCallback: 'recipes',
            updatePasswordPath: 'auth',
            resetPasswordPath: 'auth/password',
            resetPasswordCallback: window.location.href,
            userTypes: null,
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        });
    }
    TokenService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_token_1.Angular2TokenService])
    ], TokenService);
    return TokenService;
}());
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map