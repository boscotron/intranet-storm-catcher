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


/***/ }),

/***/ "./src/app/main/apps/almacen/producto/producto.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/apps/almacen/producto/producto.model.ts ***!
  \**************************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

class Product {
    /**
     * Constructor
     *
     * @param product
     */
    constructor(product) {
        product = product || {};
        this.id = product.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.name = product.name || '';
        this.handle = product.handle || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].handleize(this.name);
        this.description = product.description || '';
        this.categories = product.categories || [];
        this.tags = product.tags || [];
        this.images = product.images || [];
        this.priceTaxExcl = product.priceTaxExcl || 0;
        this.priceTaxIncl = product.priceTaxIncl || 0;
        this.taxRate = product.taxRate || 0;
        this.comparedPrice = product.comparedPrice || 0;
        this.quantity = product.quantity || 0;
        this.sku = product.sku || 0;
        this.width = product.width || 0;
        this.height = product.height || 0;
        this.depth = product.depth || 0;
        this.weight = product.weight || 0;
        this.extraShippingFee = product.extraShippingFee || 0;
        this.active = product.active || true;
        this.web = product.web || true;
    }
    /**
     * Add category
     *
     * @param {MatChipInputEvent} event
     */
    addCategory(event) {
        const input = event.input;
        const value = event.value;
        // Add category
        if (value) {
            this.categories.push(value);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /**
     * Remove category
     *
     * @param category
     */
    removeCategory(category) {
        const index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
        }
    }
    /**
     * Add tag
     *
     * @param {MatChipInputEvent} event
     */
    addTag(event) {
        const input = event.input;
        const value = event.value;
        // Add tag
        if (value) {
            this.tags.push(value);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /**
     * Remove tag
     *
     * @param tag
     */
    removeTag(tag) {
        const index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map