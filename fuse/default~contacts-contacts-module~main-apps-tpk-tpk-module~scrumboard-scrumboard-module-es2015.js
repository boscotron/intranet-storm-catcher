(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contacts-contacts-module~main-apps-tpk-tpk-module~scrumboard-scrumboard-module"],{

/***/ "./src/app/concomsis/jmy/utilidades.ts":
/*!*********************************************!*\
  !*** ./src/app/concomsis/jmy/utilidades.ts ***!
  \*********************************************/
/*! exports provided: ValidateEmail, ValidateAt, sumar, restar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateEmail", function() { return ValidateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateAt", function() { return ValidateAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumar", function() { return sumar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restar", function() { return restar; });
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        return (true);
    return (false);
}
function ValidateAt(mail) {
    if (/^\w+([\.-]?\w+)*@/.test(mail))
        return (true);
    return (false);
}
function sumar(va, vb) {
    return va + vb;
}
function restar(va, vb) {
    return (va > vb) ? va - vb : vb - va;
}


/***/ }),

/***/ "./src/app/main/apps/contacts/contact.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/apps/contacts/contact.model.ts ***!
  \*****************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

class Contact {
    /**
     * Constructor
     *
     * @param contact
     */
    constructor(contact) {
        {
            this.id = contact.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
            this.name = contact.name || '';
            this.lastName = contact.lastName || '';
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
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

/***/ "./src/app/main/apps/contacts/contacts.service.ts":
/*!********************************************************!*\
  !*** ./src/app/main/apps/contacts/contacts.service.ts ***!
  \********************************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_contacts_contact_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/contacts/contact.model */ "./src/app/main/apps/contacts/contact.model.ts");
/* harmony import */ var _concomsis_jmy_jmy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../concomsis/jmy/jmy.service */ "./src/app/concomsis/jmy/jmy.service.ts");
/* harmony import */ var _concomsis_jmy_utilidades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../concomsis/jmy/utilidades */ "./src/app/concomsis/jmy/utilidades.ts");








let ContactsService = class ContactsService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient, jmyService) {
        this._httpClient = _httpClient;
        this.jmyService = jmyService;
        this.selectedContacts = [];
        this.validateEmail = _concomsis_jmy_utilidades__WEBPACK_IMPORTED_MODULE_7__["ValidateEmail"];
        this.validateAt = _concomsis_jmy_utilidades__WEBPACK_IMPORTED_MODULE_7__["ValidateAt"];
        // Set the defaults
        this.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onSelectedContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onUserDataChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.newContact = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.contacts = [];
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
        this.jmyService.dbRealTime.object(this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/' + d.id).set(d).then(() => {
            console.log('Nuevo contacto agregado', this.searchText);
            this.searchText = '';
        });
    }
    guardarECard(d) {
        console.log(d, this.jmyService.jmyPerfil.rutaPrivada, this.jmyService.jmyPerfil.perfil);
        if (this.jmyService.jmyPerfil.perfil.uid != '') {
            this.jmyService.jmyPerfil.actualizarPerfil(d).then(r => {
                console.log('eCard Actualizado', d, r);
            });
        }
        else {
            console.error('no hay sessión');
        }
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
            console.log(this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/');
            const contactos = this.jmyService.dbRealTime.object(this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/').valueChanges();
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
                    return new app_main_apps_contacts_contact_model__WEBPACK_IMPORTED_MODULE_5__["Contact"](contact);
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
            const q = this.jmyService.dbRealTime.object(this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/' + contact.id);
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
        this.jmyService.dbRealTime.object(this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/' + contact.id).remove().then(() => {
            console.log('del', contact.id);
        });
    }
    /**
     * Delete selected contacts
     */
    deleteSelectedContacts() {
        for (const contactId of this.selectedContacts) {
            this.jmyService.dbRealTime.object(this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/' + contactId).remove().then(() => {
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
ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _concomsis_jmy_jmy_service__WEBPACK_IMPORTED_MODULE_6__["JmyService"]])
], ContactsService);



/***/ })

}]);
//# sourceMappingURL=default~contacts-contacts-module~main-apps-tpk-tpk-module~scrumboard-scrumboard-module-es2015.js.map