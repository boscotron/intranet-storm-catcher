(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~stormcatcher-almaceninventario-almacen-module~stormcatcher-proveedores-proveedores-module"],{

/***/ "./node_modules/@angular/cdk/esm5/tree.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/tree.es5.js ***!
  \****************************************************/
/*! exports provided: BaseTreeControl, FlatTreeControl, NestedTreeControl, CdkNestedTreeNode, CdkTreeNodeOutletContext, CdkTreeNodeDef, CdkTreeNodePadding, CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet, CdkTree, CdkTreeNode, getTreeNoValidDataSourceError, getTreeMultipleDefaultNodeDefsError, getTreeMissingMatchingNodeDefError, getTreeControlMissingError, getTreeControlFunctionsMissingError, CdkTreeModule, CdkTreeNodeToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function() { return BaseTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function() { return FlatTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function() { return NestedTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function() { return CdkNestedTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function() { return CdkTreeNodeOutletContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function() { return CdkTreeNodeDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function() { return CdkTreeNodePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function() { return CDK_TREE_NODE_OUTLET_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function() { return CdkTreeNodeOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTree", function() { return CdkTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function() { return CdkTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function() { return getTreeNoValidDataSourceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function() { return getTreeMultipleDefaultNodeDefsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function() { return getTreeMissingMatchingNodeDefError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function() { return getTreeControlMissingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function() { return getTreeControlFunctionsMissingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function() { return CdkTreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function() { return CdkTreeNodeToggle; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@angular/cdk/node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base tree control. It has basic toggle/expand/collapse operations on a single data node.
 * @abstract
 * @template T
 */
var  /**
 * Base tree control. It has basic toggle/expand/collapse operations on a single data node.
 * @abstract
 * @template T
 */
BaseTreeControl = /** @class */ (function () {
    function BaseTreeControl() {
        /**
         * A selection model with multi-selection to track expansion status.
         */
        this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
    }
    /** Toggles one single data node's expanded/collapsed state. */
    /**
     * Toggles one single data node's expanded/collapsed state.
     * @param {?} dataNode
     * @return {?}
     */
    BaseTreeControl.prototype.toggle = /**
     * Toggles one single data node's expanded/collapsed state.
     * @param {?} dataNode
     * @return {?}
     */
    function (dataNode) {
        this.expansionModel.toggle(dataNode);
    };
    /** Expands one single data node. */
    /**
     * Expands one single data node.
     * @param {?} dataNode
     * @return {?}
     */
    BaseTreeControl.prototype.expand = /**
     * Expands one single data node.
     * @param {?} dataNode
     * @return {?}
     */
    function (dataNode) {
        this.expansionModel.select(dataNode);
    };
    /** Collapses one single data node. */
    /**
     * Collapses one single data node.
     * @param {?} dataNode
     * @return {?}
     */
    BaseTreeControl.prototype.collapse = /**
     * Collapses one single data node.
     * @param {?} dataNode
     * @return {?}
     */
    function (dataNode) {
        this.expansionModel.deselect(dataNode);
    };
    /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */
    /**
     * Whether a given data node is expanded or not. Returns true if the data node is expanded.
     * @param {?} dataNode
     * @return {?}
     */
    BaseTreeControl.prototype.isExpanded = /**
     * Whether a given data node is expanded or not. Returns true if the data node is expanded.
     * @param {?} dataNode
     * @return {?}
     */
    function (dataNode) {
        return this.expansionModel.isSelected(dataNode);
    };
    /** Toggles a subtree rooted at `node` recursively. */
    /**
     * Toggles a subtree rooted at `node` recursively.
     * @param {?} dataNode
     * @return {?}
     */
    BaseTreeControl.prototype.toggleDescendants = /**
     * Toggles a subtree rooted at `node` recursively.
     * @param {?} dataNode
     * @return {?}
     */
    function (dataNode) {
        this.expansionModel.isSelected(dataNode)
            ? this.collapseDescendants(dataNode)
            : this.expandDescendants(dataNode);
    };
    /** Collapse all dataNodes in the tree. */
    /**
     * Collapse all dataNodes in the tree.
     * @return {?}
     */
    BaseTreeControl.prototype.collapseAll = /**
     * Collapse all dataNodes in the tree.
     * @return {?}
     */
    function () {
        this.expansionModel.clear();
    };
    /** Expands a subtree rooted at given data node recursively. */
    /**
     * Expands a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    BaseTreeControl.prototype.expandDescendants = /**
     * Expands a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    function (dataNode) {
        var _a;
        /** @type {?} */
        var toBeProcessed = [dataNode];
        toBeProcessed.push.apply(toBeProcessed, this.getDescendants(dataNode));
        (_a = this.expansionModel).select.apply(_a, toBeProcessed);
    };
    /** Collapses a subtree rooted at given data node recursively. */
    /**
     * Collapses a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    BaseTreeControl.prototype.collapseDescendants = /**
     * Collapses a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    function (dataNode) {
        var _a;
        /** @type {?} */
        var toBeProcessed = [dataNode];
        toBeProcessed.push.apply(toBeProcessed, this.getDescendants(dataNode));
        (_a = this.expansionModel).deselect.apply(_a, toBeProcessed);
    };
    return BaseTreeControl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
 * @template T
 */
var  /**
 * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
 * @template T
 */
FlatTreeControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FlatTreeControl, _super);
    /** Construct with flat tree data node functions getLevel and isExpandable. */
    function FlatTreeControl(getLevel, isExpandable) {
        var _this = _super.call(this) || this;
        _this.getLevel = getLevel;
        _this.isExpandable = isExpandable;
        return _this;
    }
    /**
     * Gets a list of the data node's subtree of descendent data nodes.
     *
     * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
     * with correct levels.
     */
    /**
     * Gets a list of the data node's subtree of descendent data nodes.
     *
     * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
     * with correct levels.
     * @param {?} dataNode
     * @return {?}
     */
    FlatTreeControl.prototype.getDescendants = /**
     * Gets a list of the data node's subtree of descendent data nodes.
     *
     * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
     * with correct levels.
     * @param {?} dataNode
     * @return {?}
     */
    function (dataNode) {
        /** @type {?} */
        var startIndex = this.dataNodes.indexOf(dataNode);
        /** @type {?} */
        var results = [];
        // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
        // The level of descendants of a tree node must be greater than the level of the given
        // tree node.
        // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
        // If we reach a node whose level is greater than the level of the tree node, we hit a
        // sibling of an ancestor.
        for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
        }
        return results;
    };
    /**
     * Expands all data nodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
     * data nodes of the tree.
     */
    /**
     * Expands all data nodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
     * data nodes of the tree.
     * @return {?}
     */
    FlatTreeControl.prototype.expandAll = /**
     * Expands all data nodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
     * data nodes of the tree.
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.expansionModel).select.apply(_a, this.dataNodes);
    };
    return FlatTreeControl;
}(BaseTreeControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type.
 * @template T
 */
var  /**
 * Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type.
 * @template T
 */
NestedTreeControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(NestedTreeControl, _super);
    /** Construct with nested tree function getChildren. */
    function NestedTreeControl(getChildren) {
        var _this = _super.call(this) || this;
        _this.getChildren = getChildren;
        return _this;
    }
    /**
     * Expands all dataNodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
     * data nodes of the tree.
     */
    /**
     * Expands all dataNodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
     * data nodes of the tree.
     * @return {?}
     */
    NestedTreeControl.prototype.expandAll = /**
     * Expands all dataNodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
     * data nodes of the tree.
     * @return {?}
     */
    function () {
        var _this = this;
        var _a;
        this.expansionModel.clear();
        /** @type {?} */
        var allNodes = this.dataNodes.reduce((/**
         * @param {?} accumulator
         * @param {?} dataNode
         * @return {?}
         */
        function (accumulator, dataNode) {
            return accumulator.concat(_this.getDescendants(dataNode), [dataNode]);
        }), []);
        (_a = this.expansionModel).select.apply(_a, allNodes);
    };
    /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */
    /**
     * Gets a list of descendant dataNodes of a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    NestedTreeControl.prototype.getDescendants = /**
     * Gets a list of descendant dataNodes of a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    function (dataNode) {
        /** @type {?} */
        var descendants = [];
        this._getDescendants(descendants, dataNode);
        // Remove the node itself
        return descendants.splice(1);
    };
    /** A helper function to get descendants recursively. */
    /**
     * A helper function to get descendants recursively.
     * @protected
     * @param {?} descendants
     * @param {?} dataNode
     * @return {?}
     */
    NestedTreeControl.prototype._getDescendants = /**
     * A helper function to get descendants recursively.
     * @protected
     * @param {?} descendants
     * @param {?} dataNode
     * @return {?}
     */
    function (descendants, dataNode) {
        var _this = this;
        descendants.push(dataNode);
        /** @type {?} */
        var childrenNodes = this.getChildren(dataNode);
        if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) { return _this._getDescendants(descendants, child); }));
        }
        else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe((/**
             * @param {?} children
             * @return {?}
             */
            function (children) {
                children.forEach((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return _this._getDescendants(descendants, child); }));
            }));
        }
    };
    return NestedTreeControl;
}(BaseTreeControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to provide a `CdkTreeNode` to its outlet.
 * Used primarily to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
var CdkTreeNodeOutlet = /** @class */ (function () {
    function CdkTreeNodeOutlet(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
    CdkTreeNodeOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkTreeNodeOutlet]'
                },] },
    ];
    /** @nocollapse */
    CdkTreeNodeOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
    ]; };
    return CdkTreeNodeOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Context provided to the tree node component.
 * @template T
 */
var  /**
 * Context provided to the tree node component.
 * @template T
 */
CdkTreeNodeOutletContext = /** @class */ (function () {
    function CdkTreeNodeOutletContext(data) {
        this.$implicit = data;
    }
    return CdkTreeNodeOutletContext;
}());
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 * @template T
 */
var CdkTreeNodeDef = /** @class */ (function () {
    /** @docs-private */
    function CdkTreeNodeDef(template) {
        this.template = template;
    }
    CdkTreeNodeDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkTreeNodeDef]',
                    inputs: [
                        'when: cdkTreeNodeDefWhen'
                    ],
                },] },
    ];
    /** @nocollapse */
    CdkTreeNodeDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    return CdkTreeNodeDef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Returns an error to be thrown when there is no usable data.
 * \@docs-private
 * @return {?}
 */
function getTreeNoValidDataSourceError() {
    return Error("A valid data source must be provided.");
}
/**
 * Returns an error to be thrown when there are multiple nodes that are missing a when function.
 * \@docs-private
 * @return {?}
 */
function getTreeMultipleDefaultNodeDefsError() {
    return Error("There can only be one default row without a when predicate function.");
}
/**
 * Returns an error to be thrown when there are no matching node defs for a particular set of data.
 * \@docs-private
 * @return {?}
 */
function getTreeMissingMatchingNodeDefError() {
    return Error("Could not find a matching node definition for the provided node data.");
}
/**
 * Returns an error to be thrown when there are tree control.
 * \@docs-private
 * @return {?}
 */
function getTreeControlMissingError() {
    return Error("Could not find a tree control for the tree.");
}
/**
 * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
 * \@docs-private
 * @return {?}
 */
function getTreeControlFunctionsMissingError() {
    return Error("Could not find functions for nested/flat tree in tree control.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 * @template T
 */
var CdkTree = /** @class */ (function () {
    function CdkTree(_differs, _changeDetectorRef) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Level of nodes
         */
        this._levels = new Map();
        // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
    }
    Object.defineProperty(CdkTree.prototype, "dataSource", {
        /**
         * Provides a stream containing the latest data array to render. Influenced by the tree's
         * stream of view window (what dataNodes are currently on screen).
         * Data source can be an observable of data array, or a data array to render.
         */
        get: /**
         * Provides a stream containing the latest data array to render. Influenced by the tree's
         * stream of view window (what dataNodes are currently on screen).
         * Data source can be an observable of data array, or a data array to render.
         * @return {?}
         */
        function () { return this._dataSource; },
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            if (this._dataSource !== dataSource) {
                this._switchDataSource(dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTree.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._dataDiffer = this._differs.find([]).create(this.trackBy);
        if (!this.treeControl) {
            throw getTreeControlMissingError();
        }
    };
    /**
     * @return {?}
     */
    CdkTree.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._nodeOutlet.viewContainer.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this._dataSource && typeof ((/** @type {?} */ (this._dataSource))).disconnect === 'function') {
            ((/** @type {?} */ (this.dataSource))).disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    };
    /**
     * @return {?}
     */
    CdkTree.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultNodeDefs = this._nodeDefs.filter((/**
         * @param {?} def
         * @return {?}
         */
        function (def) { return !def.when; }));
        if (defaultNodeDefs.length > 1) {
            throw getTreeMultipleDefaultNodeDefsError();
        }
        this._defaultNodeDef = defaultNodeDefs[0];
        if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
        }
    };
    // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
    //     and nested trees.
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     */
    // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
    //     and nested trees.
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    CdkTree.prototype._switchDataSource = 
    // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
    //     and nested trees.
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    function (dataSource) {
        if (this._dataSource && typeof ((/** @type {?} */ (this._dataSource))).disconnect === 'function') {
            ((/** @type {?} */ (this.dataSource))).disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
        // Remove the all dataNodes if there is now no data source
        if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
        if (this._nodeDefs) {
            this._observeRenderChanges();
        }
    };
    /** Set up a subscription for the data provided by the data source. */
    /**
     * Set up a subscription for the data provided by the data source.
     * @private
     * @return {?}
     */
    CdkTree.prototype._observeRenderChanges = /**
     * Set up a subscription for the data provided by the data source.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["isDataSource"])(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
        }
        else if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.renderNodeChanges(data); }));
        }
        else {
            throw getTreeNoValidDataSourceError();
        }
    };
    /** Check for changes made in the data and render each change (node added/removed/moved). */
    /**
     * Check for changes made in the data and render each change (node added/removed/moved).
     * @param {?} data
     * @param {?=} dataDiffer
     * @param {?=} viewContainer
     * @param {?=} parentData
     * @return {?}
     */
    CdkTree.prototype.renderNodeChanges = /**
     * Check for changes made in the data and render each change (node added/removed/moved).
     * @param {?} data
     * @param {?=} dataDiffer
     * @param {?=} viewContainer
     * @param {?=} parentData
     * @return {?}
     */
    function (data, dataDiffer, viewContainer, parentData) {
        var _this = this;
        if (dataDiffer === void 0) { dataDiffer = this._dataDiffer; }
        if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
        /** @type {?} */
        var changes = dataDiffer.diff(data);
        if (!changes) {
            return;
        }
        changes.forEachOperation((/**
         * @param {?} item
         * @param {?} adjustedPreviousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
                _this.insertNode(data[(/** @type {?} */ (currentIndex))], (/** @type {?} */ (currentIndex)), viewContainer, parentData);
            }
            else if (currentIndex == null) {
                viewContainer.remove((/** @type {?} */ (adjustedPreviousIndex)));
                _this._levels.delete(item.item);
            }
            else {
                /** @type {?} */
                var view = viewContainer.get((/** @type {?} */ (adjustedPreviousIndex)));
                viewContainer.move((/** @type {?} */ (view)), currentIndex);
            }
        }));
        this._changeDetectorRef.detectChanges();
    };
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     */
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    CdkTree.prototype._getNodeDef = /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    function (data, i) {
        if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
        }
        /** @type {?} */
        var nodeDef = this._nodeDefs.find((/**
         * @param {?} def
         * @return {?}
         */
        function (def) { return def.when && def.when(i, data); })) || this._defaultNodeDef;
        if (!nodeDef) {
            throw getTreeMissingMatchingNodeDefError();
        }
        return nodeDef;
    };
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     * @param {?} nodeData
     * @param {?} index
     * @param {?=} viewContainer
     * @param {?=} parentData
     * @return {?}
     */
    CdkTree.prototype.insertNode = /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     * @param {?} nodeData
     * @param {?} index
     * @param {?=} viewContainer
     * @param {?=} parentData
     * @return {?}
     */
    function (nodeData, index, viewContainer, parentData) {
        /** @type {?} */
        var node = this._getNodeDef(nodeData, index);
        // Node context that will be provided to created embedded view
        /** @type {?} */
        var context = new CdkTreeNodeOutletContext(nodeData);
        // If the tree is flat tree, then use the `getLevel` function in flat tree control
        // Otherwise, use the level of parent node.
        if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
        }
        else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level = (/** @type {?} */ (this._levels.get(parentData))) + 1;
        }
        else {
            context.level = 0;
        }
        this._levels.set(nodeData, context.level);
        // Use default tree nodeOutlet, or nested node's nodeOutlet
        /** @type {?} */
        var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
        container.createEmbeddedView(node.template, context, index);
        // Set the data to just created `CdkTreeNode`.
        // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
        //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.
        if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
        }
    };
    CdkTree.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{selector: 'cdk-tree',
                    exportAs: 'cdkTree',
                    template: "<ng-container cdkTreeNodeOutlet></ng-container>",
                    host: {
                        'class': 'cdk-tree',
                        'role': 'tree',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
                    // The view for `CdkTree` consists entirely of templates declared in other views. As they are
                    // declared elsewhere, they are checked when their declaration points are checked.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default
                },] },
    ];
    /** @nocollapse */
    CdkTree.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    CdkTree.propDecorators = {
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        treeControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        _nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [CdkTreeNodeOutlet, { static: true },] }],
        _nodeDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [CdkTreeNodeDef,] }]
    };
    return CdkTree;
}());
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 * @template T
 */
var CdkTreeNode = /** @class */ (function () {
    function CdkTreeNode(_elementRef, _tree) {
        this._elementRef = _elementRef;
        this._tree = _tree;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the node's data has changed.
         */
        this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The role of the node should be 'group' if it's an internal node,
         * and 'treeitem' if it's a leaf node.
         */
        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode = (/** @type {?} */ (this));
    }
    Object.defineProperty(CdkTreeNode.prototype, "data", {
        /** The tree node's data. */
        get: /**
         * The tree node's data.
         * @return {?}
         */
        function () { return this._data; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._data) {
                this._data = value;
                this._setRoleFromData();
                this._dataChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTreeNode.prototype, "isExpanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tree.treeControl.isExpanded(this._data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTreeNode.prototype, "level", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTreeNode.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // If this is the last tree node being destroyed,
        // clear out the reference to avoid leaking memory.
        if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
        }
        this._dataChanges.complete();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Focuses the menu item. Implements for FocusableOption. */
    /**
     * Focuses the menu item. Implements for FocusableOption.
     * @return {?}
     */
    CdkTreeNode.prototype.focus = /**
     * Focuses the menu item. Implements for FocusableOption.
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /**
     * @protected
     * @return {?}
     */
    CdkTreeNode.prototype._setRoleFromData = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._tree.treeControl.isExpandable) {
            this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
        }
        else {
            if (!this._tree.treeControl.getChildren) {
                throw getTreeControlFunctionsMissingError();
            }
            /** @type {?} */
            var childrenNodes = this._tree.treeControl.getChildren(this._data);
            if (Array.isArray(childrenNodes)) {
                this._setRoleFromChildren((/** @type {?} */ (childrenNodes)));
            }
            else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
                childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                    .subscribe((/**
                 * @param {?} children
                 * @return {?}
                 */
                function (children) { return _this._setRoleFromChildren(children); }));
            }
        }
    };
    /**
     * @protected
     * @param {?} children
     * @return {?}
     */
    CdkTreeNode.prototype._setRoleFromChildren = /**
     * @protected
     * @param {?} children
     * @return {?}
     */
    function (children) {
        this.role = children && children.length ? 'group' : 'treeitem';
    };
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */
    CdkTreeNode.mostRecentTreeNode = null;
    CdkTreeNode.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'cdk-tree-node',
                    exportAs: 'cdkTreeNode',
                    host: {
                        '[attr.aria-expanded]': 'isExpanded',
                        '[attr.aria-level]': 'role === "treeitem" ? level : null',
                        '[attr.role]': 'role',
                        'class': 'cdk-tree-node',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkTreeNode.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: CdkTree }
    ]; };
    CdkTreeNode.propDecorators = {
        role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkTreeNode;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Nested node is a child of `<cdk-tree>`. It works with nested tree.
 * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
 * be added in the `cdkTreeNodeOutlet` in tree node template.
 * For example:
 *   ```html
 *   <cdk-nested-tree-node>
 *     {{node.name}}
 *     <ng-template cdkTreeNodeOutlet></ng-template>
 *   </cdk-nested-tree-node>
 *   ```
 * The children of node will be automatically added to `cdkTreeNodeOutlet`, the result dom will be
 * like this:
 *   ```html
 *   <cdk-nested-tree-node>
 *     {{node.name}}
 *      <cdk-nested-tree-node>{{child1.name}}</cdk-nested-tree-node>
 *      <cdk-nested-tree-node>{{child2.name}}</cdk-nested-tree-node>
 *   </cdk-nested-tree-node>
 *   ```
 * @template T
 */
var CdkNestedTreeNode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(CdkNestedTreeNode, _super);
    function CdkNestedTreeNode(_elementRef, _tree, _differs) {
        var _this = _super.call(this, _elementRef, _tree) || this;
        _this._elementRef = _elementRef;
        _this._tree = _tree;
        _this._differs = _differs;
        return _this;
    }
    /**
     * @return {?}
     */
    CdkNestedTreeNode.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
        if (!this._tree.treeControl.getChildren) {
            throw getTreeControlFunctionsMissingError();
        }
        /** @type {?} */
        var childrenNodes = this._tree.treeControl.getChildren(this.data);
        if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes((/** @type {?} */ (childrenNodes)));
        }
        else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return _this.updateChildrenNodes(result); }));
        }
        this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.updateChildrenNodes(); }));
    };
    /**
     * @return {?}
     */
    CdkNestedTreeNode.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._clear();
        _super.prototype.ngOnDestroy.call(this);
    };
    /** Add children dataNodes to the NodeOutlet */
    /**
     * Add children dataNodes to the NodeOutlet
     * @protected
     * @param {?=} children
     * @return {?}
     */
    CdkNestedTreeNode.prototype.updateChildrenNodes = /**
     * Add children dataNodes to the NodeOutlet
     * @protected
     * @param {?=} children
     * @return {?}
     */
    function (children) {
        /** @type {?} */
        var outlet = this._getNodeOutlet();
        if (children) {
            this._children = children;
        }
        if (outlet && this._children) {
            /** @type {?} */
            var viewContainer = outlet.viewContainer;
            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
        }
        else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
        }
    };
    /** Clear the children dataNodes. */
    /**
     * Clear the children dataNodes.
     * @protected
     * @return {?}
     */
    CdkNestedTreeNode.prototype._clear = /**
     * Clear the children dataNodes.
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var outlet = this._getNodeOutlet();
        if (outlet) {
            outlet.viewContainer.clear();
            this._dataDiffer.diff([]);
        }
    };
    /** Gets the outlet for the current node. */
    /**
     * Gets the outlet for the current node.
     * @private
     * @return {?}
     */
    CdkNestedTreeNode.prototype._getNodeOutlet = /**
     * Gets the outlet for the current node.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var outlets = this.nodeOutlet;
        if (outlets) {
            // Note that since we use `descendants: true` on the query, we have to ensure
            // that we don't pick up the outlet of a child node by accident.
            return outlets.find((/**
             * @param {?} outlet
             * @return {?}
             */
            function (outlet) { return !outlet._node || outlet._node === _this; }));
        }
    };
    CdkNestedTreeNode.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'cdk-nested-tree-node',
                    exportAs: 'cdkNestedTreeNode',
                    host: {
                        '[attr.aria-expanded]': 'isExpanded',
                        '[attr.role]': 'role',
                        'class': 'cdk-tree-node cdk-nested-tree-node',
                    },
                    providers: [
                        { provide: CdkTreeNode, useExisting: CdkNestedTreeNode },
                        { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: CdkNestedTreeNode }
                    ]
                },] },
    ];
    /** @nocollapse */
    CdkNestedTreeNode.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: CdkTree },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"] }
    ]; };
    CdkNestedTreeNode.propDecorators = {
        nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [CdkTreeNodeOutlet, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
    return CdkNestedTreeNode;
}(CdkTreeNode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Regex used to split a string on its CSS units.
 * @type {?}
 */
var cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 * @template T
 */
var CdkTreeNodePadding = /** @class */ (function () {
    function CdkTreeNodePadding(_treeNode, _tree, _renderer, _element, _dir) {
        var _this = this;
        this._treeNode = _treeNode;
        this._tree = _tree;
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * CSS units used for the indentation value.
         */
        this.indentUnits = 'px';
        this._indent = 40;
        this._setPadding();
        if (_dir) {
            _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe((/**
             * @return {?}
             */
            function () { return _this._setPadding(true); }));
        }
        // In Ivy the indentation binding might be set before the tree node's data has been added,
        // which means that we'll miss the first render. We have to subscribe to changes in the
        // data to ensure that everything is up to date.
        _treeNode._dataChanges.subscribe((/**
         * @return {?}
         */
        function () { return _this._setPadding(); }));
    }
    Object.defineProperty(CdkTreeNodePadding.prototype, "level", {
        /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
        get: /**
         * The level of depth of the tree node. The padding will be `level * indent` pixels.
         * @return {?}
         */
        function () { return this._level; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._level = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceNumberProperty"])(value);
            this._setPadding();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTreeNodePadding.prototype, "indent", {
        /**
         * The indent for each level. Can be a number or a CSS string.
         * Default number 40px from material design menu sub-menu spec.
         */
        get: /**
         * The indent for each level. Can be a number or a CSS string.
         * Default number 40px from material design menu sub-menu spec.
         * @return {?}
         */
        function () { return this._indent; },
        set: /**
         * @param {?} indent
         * @return {?}
         */
        function (indent) {
            /** @type {?} */
            var value = indent;
            /** @type {?} */
            var units = 'px';
            if (typeof indent === 'string') {
                /** @type {?} */
                var parts = indent.split(cssUnitPattern);
                value = parts[0];
                units = parts[1] || units;
            }
            this.indentUnits = units;
            this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceNumberProperty"])(value);
            this._setPadding();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTreeNodePadding.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
    /**
     * The padding indent value for the tree node. Returns a string with px numbers if not null.
     * @return {?}
     */
    CdkTreeNodePadding.prototype._paddingIndent = /**
     * The padding indent value for the tree node. Returns a string with px numbers if not null.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nodeLevel = (this._treeNode.data && this._tree.treeControl.getLevel)
            ? this._tree.treeControl.getLevel(this._treeNode.data)
            : null;
        /** @type {?} */
        var level = this._level || nodeLevel;
        return level ? "" + level * this._indent + this.indentUnits : null;
    };
    /**
     * @param {?=} forceChange
     * @return {?}
     */
    CdkTreeNodePadding.prototype._setPadding = /**
     * @param {?=} forceChange
     * @return {?}
     */
    function (forceChange) {
        if (forceChange === void 0) { forceChange = false; }
        /** @type {?} */
        var padding = this._paddingIndent();
        if (padding !== this._currentPadding || forceChange) {
            /** @type {?} */
            var element = this._element.nativeElement;
            /** @type {?} */
            var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
            /** @type {?} */
            var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
            this._renderer.setStyle(element, paddingProp, padding);
            this._renderer.setStyle(element, resetProp, null);
            this._currentPadding = padding;
        }
    };
    CdkTreeNodePadding.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkTreeNodePadding]',
                },] },
    ];
    /** @nocollapse */
    CdkTreeNodePadding.ctorParameters = function () { return [
        { type: CdkTreeNode },
        { type: CdkTree },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
    ]; };
    CdkTreeNodePadding.propDecorators = {
        level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkTreeNodePadding',] }],
        indent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkTreeNodePaddingIndent',] }]
    };
    return CdkTreeNodePadding;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Node toggle to expand/collapse the node.
 * @template T
 */
var CdkTreeNodeToggle = /** @class */ (function () {
    function CdkTreeNodeToggle(_tree, _treeNode) {
        this._tree = _tree;
        this._treeNode = _treeNode;
        this._recursive = false;
    }
    Object.defineProperty(CdkTreeNodeToggle.prototype, "recursive", {
        /** Whether expand/collapse the node recursively. */
        get: /**
         * Whether expand/collapse the node recursively.
         * @return {?}
         */
        function () { return this._recursive; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @param {?} event
     * @return {?}
     */
    CdkTreeNodeToggle.prototype._toggle = 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.recursive
            ? this._tree.treeControl.toggleDescendants(this._treeNode.data)
            : this._tree.treeControl.toggle(this._treeNode.data);
        event.stopPropagation();
    };
    CdkTreeNodeToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{ selector: '[cdkTreeNodeToggle]' },] },
    ];
    /** @nocollapse */
    CdkTreeNodeToggle.ctorParameters = function () { return [
        { type: CdkTree },
        { type: CdkTreeNode }
    ]; };
    CdkTreeNodeToggle.propDecorators = {
        recursive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkTreeNodeToggleRecursive',] }],
        _toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['click', ['$event'],] }]
    };
    return CdkTreeNodeToggle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EXPORTED_DECLARATIONS = [
    CdkNestedTreeNode,
    CdkTreeNodeDef,
    CdkTreeNodePadding,
    CdkTreeNodeToggle,
    CdkTree,
    CdkTreeNode,
    CdkTreeNodeOutlet,
];
var CdkTreeModule = /** @class */ (function () {
    function CdkTreeModule() {
    }
    CdkTreeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
                    exports: EXPORTED_DECLARATIONS,
                    declarations: EXPORTED_DECLARATIONS,
                    providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], CdkTreeNodeDef]
                },] },
    ];
    return CdkTreeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=tree.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/badge.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/badge.es5.js ***!
  \**********************************************************/
/*! exports provided: MatBadgeModule, MatBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function() { return MatBadgeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadge", function() { return MatBadge; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@angular/material/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId = 0;
// Boilerplate for applying mixins to MatBadge.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatBadge.
/**
 * \@docs-private
 */
MatBadgeBase = /** @class */ (function () {
    function MatBadgeBase() {
    }
    return MatBadgeBase;
}());
/** @type {?} */
var _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatBadgeBase);
/**
 * Directive to display a text badge.
 */
var MatBadge = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatBadge, _super);
    function MatBadge(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
        var _this = _super.call(this) || this;
        _this._ngZone = _ngZone;
        _this._elementRef = _elementRef;
        _this._ariaDescriber = _ariaDescriber;
        _this._renderer = _renderer;
        _this._animationMode = _animationMode;
        /**
         * Whether the badge has any content.
         */
        _this._hasContent = false;
        _this._color = 'primary';
        _this._overlap = true;
        /**
         * Position the badge should reside.
         * Accepts any combination of 'above'|'below' and 'before'|'after'
         */
        _this.position = 'above after';
        /**
         * Size of the badge. Can be 'small', 'medium', or 'large'.
         */
        _this.size = 'medium';
        /**
         * Unique id for the badge
         */
        _this._id = nextId++;
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
            /** @type {?} */
            var nativeElement = _elementRef.nativeElement;
            if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
                throw Error('matBadge must be attached to an element node.');
            }
        }
        return _this;
    }
    Object.defineProperty(MatBadge.prototype, "color", {
        /** The color of the badge. Can be `primary`, `accent`, or `warn`. */
        get: /**
         * The color of the badge. Can be `primary`, `accent`, or `warn`.
         * @return {?}
         */
        function () { return this._color; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._setColor(value);
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatBadge.prototype, "overlap", {
        /** Whether the badge should overlap its contents or not */
        get: /**
         * Whether the badge should overlap its contents or not
         * @return {?}
         */
        function () { return this._overlap; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatBadge.prototype, "description", {
        /** Message used to describe the decorated element via aria-describedby */
        get: /**
         * Message used to describe the decorated element via aria-describedby
         * @return {?}
         */
        function () { return this._description; },
        set: /**
         * @param {?} newDescription
         * @return {?}
         */
        function (newDescription) {
            if (newDescription !== this._description) {
                /** @type {?} */
                var badgeElement = this._badgeElement;
                this._updateHostAriaDescription(newDescription, this._description);
                this._description = newDescription;
                if (badgeElement) {
                    newDescription ? badgeElement.setAttribute('aria-label', newDescription) :
                        badgeElement.removeAttribute('aria-label');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatBadge.prototype, "hidden", {
        /** Whether the badge is hidden. */
        get: /**
         * Whether the badge is hidden.
         * @return {?}
         */
        function () { return this._hidden; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the badge is above the host or not */
    /**
     * Whether the badge is above the host or not
     * @return {?}
     */
    MatBadge.prototype.isAbove = /**
     * Whether the badge is above the host or not
     * @return {?}
     */
    function () {
        return this.position.indexOf('below') === -1;
    };
    /** Whether the badge is after the host or not */
    /**
     * Whether the badge is after the host or not
     * @return {?}
     */
    MatBadge.prototype.isAfter = /**
     * Whether the badge is after the host or not
     * @return {?}
     */
    function () {
        return this.position.indexOf('before') === -1;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatBadge.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var contentChange = changes['content'];
        if (contentChange) {
            /** @type {?} */
            var value = contentChange.currentValue;
            this._hasContent = value != null && ("" + value).trim().length > 0;
            this._updateTextContent();
        }
    };
    /**
     * @return {?}
     */
    MatBadge.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var badgeElement = this._badgeElement;
        if (badgeElement) {
            if (this.description) {
                this._ariaDescriber.removeDescription(badgeElement, this.description);
            }
            // When creating a badge through the Renderer, Angular will keep it in an index.
            // We have to destroy it ourselves, otherwise it'll be retained in memory.
            if (this._renderer.destroyNode) {
                this._renderer.destroyNode(badgeElement);
            }
        }
    };
    /**
     * Gets the element into which the badge's content is being rendered.
     * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
     */
    /**
     * Gets the element into which the badge's content is being rendered.
     * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
     * @return {?}
     */
    MatBadge.prototype.getBadgeElement = /**
     * Gets the element into which the badge's content is being rendered.
     * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
     * @return {?}
     */
    function () {
        return this._badgeElement;
    };
    /** Injects a span element into the DOM with the content. */
    /**
     * Injects a span element into the DOM with the content.
     * @private
     * @return {?}
     */
    MatBadge.prototype._updateTextContent = /**
     * Injects a span element into the DOM with the content.
     * @private
     * @return {?}
     */
    function () {
        if (!this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
        }
        else {
            this._badgeElement.textContent = this.content;
        }
        return this._badgeElement;
    };
    /** Creates the badge element */
    /**
     * Creates the badge element
     * @private
     * @return {?}
     */
    MatBadge.prototype._createBadgeElement = /**
     * Creates the badge element
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var badgeElement = this._renderer.createElement('span');
        /** @type {?} */
        var activeClass = 'mat-badge-active';
        /** @type {?} */
        var contentClass = 'mat-badge-content';
        // Clear any existing badges which may have persisted from a server-side render.
        this._clearExistingBadges(contentClass);
        badgeElement.setAttribute('id', "mat-badge-content-" + this._id);
        badgeElement.classList.add(contentClass);
        badgeElement.textContent = this.content;
        if (this._animationMode === 'NoopAnimations') {
            badgeElement.classList.add('_mat-animation-noopable');
        }
        if (this.description) {
            badgeElement.setAttribute('aria-label', this.description);
        }
        this._elementRef.nativeElement.appendChild(badgeElement);
        // animate in after insertion
        if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                function () {
                    badgeElement.classList.add(activeClass);
                }));
            }));
        }
        else {
            badgeElement.classList.add(activeClass);
        }
        return badgeElement;
    };
    /** Sets the aria-label property on the element */
    /**
     * Sets the aria-label property on the element
     * @private
     * @param {?} newDescription
     * @param {?} oldDescription
     * @return {?}
     */
    MatBadge.prototype._updateHostAriaDescription = /**
     * Sets the aria-label property on the element
     * @private
     * @param {?} newDescription
     * @param {?} oldDescription
     * @return {?}
     */
    function (newDescription, oldDescription) {
        // ensure content available before setting label
        /** @type {?} */
        var content = this._updateTextContent();
        if (oldDescription) {
            this._ariaDescriber.removeDescription(content, oldDescription);
        }
        if (newDescription) {
            this._ariaDescriber.describe(content, newDescription);
        }
    };
    /** Adds css theme class given the color to the component host */
    /**
     * Adds css theme class given the color to the component host
     * @private
     * @param {?} colorPalette
     * @return {?}
     */
    MatBadge.prototype._setColor = /**
     * Adds css theme class given the color to the component host
     * @private
     * @param {?} colorPalette
     * @return {?}
     */
    function (colorPalette) {
        if (colorPalette !== this._color) {
            if (this._color) {
                this._elementRef.nativeElement.classList.remove("mat-badge-" + this._color);
            }
            if (colorPalette) {
                this._elementRef.nativeElement.classList.add("mat-badge-" + colorPalette);
            }
        }
    };
    /** Clears any existing badges that might be left over from server-side rendering. */
    /**
     * Clears any existing badges that might be left over from server-side rendering.
     * @private
     * @param {?} cssClass
     * @return {?}
     */
    MatBadge.prototype._clearExistingBadges = /**
     * Clears any existing badges that might be left over from server-side rendering.
     * @private
     * @param {?} cssClass
     * @return {?}
     */
    function (cssClass) {
        /** @type {?} */
        var element = this._elementRef.nativeElement;
        /** @type {?} */
        var childCount = element.children.length;
        // Use a reverse while, because we'll be removing elements from the list as we're iterating.
        while (childCount--) {
            /** @type {?} */
            var currentChild = element.children[childCount];
            if (currentChild.classList.contains(cssClass)) {
                element.removeChild(currentChild);
            }
        }
    };
    MatBadge.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[matBadge]',
                    inputs: ['disabled: matBadgeDisabled'],
                    host: {
                        'class': 'mat-badge',
                        '[class.mat-badge-overlap]': 'overlap',
                        '[class.mat-badge-above]': 'isAbove()',
                        '[class.mat-badge-below]': '!isAbove()',
                        '[class.mat-badge-before]': '!isAfter()',
                        '[class.mat-badge-after]': 'isAfter()',
                        '[class.mat-badge-small]': 'size === "small"',
                        '[class.mat-badge-medium]': 'size === "medium"',
                        '[class.mat-badge-large]': 'size === "large"',
                        '[class.mat-badge-hidden]': 'hidden || !_hasContent',
                        '[class.mat-badge-disabled]': 'disabled',
                    },
                },] },
    ];
    /** @nocollapse */
    MatBadge.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"],] }] }
    ]; };
    MatBadge.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matBadgeColor',] }],
        overlap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matBadgeOverlap',] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matBadgePosition',] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matBadge',] }],
        description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matBadgeDescription',] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matBadgeSize',] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matBadgeHidden',] }]
    };
    return MatBadge;
}(_MatBadgeMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatBadgeModule = /** @class */ (function () {
    function MatBadgeModule() {
    }
    MatBadgeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]
                    ],
                    exports: [MatBadge],
                    declarations: [MatBadge],
                },] },
    ];
    return MatBadgeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=badge.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/bottom-sheet.es5.js ***!
  \*****************************************************************/
/*! exports provided: MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig, MatBottomSheetContainer, matBottomSheetAnimations, MatBottomSheetRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function() { return MatBottomSheetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function() { return MAT_BOTTOM_SHEET_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function() { return MatBottomSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function() { return MAT_BOTTOM_SHEET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function() { return MatBottomSheetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function() { return MatBottomSheetContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function() { return matBottomSheetAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function() { return MatBottomSheetRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/@angular/material/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to access the data that was passed in to a bottom sheet.
 * @type {?}
 */
var MAT_BOTTOM_SHEET_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatBottomSheetData');
/**
 * Configuration used when opening a bottom sheet.
 * @template D
 */
var  /**
 * Configuration used when opening a bottom sheet.
 * @template D
 */
MatBottomSheetConfig = /** @class */ (function () {
    function MatBottomSheetConfig() {
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * Whether the bottom sheet has a backdrop.
         */
        this.hasBackdrop = true;
        /**
         * Whether the user can use escape or clicking outside to close the bottom sheet.
         */
        this.disableClose = false;
        /**
         * Aria label to assign to the bottom sheet element.
         */
        this.ariaLabel = null;
        /**
         * Whether the bottom sheet should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
        // Note that this is disabled by default, because while the a11y recommendations are to focus
        // the first focusable element, doing so prevents screen readers from reading out the
        // rest of the bottom sheet content.
        /**
         * Whether the bottom sheet should focus the first focusable element on open.
         */
        this.autoFocus = false;
        /**
         * Whether the bottom sheet should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
    }
    return MatBottomSheetConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the Material bottom sheet.
 * @type {?}
 */
var matBottomSheetAnimations = {
    /**
     * Animation that shows and hides a bottom sheet.
     */
    bottomSheetState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void, visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].COMPLEX + " " + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].ACCELERATION_CURVE)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].EXITING + " " + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].DECELERATION_CURVE)),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(crisbeto): consolidate some logic between this, MatDialog and MatSnackBar
/**
 * Internal component that wraps user-provided bottom sheet content.
 * \@docs-private
 */
var MatBottomSheetContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(MatBottomSheetContainer, _super);
    function MatBottomSheetContainer(_elementRef, _changeDetectorRef, _focusTrapFactory, breakpointObserver, document, bottomSheetConfig) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._focusTrapFactory = _focusTrapFactory;
        _this.bottomSheetConfig = bottomSheetConfig;
        /**
         * The state of the bottom sheet animations.
         */
        _this._animationState = 'void';
        /**
         * Emits whenever the state of the animation changes.
         */
        _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Element that was focused before the bottom sheet was opened.
         */
        _this._elementFocusedBeforeOpened = null;
        _this._document = document;
        _this._breakpointSubscription = breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].XLarge])
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Medium));
            _this._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Large));
            _this._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].XLarge));
        }));
        return _this;
    }
    /** Attach a component portal as content to this bottom sheet container. */
    /**
     * Attach a component portal as content to this bottom sheet container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    MatBottomSheetContainer.prototype.attachComponentPortal = /**
     * Attach a component portal as content to this bottom sheet container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachComponentPortal(portal);
    };
    /** Attach a template portal as content to this bottom sheet container. */
    /**
     * Attach a template portal as content to this bottom sheet container.
     * @template C
     * @param {?} portal
     * @return {?}
     */
    MatBottomSheetContainer.prototype.attachTemplatePortal = /**
     * Attach a template portal as content to this bottom sheet container.
     * @template C
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachTemplatePortal(portal);
    };
    /** Begin animation of bottom sheet entrance into view. */
    /**
     * Begin animation of bottom sheet entrance into view.
     * @return {?}
     */
    MatBottomSheetContainer.prototype.enter = /**
     * Begin animation of bottom sheet entrance into view.
     * @return {?}
     */
    function () {
        if (!this._destroyed) {
            this._animationState = 'visible';
            this._changeDetectorRef.detectChanges();
        }
    };
    /** Begin animation of the bottom sheet exiting from view. */
    /**
     * Begin animation of the bottom sheet exiting from view.
     * @return {?}
     */
    MatBottomSheetContainer.prototype.exit = /**
     * Begin animation of the bottom sheet exiting from view.
     * @return {?}
     */
    function () {
        if (!this._destroyed) {
            this._animationState = 'hidden';
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    MatBottomSheetContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._breakpointSubscription.unsubscribe();
        this._destroyed = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatBottomSheetContainer.prototype._onAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'hidden') {
            this._restoreFocus();
        }
        else if (event.toState === 'visible') {
            this._trapFocus();
        }
        this._animationStateChanged.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatBottomSheetContainer.prototype._onAnimationStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._animationStateChanged.emit(event);
    };
    /**
     * @private
     * @param {?} cssClass
     * @param {?} add
     * @return {?}
     */
    MatBottomSheetContainer.prototype._toggleClass = /**
     * @private
     * @param {?} cssClass
     * @param {?} add
     * @return {?}
     */
    function (cssClass, add) {
        /** @type {?} */
        var classList = this._elementRef.nativeElement.classList;
        add ? classList.add(cssClass) : classList.remove(cssClass);
    };
    /**
     * @private
     * @return {?}
     */
    MatBottomSheetContainer.prototype._validatePortalAttached = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach bottom sheet content after content is already attached');
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatBottomSheetContainer.prototype._setPanelClass = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this._elementRef.nativeElement;
        /** @type {?} */
        var panelClass = this.bottomSheetConfig.panelClass;
        if (Array.isArray(panelClass)) {
            // Note that we can't use a spread here, because IE doesn't support multiple arguments.
            panelClass.forEach((/**
             * @param {?} cssClass
             * @return {?}
             */
            function (cssClass) { return element.classList.add(cssClass); }));
        }
        else if (panelClass) {
            element.classList.add(panelClass);
        }
    };
    /** Moves the focus inside the focus trap. */
    /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    MatBottomSheetContainer.prototype._trapFocus = /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    function () {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        if (this.bottomSheetConfig.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
    };
    /** Restores focus to the element that was focused before the bottom sheet was opened. */
    /**
     * Restores focus to the element that was focused before the bottom sheet was opened.
     * @private
     * @return {?}
     */
    MatBottomSheetContainer.prototype._restoreFocus = /**
     * Restores focus to the element that was focused before the bottom sheet was opened.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toFocus = this._elementFocusedBeforeOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.bottomSheetConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    };
    /** Saves a reference to the element that was focused before the bottom sheet was opened. */
    /**
     * Saves a reference to the element that was focused before the bottom sheet was opened.
     * @private
     * @return {?}
     */
    MatBottomSheetContainer.prototype._savePreviouslyFocusedElement = /**
     * Saves a reference to the element that was focused before the bottom sheet was opened.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._elementFocusedBeforeOpened = (/** @type {?} */ (this._document.activeElement));
        // The `focus` method isn't available during server-side rendering.
        if (this._elementRef.nativeElement.focus) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this._elementRef.nativeElement.focus(); }));
        }
    };
    MatBottomSheetContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-bottom-sheet-container',
                    template: "<ng-template cdkPortalOutlet></ng-template>",
                    styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}@media (-ms-high-contrast:active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium,.mat-bottom-sheet-container-xlarge{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    animations: [matBottomSheetAnimations.bottomSheetState],
                    host: {
                        'class': 'mat-bottom-sheet-container',
                        'tabindex': '-1',
                        'role': 'dialog',
                        'aria-modal': 'true',
                        '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
                        '[@state]': '_animationState',
                        '(@state.start)': '_onAnimationStart($event)',
                        '(@state.done)': '_onAnimationDone($event)'
                    },
                },] },
    ];
    /** @nocollapse */
    MatBottomSheetContainer.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: MatBottomSheetConfig }
    ]; };
    MatBottomSheetContainer.propDecorators = {
        _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"], { static: true },] }]
    };
    return MatBottomSheetContainer;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["BasePortalOutlet"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatBottomSheetModule = /** @class */ (function () {
    function MatBottomSheetModule() {
    }
    MatBottomSheetModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    ],
                    exports: [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                    declarations: [MatBottomSheetContainer],
                    entryComponents: [MatBottomSheetContainer],
                },] },
    ];
    return MatBottomSheetModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reference to a bottom sheet dispatched from the bottom sheet service.
 * @template T, R
 */
var  /**
 * Reference to a bottom sheet dispatched from the bottom sheet service.
 * @template T, R
 */
MatBottomSheetRef = /** @class */ (function () {
    function MatBottomSheetRef(containerInstance, _overlayRef, 
    // @breaking-change 8.0.0 `_location` parameter to be removed.
    _location) {
        var _this = this;
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the bottom sheet has been dismissed.
         */
        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Subject for notifying the user that the bottom sheet has opened and appeared.
         */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.containerInstance = containerInstance;
        this.disableClose = containerInstance.bottomSheetConfig.disableClose;
        // Emit when opening animation completes
        containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.phaseName === 'done' && event.toState === 'visible'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._afterOpened.next();
            _this._afterOpened.complete();
        }));
        // Dispose overlay when closing animation is complete
        containerInstance._animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.phaseName === 'done' && event.toState === 'hidden'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _overlayRef.dispose();
        }));
        _overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._afterDismissed.next(_this._result);
            _this._afterDismissed.complete();
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(_overlayRef.backdropClick(), _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"]; })))).subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this.disableClose) {
                _this.dismiss();
            }
        }));
    }
    /**
     * Dismisses the bottom sheet.
     * @param result Data to be passed back to the bottom sheet opener.
     */
    /**
     * Dismisses the bottom sheet.
     * @param {?=} result Data to be passed back to the bottom sheet opener.
     * @return {?}
     */
    MatBottomSheetRef.prototype.dismiss = /**
     * Dismisses the bottom sheet.
     * @param {?=} result Data to be passed back to the bottom sheet opener.
     * @return {?}
     */
    function (result) {
        var _this = this;
        if (!this._afterDismissed.closed) {
            // Transition the backdrop in parallel to the bottom sheet.
            this.containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.phaseName === 'start'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe((/**
             * @return {?}
             */
            function () { return _this._overlayRef.detachBackdrop(); }));
            this._result = result;
            this.containerInstance.exit();
        }
    };
    /** Gets an observable that is notified when the bottom sheet is finished closing. */
    /**
     * Gets an observable that is notified when the bottom sheet is finished closing.
     * @return {?}
     */
    MatBottomSheetRef.prototype.afterDismissed = /**
     * Gets an observable that is notified when the bottom sheet is finished closing.
     * @return {?}
     */
    function () {
        return this._afterDismissed.asObservable();
    };
    /** Gets an observable that is notified when the bottom sheet has opened and appeared. */
    /**
     * Gets an observable that is notified when the bottom sheet has opened and appeared.
     * @return {?}
     */
    MatBottomSheetRef.prototype.afterOpened = /**
     * Gets an observable that is notified when the bottom sheet has opened and appeared.
     * @return {?}
     */
    function () {
        return this._afterOpened.asObservable();
    };
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    MatBottomSheetRef.prototype.backdropClick = /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._overlayRef.backdropClick();
    };
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    MatBottomSheetRef.prototype.keydownEvents = /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    function () {
        return this._overlayRef.keydownEvents();
    };
    return MatBottomSheetRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to specify default bottom sheet options.
 * @type {?}
 */
var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-bottom-sheet-default-options');
/**
 * Service to trigger Material Design bottom sheets.
 */
var MatBottomSheet = /** @class */ (function () {
    function MatBottomSheet(_overlay, _injector, _parentBottomSheet, _location, _defaultOptions) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._parentBottomSheet = _parentBottomSheet;
        this._location = _location;
        this._defaultOptions = _defaultOptions;
        this._bottomSheetRefAtThisLevel = null;
    }
    Object.defineProperty(MatBottomSheet.prototype, "_openedBottomSheetRef", {
        /** Reference to the currently opened bottom sheet. */
        get: /**
         * Reference to the currently opened bottom sheet.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parent = this._parentBottomSheet;
            return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._parentBottomSheet) {
                this._parentBottomSheet._openedBottomSheetRef = value;
            }
            else {
                this._bottomSheetRefAtThisLevel = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template T, D, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    MatBottomSheet.prototype.open = /**
     * @template T, D, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    function (componentOrTemplateRef, config) {
        var _this = this;
        /** @type {?} */
        var _config = _applyConfigDefaults(this._defaultOptions || new MatBottomSheetConfig(), config);
        /** @type {?} */
        var overlayRef = this._createOverlay(_config);
        /** @type {?} */
        var container = this._attachContainer(overlayRef, _config);
        /** @type {?} */
        var ref = new MatBottomSheetRef(container, overlayRef, this._location);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            container.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](componentOrTemplateRef, (/** @type {?} */ (null)), (/** @type {?} */ ({
                $implicit: _config.data,
                bottomSheetRef: ref
            }))));
        }
        else {
            /** @type {?} */
            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](componentOrTemplateRef, undefined, this._createInjector(_config, ref));
            /** @type {?} */
            var contentRef = container.attachComponentPortal(portal);
            ref.instance = contentRef.instance;
        }
        // When the bottom sheet is dismissed, clear the reference to it.
        ref.afterDismissed().subscribe((/**
         * @return {?}
         */
        function () {
            // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
            if (_this._openedBottomSheetRef == ref) {
                _this._openedBottomSheetRef = null;
            }
        }));
        if (this._openedBottomSheetRef) {
            // If a bottom sheet is already in view, dismiss it and enter the
            // new bottom sheet after exit animation is complete.
            this._openedBottomSheetRef.afterDismissed().subscribe((/**
             * @return {?}
             */
            function () { return ref.containerInstance.enter(); }));
            this._openedBottomSheetRef.dismiss();
        }
        else {
            // If no bottom sheet is in view, enter the new bottom sheet.
            ref.containerInstance.enter();
        }
        this._openedBottomSheetRef = ref;
        return ref;
    };
    /**
     * Dismisses the currently-visible bottom sheet.
     */
    /**
     * Dismisses the currently-visible bottom sheet.
     * @return {?}
     */
    MatBottomSheet.prototype.dismiss = /**
     * Dismisses the currently-visible bottom sheet.
     * @return {?}
     */
    function () {
        if (this._openedBottomSheetRef) {
            this._openedBottomSheetRef.dismiss();
        }
    };
    /**
     * @return {?}
     */
    MatBottomSheet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._bottomSheetRefAtThisLevel) {
            this._bottomSheetRefAtThisLevel.dismiss();
        }
    };
    /**
     * Attaches the bottom sheet container component to the overlay.
     */
    /**
     * Attaches the bottom sheet container component to the overlay.
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    MatBottomSheet.prototype._attachContainer = /**
     * Attaches the bottom sheet container component to the overlay.
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    function (overlayRef, config) {
        /** @type {?} */
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalInjector"](userInjector || this._injector, new WeakMap([
            [MatBottomSheetConfig, config]
        ]));
        /** @type {?} */
        var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](MatBottomSheetContainer, config.viewContainerRef, injector);
        /** @type {?} */
        var containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    };
    /**
     * Creates a new overlay and places it in the correct location.
     * @param config The user-specified bottom sheet config.
     */
    /**
     * Creates a new overlay and places it in the correct location.
     * @private
     * @param {?} config The user-specified bottom sheet config.
     * @return {?}
     */
    MatBottomSheet.prototype._createOverlay = /**
     * Creates a new overlay and places it in the correct location.
     * @private
     * @param {?} config The user-specified bottom sheet config.
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayConfig"]({
            direction: config.direction,
            hasBackdrop: config.hasBackdrop,
            disposeOnNavigation: config.closeOnNavigation,
            maxWidth: '100%',
            scrollStrategy: this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                .global()
                .centerHorizontally()
                .bottom('0')
        });
        if (config.backdropClass) {
            overlayConfig.backdropClass = config.backdropClass;
        }
        return this._overlay.create(overlayConfig);
    };
    /**
     * Creates an injector to be used inside of a bottom sheet component.
     * @param config Config that was used to create the bottom sheet.
     * @param bottomSheetRef Reference to the bottom sheet.
     */
    /**
     * Creates an injector to be used inside of a bottom sheet component.
     * @private
     * @template T
     * @param {?} config Config that was used to create the bottom sheet.
     * @param {?} bottomSheetRef Reference to the bottom sheet.
     * @return {?}
     */
    MatBottomSheet.prototype._createInjector = /**
     * Creates an injector to be used inside of a bottom sheet component.
     * @private
     * @template T
     * @param {?} config Config that was used to create the bottom sheet.
     * @param {?} bottomSheetRef Reference to the bottom sheet.
     * @return {?}
     */
    function (config, bottomSheetRef) {
        /** @type {?} */
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        var injectionTokens = new WeakMap([
            [MatBottomSheetRef, bottomSheetRef],
            [MAT_BOTTOM_SHEET_DATA, config.data]
        ]);
        if (config.direction &&
            (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], null))) {
            injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], {
                value: config.direction,
                change: Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])()
            });
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalInjector"](userInjector || this._injector, injectionTokens);
    };
    MatBottomSheet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: MatBottomSheetModule },] },
    ];
    /** @nocollapse */
    MatBottomSheet.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: MatBottomSheet, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: MatBottomSheetConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,] }] }
    ]; };
    /** @nocollapse */ MatBottomSheet.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatBottomSheet_Factory() { return new MatBottomSheet(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatBottomSheet, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8)); }, token: MatBottomSheet, providedIn: MatBottomSheetModule });
    return MatBottomSheet;
}());
/**
 * Applies default options to the bottom sheet config.
 * @param {?} defaults Object containing the default values to which to fall back.
 * @param {?=} config The configuration to which the defaults will be applied.
 * @return {?} The new configuration object with defaults applied.
 */
function _applyConfigDefaults(defaults, config) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, defaults, config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bottom-sheet.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/material.es5.js":
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/material.es5.js ***!
  \*************************************************************/
/*! exports provided: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatAutocompleteSelectedEvent, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteModule, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, getMatAutocompleteMissingPanelError, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocompleteTrigger, MatAutocompleteOrigin, MatBadgeModule, MatBadge, MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig, MatBottomSheetContainer, matBottomSheetAnimations, MatBottomSheetRef, MatButtonModule, MatButton, MatAnchor, MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleGroupMultiple, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, MatCard, MatCardHeader, MatCardTitleGroup, MatCardModule, MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, TransitionCheckState, MatCheckboxChange, MatCheckbox, MAT_CHECKBOX_CLICK_ACTION, _MatCheckboxRequiredValidatorModule, MatCheckboxModule, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckboxRequiredValidator, MatChipsModule, MatChipListChange, MatChipList, MatChipSelectionChange, MatChipAvatar, MatChipTrailingIcon, MatChip, MatChipRemove, MatChipInput, MAT_CHIPS_DEFAULT_OPTIONS, ɵa1, VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, MatDatepickerModule, MatCalendarHeader, MatCalendar, MatCalendarCell, MatCalendarBody, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatDatepickerContent, MatDatepicker, matDatepickerAnimations, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, MatDatepickerInputEvent, MatDatepickerInput, MatDatepickerIntl, MatDatepickerToggleIcon, MatDatepickerToggle, MatMonthView, MatYearView, yearsPerPage, yearsPerRow, MatMultiYearView, MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog, throwMatDialogContentAlreadyAttachedError, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogConfig, MatDialogRef, matDialogAnimations, MatDivider, MatDividerModule, MatExpansionModule, MatAccordion, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelContent, EXPANSION_PANEL_ANIMATION_TIMING, matExpansionAnimations, MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations, ɵa11, MatGridListModule, MatGridList, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatIconModule, MAT_ICON_LOCATION_FACTORY, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER, MatTextareaAutosize, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR, MatListModule, MatNavList, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatListItem, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatSelectionListChange, MatListOption, MatSelectionList, ɵa24, ɵb24, ɵc24, MatMenu, MAT_MENU_DEFAULT_OPTIONS, _MatMenu, _MatMenuBase, MatMenuItem, MatMenuTrigger, MAT_MENU_SCROLL_STRATEGY, MAT_MENU_PANEL, _MatMenuDirectivesModule, MatMenuModule, matMenuAnimations, fadeInItems, transformMenu, MatMenuContent, MatPaginatorModule, PageEvent, MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER, MatProgressBarModule, MAT_PROGRESS_BAR_LOCATION_FACTORY, MAT_PROGRESS_BAR_LOCATION, MatProgressBar, MatProgressSpinnerModule, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MatProgressSpinner, MatSpinner, MatRadioModule, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioChange, MatRadioGroup, MatRadioButton, MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent, MatSidenavModule, throwMatDuplicatedDrawerError, MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY, MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawerContent, MatDrawer, MatDrawerContainer, MatSidenavContent, MatSidenav, MatSidenavContainer, matDrawerAnimations, MatSlideToggleModule, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggleChange, MatSlideToggle, MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MatSliderModule, MAT_SLIDER_VALUE_ACCESSOR, MatSliderChange, MatSlider, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarContainer, MAT_SNACK_BAR_DATA, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar, matSnackBarAnimations, MatSortModule, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSort, matSortAnimations, MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, matStepperAnimations, MatStepperIcon, MatTableModule, MatCellDef, MatHeaderCellDef, MatFooterCellDef, MatColumnDef, MatHeaderCell, MatFooterCell, MatCell, MatTable, MatHeaderRowDef, MatFooterRowDef, MatRowDef, MatHeaderRow, MatFooterRow, MatRow, MatTableDataSource, MatTextColumn, ɵa22, MatInkBar, _MAT_INK_BAR_POSITIONER, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabLabelWrapper, MatTab, MatTabLabel, MatTabNav, MatTabLink, MatTabContent, MatTabsModule, MatTabChangeEvent, MAT_TABS_CONFIG, MatTabGroup, matTabsAnimations, MatToolbarModule, throwToolbarMixedModesError, MatToolbarRow, MatToolbar, MatTooltipModule, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltip, TooltipComponent, matTooltipAnimations, MatTreeNode, MatTreeNodeDef, MatNestedTreeNode, MatTreeNodePadding, MatTree, MatTreeModule, MatTreeNodeToggle, MatTreeNodeOutlet, MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteSelectedEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["getMatAutocompleteMissingPanelError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AUTOCOMPLETE_OPTION_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AUTOCOMPLETE_PANEL_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteOrigin"]; });

/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function() { return _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBadge", function() { return _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadge"]; });

/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["matBottomSheetAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"]; });

/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButton", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAnchor", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]; });

/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroupMultiple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"]; });

/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardContent", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardTitle", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardActions", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardFooter", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSmImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardMdImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardLgImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardXlImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCard", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardHeader", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitleGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardModule", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]; });

/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionCheckState", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["TransitionCheckState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckbox", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CLICK_ACTION", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MAT_CHECKBOX_CLICK_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["_MatCheckboxRequiredValidatorModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MAT_CHECKBOX_REQUIRED_VALIDATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxRequiredValidator"]; });

/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipListChange", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipListChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipList", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipSelectionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipAvatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipTrailingIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChip", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipRemove", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipInput", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MAT_CHIPS_DEFAULT_OPTIONS"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa1", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ɵa1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["AnimationCurves"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationDurations", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["AnimationDurations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MATERIAL_SANITY_CHECKS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinColor", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisableRipple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinTabIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinErrorState", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinErrorState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinInitialized"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeDateModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_NATIVE_DATE_FORMATS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ShowOnDirtyErrorStateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_HAMMER_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GestureConfig", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["GestureConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLines", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["setLines"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatLine", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatLineSetter", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineSetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatLineModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["_countGroupLabelsBeforeOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["_getOptionScrollPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionSelectionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_OPTION_PARENT_COMPONENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOption", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptgroup", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptgroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_LABEL_GLOBAL_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_RIPPLE_GLOBAL_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRipple", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RippleState", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RippleRef", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["defaultRippleAnimationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RippleRenderer", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JAN", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["JAN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FEB", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["FEB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAR", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APR", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["APR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAY", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JUN", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["JUN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JUL", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["JUL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUG", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["AUG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEP", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["SEP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OCT", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["OCT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOV", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NOV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEC", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DEC"]; });

/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendarHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCalendar", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendarCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendarBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepicker", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["matDatepickerAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_VALIDATORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInputEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggleIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMonthView", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatMonthView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatYearView", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatYearView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yearsPerPage", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["yearsPerPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yearsPerRow", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["yearsPerRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatMultiYearView"]; });

/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["throwMatDialogContentAlreadyAttachedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["matDialogAnimations"]; });

/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDivider", function() { return _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDividerModule", function() { return _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]; });

/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_ACCORDION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelActionRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["EXPANSION_PANEL_ANIMATION_TIMING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["matExpansionAnimations"]; });

/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatError", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["getMatFormFieldPlaceholderConflictError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["getMatFormFieldDuplicatedHintError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["getMatFormFieldMissingControlError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHint", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPlaceholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["matFormFieldAnimations"]; });

/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa11", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["ɵa11"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridList", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridTile", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridTileText", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTileText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridAvatarCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTileHeaderCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTileFooterCssMatStyler"]; });

/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MAT_ICON_LOCATION_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MAT_ICON_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconNameNotFoundError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconNoHttpProviderError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconFailedToSanitizeUrlError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconFailedToSanitizeLiteralError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["ICON_REGISTRY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["ICON_REGISTRY_PROVIDER"]; });

/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatTextareaAutosize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatInput", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["getMatInputUnsupportedTypeError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MAT_INPUT_VALUE_ACCESSOR"]; });

/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListModule", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatNavList", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatNavList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatList", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListAvatarCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListIconCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListSubheaderCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListItem", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECTION_LIST_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatSelectionListChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListOption", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectionList", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatSelectionList"]; });

/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa24", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵa24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵb24", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵb24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc24", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵc24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenu", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatMenu", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenuBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuItem", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenuDirectivesModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["matMenuAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInItems", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["fadeInItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformMenu", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["transformMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuContent", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuContent"]; });

/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["PageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MAT_PAGINATOR_INTL_PROVIDER"]; });

/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MAT_PROGRESS_BAR_LOCATION_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MAT_PROGRESS_BAR_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressBar", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBar"]; });

/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSpinner", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatSpinner"]; });

/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRadioModule", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRadioChange", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRadioButton", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioButton"]; });

/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_MAX_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_PADDING_X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_INDENT_PADDING_X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_ITEM_HEIGHT_EM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_MULTIPLE_PANEL_PADDING_X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_VIEWPORT_PADDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["matSelectAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformPanel", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["transformPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInContent", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["fadeInContent"]; });

/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenavModule", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwMatDuplicatedDrawerError", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["throwMatDuplicatedDrawerError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MAT_DRAWER_DEFAULT_AUTOSIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDrawerContent", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawerContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDrawer", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDrawerContainer", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawerContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenavContent", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenav", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenavContainer", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matDrawerAnimations", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["matDrawerAnimations"]; });

/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MAT_SLIDE_TOGGLE_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"]; });

/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSliderModule", function() { return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function() { return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MAT_SLIDER_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSliderChange", function() { return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlider", function() { return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSlider"]; });

/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarModule", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBar", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DATA", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarConfig", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarRef", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBar", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["SimpleSnackBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matSnackBarAnimations", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["matSnackBarAnimations"]; });

/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortHeader", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortHeaderIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MAT_SORT_HEADER_INTL_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSort", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matSortAnimations", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["matSortAnimations"]; });

/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepLabel", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStep", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepper", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatHorizontalStepper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatVerticalStepper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperNext", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperNext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperPrevious"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepHeader", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MAT_STEPPER_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MAT_STEPPER_INTL_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["matStepperAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperIcon"]; });

/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatCellDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderCellDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterCellDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatColumnDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderRowDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterRowDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatRowDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTextColumn"]; });

/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa22", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["ɵa22"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatInkBar", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatInkBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MAT_INK_BAR_POSITIONER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabBody", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabBodyPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabHeader", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabLabelWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTab", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabLabel", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabNav", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabLink", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabContent", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabsModule", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabChangeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MAT_TABS_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabGroup", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["matTabsAnimations"]; });

/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function() { return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function() { return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["throwToolbarMixedModesError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function() { return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatToolbar", function() { return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbar"]; });

/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["getMatTooltipInvalidPositionError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["SCROLL_THROTTLE_MS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["TOOLTIP_PANEL_CLASS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["TooltipComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["matTooltipAnimations"]; });

/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNode", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodeDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatNestedTreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodePadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTree", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeModule", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodeToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodeOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeFlattener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeFlatDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNestedDataSource"]; });

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




































/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//# sourceMappingURL=material.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/tree.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/tree.es5.js ***!
  \*********************************************************/
/*! exports provided: MatTreeNode, MatTreeNodeDef, MatNestedTreeNode, MatTreeNodePadding, MatTree, MatTreeModule, MatTreeNodeToggle, MatTreeNodeOutlet, MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNode", function() { return MatTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function() { return MatTreeNodeDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function() { return MatNestedTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function() { return MatTreeNodePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTree", function() { return MatTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeModule", function() { return MatTreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function() { return MatTreeNodeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function() { return MatTreeNodeOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function() { return MatTreeFlattener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function() { return MatTreeFlatDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function() { return MatTreeNestedDataSource; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@angular/material/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
var MatTreeNodeOutlet = /** @class */ (function () {
    function MatTreeNodeOutlet(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
    MatTreeNodeOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[matTreeNodeOutlet]'
                },] },
    ];
    /** @nocollapse */
    MatTreeNodeOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    return MatTreeNodeOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _MatTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"]));
/** @type {?} */
var _MatNestedTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"]));
/**
 * Wrapper for the CdkTree node with Material design styles.
 * @template T
 */
var MatTreeNode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatTreeNode, _super);
    function MatTreeNode(_elementRef, _tree, tabIndex) {
        var _this = _super.call(this, _elementRef, _tree) || this;
        _this._elementRef = _elementRef;
        _this._tree = _tree;
        _this.role = 'treeitem';
        _this.tabIndex = Number(tabIndex) || 0;
        return _this;
    }
    MatTreeNode.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'mat-tree-node',
                    exportAs: 'matTreeNode',
                    inputs: ['disabled', 'tabIndex'],
                    host: {
                        '[attr.aria-expanded]': 'isExpanded',
                        '[attr.aria-level]': 'role === "treeitem" ? level : null',
                        '[attr.role]': 'role',
                        'class': 'mat-tree-node'
                    },
                    providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"], useExisting: MatTreeNode }]
                },] },
    ];
    /** @nocollapse */
    MatTreeNode.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] }
    ]; };
    MatTreeNode.propDecorators = {
        role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return MatTreeNode;
}(_MatTreeNodeMixinBase));
/**
 * Wrapper for the CdkTree node definition with Material design styles.
 * @template T
 */
var MatTreeNodeDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatTreeNodeDef, _super);
    function MatTreeNodeDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatTreeNodeDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[matTreeNodeDef]',
                    inputs: [
                        'when: matTreeNodeDefWhen'
                    ],
                    providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"], useExisting: MatTreeNodeDef }]
                },] },
    ];
    MatTreeNodeDef.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNode',] }]
    };
    return MatTreeNodeDef;
}(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"]));
/**
 * Wrapper for the CdkTree nested node with Material design styles.
 * @template T
 */
var MatNestedTreeNode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatNestedTreeNode, _super);
    function MatNestedTreeNode(_elementRef, _tree, _differs, tabIndex) {
        var _this = _super.call(this, _elementRef, _tree, _differs) || this;
        _this._elementRef = _elementRef;
        _this._tree = _tree;
        _this._differs = _differs;
        _this.tabIndex = Number(tabIndex) || 0;
        return _this;
    }
    // This is a workaround for https://github.com/angular/angular/issues/23091
    // In aot mode, the lifecycle hooks from parent class are not called.
    // TODO(tinayuangao): Remove when the angular issue #23091 is fixed
    // This is a workaround for https://github.com/angular/angular/issues/23091
    // In aot mode, the lifecycle hooks from parent class are not called.
    // TODO(tinayuangao): Remove when the angular issue #23091 is fixed
    /**
     * @return {?}
     */
    MatNestedTreeNode.prototype.ngAfterContentInit = 
    // This is a workaround for https://github.com/angular/angular/issues/23091
    // In aot mode, the lifecycle hooks from parent class are not called.
    // TODO(tinayuangao): Remove when the angular issue #23091 is fixed
    /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
     * @return {?}
     */
    MatNestedTreeNode.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    MatNestedTreeNode.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'mat-nested-tree-node',
                    exportAs: 'matNestedTreeNode',
                    host: {
                        '[attr.aria-expanded]': 'isExpanded',
                        '[attr.role]': 'role',
                        'class': 'mat-nested-tree-node',
                    },
                    inputs: ['disabled', 'tabIndex'],
                    providers: [
                        { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"], useExisting: MatNestedTreeNode },
                        { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"], useExisting: MatNestedTreeNode },
                        { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"], useExisting: MatNestedTreeNode }
                    ]
                },] },
    ];
    /** @nocollapse */
    MatNestedTreeNode.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] }
    ]; };
    MatNestedTreeNode.propDecorators = {
        node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matNestedTreeNode',] }],
        nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatTreeNodeOutlet, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
    return MatNestedTreeNode;
}(_MatNestedTreeNodeMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTree padding with Material design styles.
 * @template T
 */
var MatTreeNodePadding = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatTreeNodePadding, _super);
    function MatTreeNodePadding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatTreeNodePadding.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[matTreeNodePadding]',
                    providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"], useExisting: MatTreeNodePadding }]
                },] },
    ];
    MatTreeNodePadding.propDecorators = {
        level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNodePadding',] }],
        indent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNodePaddingIndent',] }]
    };
    return MatTreeNodePadding;
}(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 * @template T
 */
var MatTree = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatTree, _super);
    function MatTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatTree.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-tree',
                    exportAs: 'matTree',
                    template: "<ng-container matTreeNodeOutlet></ng-container>",
                    host: {
                        'class': 'mat-tree',
                        'role': 'tree',
                    },
                    styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;overflow:hidden;word-wrap:break-word}.mat-nested-tree-ndoe{border-bottom-width:0}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    // See note on CdkTree for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                    providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"], useExisting: MatTree }]
                },] },
    ];
    MatTree.propDecorators = {
        _nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MatTreeNodeOutlet, { static: true },] }]
    };
    return MatTree;
}(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTree's toggle with Material design styles.
 * @template T
 */
var MatTreeNodeToggle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatTreeNodeToggle, _super);
    function MatTreeNodeToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.recursive = false;
        return _this;
    }
    MatTreeNodeToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[matTreeNodeToggle]',
                    providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"], useExisting: MatTreeNodeToggle }]
                },] },
    ];
    MatTreeNodeToggle.propDecorators = {
        recursive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNodeToggleRecursive',] }]
    };
    return MatTreeNodeToggle;
}(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAT_TREE_DIRECTIVES = [
    MatNestedTreeNode,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatTreeNodeToggle,
    MatTree,
    MatTreeNode,
    MatTreeNodeOutlet
];
var MatTreeModule = /** @class */ (function () {
    function MatTreeModule() {
    }
    MatTreeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
                    exports: MAT_TREE_DIRECTIVES,
                    declarations: MAT_TREE_DIRECTIVES,
                },] },
    ];
    return MatTreeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Tree flattener to convert a normal type of node to node with children & level information.
 * Transform nested nodes of type `T` to flattened nodes of type `F`.
 *
 * For example, the input data of type `T` is nested, and contains its children data:
 *   SomeNode: {
 *     key: 'Fruits',
 *     children: [
 *       NodeOne: {
 *         key: 'Apple',
 *       },
 *       NodeTwo: {
 *        key: 'Pear',
 *      }
 *    ]
 *  }
 *  After flattener flatten the tree, the structure will become
 *  SomeNode: {
 *    key: 'Fruits',
 *    expandable: true,
 *    level: 1
 *  },
 *  NodeOne: {
 *    key: 'Apple',
 *    expandable: false,
 *    level: 2
 *  },
 *  NodeTwo: {
 *   key: 'Pear',
 *   expandable: false,
 *   level: 2
 * }
 * and the output flattened type is `F` with additional information.
 * @template T, F
 */
var  /**
 * Tree flattener to convert a normal type of node to node with children & level information.
 * Transform nested nodes of type `T` to flattened nodes of type `F`.
 *
 * For example, the input data of type `T` is nested, and contains its children data:
 *   SomeNode: {
 *     key: 'Fruits',
 *     children: [
 *       NodeOne: {
 *         key: 'Apple',
 *       },
 *       NodeTwo: {
 *        key: 'Pear',
 *      }
 *    ]
 *  }
 *  After flattener flatten the tree, the structure will become
 *  SomeNode: {
 *    key: 'Fruits',
 *    expandable: true,
 *    level: 1
 *  },
 *  NodeOne: {
 *    key: 'Apple',
 *    expandable: false,
 *    level: 2
 *  },
 *  NodeTwo: {
 *   key: 'Pear',
 *   expandable: false,
 *   level: 2
 * }
 * and the output flattened type is `F` with additional information.
 * @template T, F
 */
MatTreeFlattener = /** @class */ (function () {
    function MatTreeFlattener(transformFunction, getLevel, isExpandable, getChildren) {
        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
    }
    /**
     * @param {?} node
     * @param {?} level
     * @param {?} resultNodes
     * @param {?} parentMap
     * @return {?}
     */
    MatTreeFlattener.prototype._flattenNode = /**
     * @param {?} node
     * @param {?} level
     * @param {?} resultNodes
     * @param {?} parentMap
     * @return {?}
     */
    function (node, level, resultNodes, parentMap) {
        var _this = this;
        /** @type {?} */
        var flatNode = this.transformFunction(node, level);
        resultNodes.push(flatNode);
        if (this.isExpandable(flatNode)) {
            /** @type {?} */
            var childrenNodes = this.getChildren(node);
            if (childrenNodes) {
                if (Array.isArray(childrenNodes)) {
                    this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
                }
                else {
                    childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((/**
                     * @param {?} children
                     * @return {?}
                     */
                    function (children) {
                        _this._flattenChildren(children, level, resultNodes, parentMap);
                    }));
                }
            }
        }
        return resultNodes;
    };
    /**
     * @param {?} children
     * @param {?} level
     * @param {?} resultNodes
     * @param {?} parentMap
     * @return {?}
     */
    MatTreeFlattener.prototype._flattenChildren = /**
     * @param {?} children
     * @param {?} level
     * @param {?} resultNodes
     * @param {?} parentMap
     * @return {?}
     */
    function (children, level, resultNodes, parentMap) {
        var _this = this;
        children.forEach((/**
         * @param {?} child
         * @param {?} index
         * @return {?}
         */
        function (child, index) {
            /** @type {?} */
            var childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1);
            _this._flattenNode(child, level + 1, resultNodes, childParentMap);
        }));
    };
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     */
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     * @param {?} structuredData
     * @return {?}
     */
    MatTreeFlattener.prototype.flattenNodes = /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     * @param {?} structuredData
     * @return {?}
     */
    function (structuredData) {
        var _this = this;
        /** @type {?} */
        var resultNodes = [];
        structuredData.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return _this._flattenNode(node, 0, resultNodes, []); }));
        return resultNodes;
    };
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     */
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     * @param {?} nodes
     * @param {?} treeControl
     * @return {?}
     */
    MatTreeFlattener.prototype.expandFlattenedNodes = /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     * @param {?} nodes
     * @param {?} treeControl
     * @return {?}
     */
    function (nodes, treeControl) {
        var _this = this;
        /** @type {?} */
        var results = [];
        /** @type {?} */
        var currentExpand = [];
        currentExpand[0] = true;
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            /** @type {?} */
            var expand = true;
            for (var i = 0; i <= _this.getLevel(node); i++) {
                expand = expand && currentExpand[i];
            }
            if (expand) {
                results.push(node);
            }
            if (_this.isExpandable(node)) {
                currentExpand[_this.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
        }));
        return results;
    };
    return MatTreeFlattener;
}());
/**
 * Data source for flat tree.
 * The data source need to handle expansion/collapsion of the tree node and change the data feed
 * to `MatTree`.
 * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
 * to type `F` for `MatTree` to consume.
 * @template T, F
 */
var  /**
 * Data source for flat tree.
 * The data source need to handle expansion/collapsion of the tree node and change the data feed
 * to `MatTree`.
 * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
 * to type `F` for `MatTree` to consume.
 * @template T, F
 */
MatTreeFlatDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatTreeFlatDataSource, _super);
    function MatTreeFlatDataSource(_treeControl, _treeFlattener, initialData) {
        if (initialData === void 0) { initialData = []; }
        var _this = _super.call(this) || this;
        _this._treeControl = _treeControl;
        _this._treeFlattener = _treeFlattener;
        _this._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        _this._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        _this._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](initialData);
        return _this;
    }
    Object.defineProperty(MatTreeFlatDataSource.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this._data.value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._data.next(value);
            this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));
            this._treeControl.dataNodes = this._flattenedData.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    MatTreeFlatDataSource.prototype.connect = /**
     * @param {?} collectionViewer
     * @return {?}
     */
    function (collectionViewer) {
        var _this = this;
        /** @type {?} */
        var changes = [
            collectionViewer.viewChange,
            this._treeControl.expansionModel.onChange,
            this._flattenedData
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
         * @return {?}
         */
        function () {
            _this._expandedData.next(_this._treeFlattener.expandFlattenedNodes(_this._flattenedData.value, _this._treeControl));
            return _this._expandedData.value;
        })));
    };
    /**
     * @return {?}
     */
    MatTreeFlatDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () {
        // no op
    };
    return MatTreeFlatDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["DataSource"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 * @template T
 */
var  /**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 * @template T
 */
MatTreeNestedDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatTreeNestedDataSource, _super);
    function MatTreeNestedDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        return _this;
    }
    Object.defineProperty(MatTreeNestedDataSource.prototype, "data", {
        /**
         * Data for the nested tree
         */
        get: /**
         * Data for the nested tree
         * @return {?}
         */
        function () { return this._data.value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._data.next(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    MatTreeNestedDataSource.prototype.connect = /**
     * @param {?} collectionViewer
     * @return {?}
     */
    function (collectionViewer) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, [collectionViewer.viewChange, this._data]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
         * @return {?}
         */
        function () {
            return _this.data;
        })));
    };
    /**
     * @return {?}
     */
    MatTreeNestedDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () {
        // no op
    };
    return MatTreeNestedDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["DataSource"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=tree.es5.js.map


/***/ }),

/***/ "./src/app/main/apps/stormcatcher/proveedores/proveedores.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/stormcatcher/proveedores/proveedores.model.ts ***!
  \*************************************************************************/
/*! exports provided: ProveedorDatos, Proveedor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorDatos", function() { return ProveedorDatos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proveedor", function() { return Proveedor; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

var ProveedorDatos = /** @class */ (function () {
    function ProveedorDatos(datos) {
        this.id = datos.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.titulo = datos.titulo || '';
        this.nombre = datos.nombre || '';
        this.telefonos = datos.telefonos || [];
        this.email = datos.email || [];
        this.fecha = datos.fecha || [];
        this.puesto = datos.puesto || '';
    }
    return ProveedorDatos;
}());

var Proveedor = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param contact
     */
    function Proveedor(contact) {
        {
            this.id = contact.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
            this.name = contact.name || '';
            this.rfc = contact.rfc || '';
            this.calle = contact.calle || '';
            this.colonia = contact.colonia || '';
            this.ciudad = contact.ciudad || '';
            this.cp = contact.cp || '';
            this.estado = contact.estado || '';
            this.contactos = contact.contactos || [];
            this.contactocompra = contact.contactocompra || '';
            this.contactopago = contact.contactopago || '';
            this.telefono = contact.telefono || '';
            this.fechaalta = contact.fechaalta || '';
            this.tipoProducto = contact.tipoProducto || '';
            this.avatar = contact.avatar || 'assets/images/avatars/proveedor.jpg';
            this.nickname = contact.nickname || '';
            this.company = contact.company || '';
            this.jobTitle = contact.jobTitle || '';
            this.email = contact.email || '';
            this.phone = contact.phone || '';
            this.address = contact.address || '';
            this.birthday = contact.birthday || '';
            this.notes = contact.notes || '';
        }
    }
    return Proveedor;
}());



/***/ }),

/***/ "./src/app/main/apps/stormcatcher/proveedores/proveedores.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/apps/stormcatcher/proveedores/proveedores.service.ts ***!
  \***************************************************************************/
/*! exports provided: SCProvedoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCProvedoresService", function() { return SCProvedoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_stormcatcher_proveedores_proveedores_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/stormcatcher/proveedores/proveedores.model */ "./src/app/main/apps/stormcatcher/proveedores/proveedores.model.ts");
/* harmony import */ var app_concomsis_jmy_jmy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/concomsis/jmy/jmy.service */ "./src/app/concomsis/jmy/jmy.service.ts");
/* harmony import */ var app_concomsis_jmy_utilidades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/concomsis/jmy/utilidades */ "./src/app/concomsis/jmy/utilidades.ts");








var SCProvedoresService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function SCProvedoresService(_httpClient, jmyService) {
        var _this = this;
        this._httpClient = _httpClient;
        this.jmyService = jmyService;
        this.selectedContacts = [];
        this.validateEmail = app_concomsis_jmy_utilidades__WEBPACK_IMPORTED_MODULE_7__["ValidateEmail"];
        this.validateAt = app_concomsis_jmy_utilidades__WEBPACK_IMPORTED_MODULE_7__["ValidateAt"];
        // Set the defaults
        this.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onSelectedContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onUserDataChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.newContact = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.contacts = [];
        this.baseDB = '';
        this.jmyService.jmyPerfil.perfilChange.subscribe(function (perfil) {
            _this.baseDB = (perfil.eid != undefined) ? '/sc/' + perfil.eid + '/proveedores' : '';
            //console.log(this.baseDB);
        });
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    SCProvedoresService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getContacts(),
                _this.getUserData()
            ]).then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getContacts();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getContacts();
                });
                resolve();
            }, reject);
        });
    };
    SCProvedoresService.prototype.saveNewContact = function (d) {
        var _this = this;
        console.log(this.jmyService.jmyPerfil.rutaPrivada);
        if (this.baseDB != '')
            this.jmyService.dbRealTime.object(this.baseDB + '/' + d.id).set(d).then(function () {
                console.log('Nuevo contacto agregado', _this.searchText);
                _this.searchText = '';
            });
        else
            console.error('No hay sesión');
    };
    SCProvedoresService.prototype.getNewContact = function () {
        var _this = this;
        var studentsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            setTimeout(function () {
                console.log(_this.newContact);
                observer.next(_this.newContact);
            }, 1000);
        });
        return studentsObservable;
    };
    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    SCProvedoresService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //this._httpClient.get('api/contacts-contacts')
            var tBus = '';
            if (_this.baseDB != '') {
                console.log(_this.baseDB + '/');
                var contactos = _this.jmyService.dbRealTime.object(_this.baseDB + '/').valueChanges();
                contactos.subscribe(function (response) {
                    var fn = function (rdb) {
                        var t = [];
                        if (typeof rdb == "object")
                            Object.keys(rdb).forEach(function (e) {
                                t.push(rdb[e]);
                            });
                        return t;
                    };
                    _this.contacts = (response != undefined) ? fn(response) : _this.contacts;
                    console.log(_this.contacts, response);
                    if (_this.filterBy === 'starred') {
                        _this.contacts = _this.contacts.filter(function (_contact) {
                            return _this.user.starred.includes(_contact.id);
                        });
                    }
                    if (_this.filterBy === 'frequent') {
                        _this.contacts = _this.contacts.filter(function (_contact) {
                            return _this.user.frequentContacts.includes(_contact.id);
                        });
                    }
                    if (_this.searchText && _this.searchText !== '') {
                        _this.contacts = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].filterArrayByString(_this.contacts, _this.searchText);
                        console.log(_this.searchText);
                        if (_this.searchText.length > 4) {
                            tBus = (_this.validateAt(_this.searchText)) ? 'email' : 'displayName';
                            _this.jmyService.dbRealTime.list(_this.jmyService.jmyPerfil.rutaPublica + 'lista/', function (ref) { return ref.orderByChild(tBus).startAt(_this.searchText).endAt(_this.searchText + '\uf8ff'); }).valueChanges().subscribe(function (r) {
                                console.log(r);
                                var tm = [];
                                r.forEach(function (e) {
                                    tm.push({
                                        photoURL: e['photoURL'],
                                        email: e['email'],
                                        uid: e['uid'],
                                        displayName: e['displayName'],
                                    });
                                });
                                _this.newContact.next(tm);
                                console.log(r, _this.newContact);
                            });
                        }
                    }
                    else {
                        _this.newContact.next([]);
                    }
                    _this.contacts = _this.contacts.map(function (contact) {
                        return new app_main_apps_stormcatcher_proveedores_proveedores_model__WEBPACK_IMPORTED_MODULE_5__["Proveedor"](contact);
                    });
                    _this.onContactsChanged.next(_this.contacts);
                    resolve(_this.contacts);
                }, reject);
            }
        });
    };
    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
    SCProvedoresService.prototype.getUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/contacts-user/5725a6802d10e277a0f35724')
                .subscribe(function (response) {
                _this.user = response;
                _this.onUserDataChanged.next(_this.user);
                resolve(_this.user);
            }, reject);
        });
    };
    /**
     * Toggle selected contact by id
     *
     * @param id
     */
    SCProvedoresService.prototype.toggleSelectedContact = function (id) {
        // First, check if we already have that contact as selected...
        if (this.selectedContacts.length > 0) {
            var index = this.selectedContacts.indexOf(id);
            if (index !== -1) {
                this.selectedContacts.splice(index, 1);
                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedContacts.push(id);
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Toggle select all
     */
    SCProvedoresService.prototype.toggleSelectAll = function () {
        if (this.selectedContacts.length > 0) {
            this.deselectContacts();
        }
        else {
            this.selectContacts();
        }
    };
    /**
     * Select contacts
     *
     * @param filterParameter
     * @param filterValue
     */
    SCProvedoresService.prototype.selectContacts = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedContacts = [];
        // If there is no filter, select all contacts
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedContacts = [];
            this.contacts.map(function (contact) {
                _this.selectedContacts.push(contact.id);
            });
        }
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Update contact
     *
     * @param contact
     * @returns {Promise<any>}
     */
    SCProvedoresService.prototype.updateContact = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(contact);
            var q = _this.jmyService.dbRealTime.object(_this.baseDB + '/' + contact.id);
            q.set(contact).then(function () {
                console.log('Contacto Actualizado');
            });
            _this.getContacts();
            resolve();
        });
    };
    /**
     * Update user data
     *
     * @param userData
     * @returns {Promise<any>}
     */
    SCProvedoresService.prototype.updateUserData = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/contacts-user/' + _this.user.id, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, userData))
                .subscribe(function (response) {
                _this.getUserData();
                _this.getContacts();
                resolve(response);
            });
        });
    };
    /**
     * Deselect contacts
     */
    SCProvedoresService.prototype.deselectContacts = function () {
        this.selectedContacts = [];
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Delete contact
     *
     * @param contact
     */
    SCProvedoresService.prototype.deleteContact = function (contact) {
        console.log(contact);
        var contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
        this.jmyService.dbRealTime.object(this.baseDB + '/' + contact.id).remove().then(function () {
            console.log('del', contact.id);
        });
    };
    /**
     * Delete selected contacts
     */
    SCProvedoresService.prototype.deleteSelectedContacts = function () {
        var _loop_1 = function (contactId) {
            this_1.jmyService.dbRealTime.object(this_1.baseDB + '/' + contactId).remove().then(function () {
                console.log('del', contactId);
            });
            var contact = this_1.contacts.find(function (_contact) {
                return _contact.id === contactId;
            });
            var contactIndex = this_1.contacts.indexOf(contact);
            this_1.contacts.splice(contactIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedContacts; _i < _a.length; _i++) {
            var contactId = _a[_i];
            _loop_1(contactId);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    };
    SCProvedoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            app_concomsis_jmy_jmy_service__WEBPACK_IMPORTED_MODULE_6__["JmyService"]])
    ], SCProvedoresService);
    return SCProvedoresService;
}());



/***/ })

}]);
//# sourceMappingURL=default~stormcatcher-almaceninventario-almacen-module~stormcatcher-proveedores-proveedores-module-es5.js.map