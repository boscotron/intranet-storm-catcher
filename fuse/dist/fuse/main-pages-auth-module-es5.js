(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-auth-module"],{

/***/ "./src/app/main/pages/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/main/pages/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_main_pages_authentication_login_login_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/pages/authentication/login/login.module */ "./src/app/main/pages/authentication/login/login.module.ts");
/* harmony import */ var app_main_pages_authentication_login_2_login_2_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/authentication/login-2/login-2.module */ "./src/app/main/pages/authentication/login-2/login-2.module.ts");
/* harmony import */ var app_main_pages_authentication_register_register_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/register/register.module */ "./src/app/main/pages/authentication/register/register.module.ts");
/* harmony import */ var app_main_pages_authentication_register_2_register_2_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/authentication/register-2/register-2.module */ "./src/app/main/pages/authentication/register-2/register-2.module.ts");
/* harmony import */ var app_main_pages_authentication_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/pages/authentication/forgot-password/forgot-password.module */ "./src/app/main/pages/authentication/forgot-password/forgot-password.module.ts");
/* harmony import */ var app_main_pages_authentication_forgot_password_2_forgot_password_2_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/pages/authentication/forgot-password-2/forgot-password-2.module */ "./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.module.ts");
/* harmony import */ var app_main_pages_authentication_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/pages/authentication/reset-password/reset-password.module */ "./src/app/main/pages/authentication/reset-password/reset-password.module.ts");
/* harmony import */ var app_main_pages_authentication_reset_password_2_reset_password_2_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/pages/authentication/reset-password-2/reset-password-2.module */ "./src/app/main/pages/authentication/reset-password-2/reset-password-2.module.ts");
/* harmony import */ var app_main_pages_authentication_lock_lock_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/pages/authentication/lock/lock.module */ "./src/app/main/pages/authentication/lock/lock.module.ts");
/* harmony import */ var app_main_pages_authentication_mail_confirm_mail_confirm_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/pages/authentication/mail-confirm/mail-confirm.module */ "./src/app/main/pages/authentication/mail-confirm/mail-confirm.module.ts");
/* harmony import */ var app_main_pages_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/pages/coming-soon/coming-soon.module */ "./src/app/main/pages/coming-soon/coming-soon.module.ts");
/* harmony import */ var app_main_pages_errors_404_error_404_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/pages/errors/404/error-404.module */ "./src/app/main/pages/errors/404/error-404.module.ts");
/* harmony import */ var app_main_pages_errors_500_error_500_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/main/pages/errors/500/error-500.module */ "./src/app/main/pages/errors/500/error-500.module.ts");
/* harmony import */ var app_main_pages_maintenance_maintenence_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/main/pages/maintenance/maintenence.module */ "./src/app/main/pages/maintenance/maintenence.module.ts");
/* harmony import */ var app_main_pages_pricing_pricing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/main/pages/pricing/pricing.module */ "./src/app/main/pages/pricing/pricing.module.ts");

















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                // Authentication
                app_main_pages_authentication_login_login_module__WEBPACK_IMPORTED_MODULE_2__["LoginModule"],
                app_main_pages_authentication_login_2_login_2_module__WEBPACK_IMPORTED_MODULE_3__["Login2Module"],
                app_main_pages_authentication_register_register_module__WEBPACK_IMPORTED_MODULE_4__["RegisterModule"],
                app_main_pages_authentication_register_2_register_2_module__WEBPACK_IMPORTED_MODULE_5__["Register2Module"],
                app_main_pages_authentication_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordModule"],
                app_main_pages_authentication_forgot_password_2_forgot_password_2_module__WEBPACK_IMPORTED_MODULE_7__["ForgotPassword2Module"],
                app_main_pages_authentication_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordModule"],
                app_main_pages_authentication_reset_password_2_reset_password_2_module__WEBPACK_IMPORTED_MODULE_9__["ResetPassword2Module"],
                app_main_pages_authentication_lock_lock_module__WEBPACK_IMPORTED_MODULE_10__["LockModule"],
                app_main_pages_authentication_mail_confirm_mail_confirm_module__WEBPACK_IMPORTED_MODULE_11__["MailConfirmModule"],
                // Coming-soon
                app_main_pages_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_12__["ComingSoonModule"],
                // Errors
                app_main_pages_errors_404_error_404_module__WEBPACK_IMPORTED_MODULE_13__["Error404Module"],
                app_main_pages_errors_500_error_500_module__WEBPACK_IMPORTED_MODULE_14__["Error500Module"],
                // Maintenance
                app_main_pages_maintenance_maintenence_module__WEBPACK_IMPORTED_MODULE_15__["MaintenanceModule"],
                // Pricing
                app_main_pages_pricing_pricing_module__WEBPACK_IMPORTED_MODULE_16__["PricingModule"],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-pages-auth-module-es5.js.map