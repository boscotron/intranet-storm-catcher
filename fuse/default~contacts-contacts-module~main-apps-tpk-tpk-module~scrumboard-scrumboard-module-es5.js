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

var Contact = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param contact
     */
    function Contact(contact) {
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
    return Contact;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_contacts_contact_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/contacts/contact.model */ "./src/app/main/apps/contacts/contact.model.ts");
/* harmony import */ var _concomsis_jmy_jmy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../concomsis/jmy/jmy.service */ "./src/app/concomsis/jmy/jmy.service.ts");
/* harmony import */ var _concomsis_jmy_utilidades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../concomsis/jmy/utilidades */ "./src/app/concomsis/jmy/utilidades.ts");








var ContactsService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ContactsService(_httpClient, jmyService) {
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
    ContactsService.prototype.resolve = function (route, state) {
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
    ContactsService.prototype.saveNewContact = function (d) {
        var _this = this;
        console.log(this.jmyService.jmyPerfil.rutaPrivada);
        this.jmyService.dbRealTime.object(this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/' + d.id).set(d).then(function () {
            console.log('Nuevo contacto agregado', _this.searchText);
            _this.searchText = '';
        });
    };
    ContactsService.prototype.guardarECard = function (d) {
        console.log(d, this.jmyService.jmyPerfil.rutaPrivada, this.jmyService.jmyPerfil.perfil);
        if (this.jmyService.jmyPerfil.perfil.uid != '') {
            this.jmyService.jmyPerfil.actualizarPerfil(d).then(function (r) {
                console.log('eCard Actualizado', d, r);
            });
        }
        else {
            console.error('no hay sessión');
        }
    };
    ContactsService.prototype.getNewContact = function () {
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
    ContactsService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //this._httpClient.get('api/contacts-contacts')
            var tBus = '';
            console.log(_this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/');
            var contactos = _this.jmyService.dbRealTime.object(_this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/').valueChanges();
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
                    return new app_main_apps_contacts_contact_model__WEBPACK_IMPORTED_MODULE_5__["Contact"](contact);
                });
                _this.onContactsChanged.next(_this.contacts);
                resolve(_this.contacts);
            }, reject);
        });
    };
    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
    ContactsService.prototype.getUserData = function () {
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
    ContactsService.prototype.toggleSelectedContact = function (id) {
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
    ContactsService.prototype.toggleSelectAll = function () {
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
    ContactsService.prototype.selectContacts = function (filterParameter, filterValue) {
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
    ContactsService.prototype.updateContact = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(contact);
            var q = _this.jmyService.dbRealTime.object(_this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/' + contact.id);
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
    ContactsService.prototype.updateUserData = function (userData) {
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
    ContactsService.prototype.deselectContacts = function () {
        this.selectedContacts = [];
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Delete contact
     *
     * @param contact
     */
    ContactsService.prototype.deleteContact = function (contact) {
        console.log(contact);
        var contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
        this.jmyService.dbRealTime.object(this.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/' + contact.id).remove().then(function () {
            console.log('del', contact.id);
        });
    };
    /**
     * Delete selected contacts
     */
    ContactsService.prototype.deleteSelectedContacts = function () {
        var _loop_1 = function (contactId) {
            this_1.jmyService.dbRealTime.object(this_1.jmyService.jmyPerfil.rutaPrivada + 'contactos/lista/' + contactId).remove().then(function () {
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
    ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _concomsis_jmy_jmy_service__WEBPACK_IMPORTED_MODULE_6__["JmyService"]])
    ], ContactsService);
    return ContactsService;
}());



/***/ })

}]);
//# sourceMappingURL=default~contacts-contacts-module~main-apps-tpk-tpk-module~scrumboard-scrumboard-module-es5.js.map