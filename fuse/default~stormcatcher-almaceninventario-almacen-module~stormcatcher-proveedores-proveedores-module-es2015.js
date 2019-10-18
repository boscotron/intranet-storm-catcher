(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~stormcatcher-almaceninventario-almacen-module~stormcatcher-proveedores-proveedores-module"],{

/***/ "./src/app/main/apps/stormcatcher/proveedores/proveedores.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/stormcatcher/proveedores/proveedores.model.ts ***!
  \*************************************************************************/
/*! exports provided: Proveedor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proveedor", function() { return Proveedor; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

class Proveedor {
    /**
     * Constructor
     *
     * @param contact
     */
    constructor(contact) {
        {
            this.id = contact.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
            this.name = contact.name || '';
            this.rfc = contact.rfc || '';
            this.calle = contact.calle || '';
            this.ciudad = contact.ciudad || '';
            this.cp = contact.cp || '';
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
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_stormcatcher_proveedores_proveedores_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/stormcatcher/proveedores/proveedores.model */ "./src/app/main/apps/stormcatcher/proveedores/proveedores.model.ts");
/* harmony import */ var app_concomsis_jmy_jmy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/concomsis/jmy/jmy.service */ "./src/app/concomsis/jmy/jmy.service.ts");
/* harmony import */ var app_concomsis_jmy_utilidades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/concomsis/jmy/utilidades */ "./src/app/concomsis/jmy/utilidades.ts");








let SCProvedoresService = class SCProvedoresService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient, jmyService) {
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
        this.jmyService.jmyPerfil.perfilChange.subscribe(perfil => {
            this.baseDB = '/sc/' + perfil.eid + '/proveedores';
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
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getContacts(),
                this.getUserData()
            ]).then(([files]) => {
                this.onSearchTextChanged.subscribe(searchText => {
                    this.searchText = searchText;
                    this.getContacts();
                });
                this.onFilterChanged.subscribe(filter => {
                    this.filterBy = filter;
                    this.getContacts();
                });
                resolve();
            }, reject);
        });
    }
    saveNewContact(d) {
        console.log(this.jmyService.jmyPerfil.rutaPrivada);
        if (this.baseDB != '')
            this.jmyService.dbRealTime.object(this.baseDB + '/' + d.id).set(d).then(() => {
                console.log('Nuevo contacto agregado', this.searchText);
                this.searchText = '';
            });
        else
            console.error('No hay sesión');
    }
    getNewContact() {
        const studentsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            setTimeout(() => {
                console.log(this.newContact);
                observer.next(this.newContact);
            }, 1000);
        });
        return studentsObservable;
    }
    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    getContacts() {
        return new Promise((resolve, reject) => {
            //this._httpClient.get('api/contacts-contacts')
            let tBus = '';
            console.log(this.baseDB + '/');
            const contactos = this.jmyService.dbRealTime.object(this.baseDB + '/').valueChanges();
            contactos.subscribe(response => {
                const fn = (rdb) => {
                    const t = [];
                    if (typeof rdb == "object")
                        Object.keys(rdb).forEach(e => {
                            t.push(rdb[e]);
                        });
                    return t;
                };
                this.contacts = (response != undefined) ? fn(response) : this.contacts;
                console.log(this.contacts, response);
                if (this.filterBy === 'starred') {
                    this.contacts = this.contacts.filter(_contact => {
                        return this.user.starred.includes(_contact.id);
                    });
                }
                if (this.filterBy === 'frequent') {
                    this.contacts = this.contacts.filter(_contact => {
                        return this.user.frequentContacts.includes(_contact.id);
                    });
                }
                if (this.searchText && this.searchText !== '') {
                    this.contacts = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].filterArrayByString(this.contacts, this.searchText);
                    console.log(this.searchText);
                    if (this.searchText.length > 4) {
                        tBus = (this.validateAt(this.searchText)) ? 'email' : 'displayName';
                        this.jmyService.dbRealTime.list(this.jmyService.jmyPerfil.rutaPublica + 'lista/', ref => ref.orderByChild(tBus).startAt(this.searchText).endAt(this.searchText + '\uf8ff')).valueChanges().subscribe(r => {
                            console.log(r);
                            let tm = [];
                            r.forEach(e => {
                                tm.push({
                                    photoURL: e['photoURL'],
                                    email: e['email'],
                                    uid: e['uid'],
                                    displayName: e['displayName'],
                                });
                            });
                            this.newContact.next(tm);
                            console.log(r, this.newContact);
                        });
                    }
                }
                else {
                    this.newContact.next([]);
                }
                this.contacts = this.contacts.map(contact => {
                    return new app_main_apps_stormcatcher_proveedores_proveedores_model__WEBPACK_IMPORTED_MODULE_5__["Proveedor"](contact);
                });
                this.onContactsChanged.next(this.contacts);
                resolve(this.contacts);
            }, reject);
        });
    }
    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
    getUserData() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/contacts-user/5725a6802d10e277a0f35724')
                .subscribe((response) => {
                this.user = response;
                this.onUserDataChanged.next(this.user);
                resolve(this.user);
            }, reject);
        });
    }
    /**
     * Toggle selected contact by id
     *
     * @param id
     */
    toggleSelectedContact(id) {
        // First, check if we already have that contact as selected...
        if (this.selectedContacts.length > 0) {
            const index = this.selectedContacts.indexOf(id);
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
    }
    /**
     * Toggle select all
     */
    toggleSelectAll() {
        if (this.selectedContacts.length > 0) {
            this.deselectContacts();
        }
        else {
            this.selectContacts();
        }
    }
    /**
     * Select contacts
     *
     * @param filterParameter
     * @param filterValue
     */
    selectContacts(filterParameter, filterValue) {
        this.selectedContacts = [];
        // If there is no filter, select all contacts
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedContacts = [];
            this.contacts.map(contact => {
                this.selectedContacts.push(contact.id);
            });
        }
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }
    /**
     * Update contact
     *
     * @param contact
     * @returns {Promise<any>}
     */
    updateContact(contact) {
        return new Promise((resolve, reject) => {
            console.log(contact);
            const q = this.jmyService.dbRealTime.object(this.baseDB + '/' + contact.id);
            q.set(contact).then(() => {
                console.log('Contacto Actualizado');
            });
            this.getContacts();
            resolve();
        });
    }
    /**
     * Update user data
     *
     * @param userData
     * @returns {Promise<any>}
     */
    updateUserData(userData) {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/contacts-user/' + this.user.id, Object.assign({}, userData))
                .subscribe(response => {
                this.getUserData();
                this.getContacts();
                resolve(response);
            });
        });
    }
    /**
     * Deselect contacts
     */
    deselectContacts() {
        this.selectedContacts = [];
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }
    /**
     * Delete contact
     *
     * @param contact
     */
    deleteContact(contact) {
        console.log(contact);
        const contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
        this.jmyService.dbRealTime.object(this.baseDB + '/' + contact.id).remove().then(() => {
            console.log('del', contact.id);
        });
    }
    /**
     * Delete selected contacts
     */
    deleteSelectedContacts() {
        for (const contactId of this.selectedContacts) {
            this.jmyService.dbRealTime.object(this.baseDB + '/' + contactId).remove().then(() => {
                console.log('del', contactId);
            });
            const contact = this.contacts.find(_contact => {
                return _contact.id === contactId;
            });
            const contactIndex = this.contacts.indexOf(contact);
            this.contacts.splice(contactIndex, 1);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    }
};
SCProvedoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        app_concomsis_jmy_jmy_service__WEBPACK_IMPORTED_MODULE_6__["JmyService"]])
], SCProvedoresService);



/***/ })

}]);
//# sourceMappingURL=default~stormcatcher-almaceninventario-almacen-module~stormcatcher-proveedores-proveedores-module-es2015.js.map