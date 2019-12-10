(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/main/apps/almacen/orden/orden-statuses.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/apps/almacen/orden/orden-statuses.ts ***!
  \***********************************************************/
/*! exports provided: orderStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderStatuses", function() { return orderStatuses; });
const orderStatuses = [
    {
        id: 1,
        name: 'Awaiting check payment',
        color: 'blue-500'
    },
    {
        id: 2,
        name: 'Payment accepted',
        color: 'green-500'
    },
    {
        id: 3,
        name: 'Preparing the order',
        color: 'orange-500'
    },
    {
        id: 4,
        name: 'Shipped',
        color: 'purple-500'
    },
    {
        id: 5,
        name: 'Delivered',
        color: 'green-800'
    },
    {
        id: 6,
        name: 'Canceled',
        color: 'pink-500'
    },
    {
        id: 7,
        name: 'Refunded',
        color: 'red-500'
    },
    {
        id: 8,
        name: 'Payment error',
        color: 'red-900'
    },
    {
        id: 9,
        name: 'On pre-order (paid)',
        color: 'purple-300'
    },
    {
        id: 10,
        name: 'Awaiting bank wire payment',
        color: 'blue-500'
    },
    {
        id: 11,
        name: 'Awaiting PayPal payment',
        color: 'blue-500'
    },
    {
        id: 12,
        name: 'Remote payment accepted',
        color: 'green-500'
    },
    {
        id: 13,
        name: 'On pre-order (not paid)',
        color: 'purple-300'
    },
    {
        id: 14,
        name: 'Awaiting Cash-on-delivery payment',
        color: 'blue-500'
    }
];


/***/ }),

/***/ "./src/app/main/apps/almacen/orden/orden.model.ts":
/*!********************************************************!*\
  !*** ./src/app/main/apps/almacen/orden/orden.model.ts ***!
  \********************************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

class Order {
    /**
     * Constructor
     *
     * @param order
     */
    constructor(order) {
        order = order || {};
        this.id = order.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.reference = order.reference || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.subtotal = order.subtotal || 0;
        this.tax = order.tax || 0;
        this.discount = order.discount || 0;
        this.total = order.total || 0;
        this.date = order.date || '';
        this.customer = order.customer || {};
        this.products = order.products || [];
        this.status = order.status || [];
        this.payment = order.payment || {};
        this.shippingDetails = order.shippingDetails || [];
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map