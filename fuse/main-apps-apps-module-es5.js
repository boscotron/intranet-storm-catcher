(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-apps-apps-module"],{

/***/ "./src/app/main/apps/apps.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/apps/apps.module.ts ***!
  \******************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");




var routes = [
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    },
    {
        path: 'dashboards/project',
        loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
    },
    {
        path: 'dashboards/jmydashboard',
        loadChildren: '../../concomsis/jmy/admin/jmydash/jmydash.module#JmydashModule'
    },
    {
        path: 'dashboards/jmys',
        loadChildren: '../../concomsis/jmy/admin/jmydashs/jmydashs.module#JmydashsModule'
    },
    /* {
         path        : 'mail',
         loadChildren: './mail/mail.module#MailModule'
     },
     {
         path        : 'mail-ngrx',
         loadChildren: './mail-ngrx/mail.module#MailNgrxModule'
     },*/
    {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },
    {
        path: 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#EcommerceModule'
    },
    {
        path: 'academy',
        loadChildren: './academy/academy.module#AcademyModule'
    },
    {
        path: 'encuestas',
        loadChildren: './encuestas/encuesta.module#EncuestaModule'
    },
    /*{
        path        : 'todo',
        loadChildren: './todo/todo.module#TodoModule'
    },
    {
        path        : 'file-manager',
        loadChildren: './file-manager/file-manager.module#FileManagerModule'
    },*/
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
        path: 'scrumboard',
        loadChildren: './scrumboard/scrumboard.module#ScrumboardModule'
    },
    {
        path: 'st/almacenes',
        loadChildren: './stormcatcher/almacen/almacen.module#SCAlmacenModule'
    },
    {
        path: 'st/almacen',
        loadChildren: './stormcatcher/almaceninventario/almacen.module#SCAlmacenInventarioModule'
    },
    {
        path: 'st/proveedores',
        loadChildren: './stormcatcher/proveedores/proveedores.module#SCProveedoresModule'
    },
    {
        path: 'st/locaciones',
        loadChildren: './stormcatcher/locacion/locacion.module#SCLocacionModule'
    }
];
var AppsModule = /** @class */ (function () {
    function AppsModule() {
    }
    AppsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], AppsModule);
    return AppsModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-apps-apps-module-es5.js.map