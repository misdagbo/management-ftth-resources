import { NgModule, Injectable, defineInjectable, inject } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HelperModule, HttpRequestService, UtilityService, Request } from 'helper';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WebModule {
}
WebModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule,
                    HelperModule
                ],
                providers: [],
                declarations: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Nro {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Commune {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Quartier {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Utilisateur {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Profile {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Fonctionnalite {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileFonctionnalite {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Site {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Fournisseur {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Modele {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Caracteristique {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Offre {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Olt {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Baie {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Chassis {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Carte {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Port {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Router {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RouterCarte {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RouterPort {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Ont {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OltLink {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Rfo {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Roe {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RoeModule {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RoePort {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Rot {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RotModule {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RotPort {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RfoJarretiere {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CableTransport {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Sro {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Pb {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Ttt {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TttPort {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Tot {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Tod {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TotPlot {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TodPlot {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TotCoupleur {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CassetteFibre {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Fe {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Ft {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Travee {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Couleur {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FibreCableTransport {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING = 'paramNro';
class NroService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
NroService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
NroService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ NroService.ngInjectableDef = defineInjectable({ factory: function NroService_Factory() { return new NroService(inject(HttpRequestService), inject(UtilityService)); }, token: NroService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$1 = 'paramCommune';
class CommuneService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$1, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$1, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$1, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
CommuneService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
CommuneService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ CommuneService.ngInjectableDef = defineInjectable({ factory: function CommuneService_Factory() { return new CommuneService(inject(HttpRequestService), inject(UtilityService)); }, token: CommuneService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$2 = 'paramQuartier';
class QuartierService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$2, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$2, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$2, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
QuartierService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
QuartierService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ QuartierService.ngInjectableDef = defineInjectable({ factory: function QuartierService_Factory() { return new QuartierService(inject(HttpRequestService), inject(UtilityService)); }, token: QuartierService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$3 = 'adminUser';
class UtilisateurService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$3, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$3, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$3, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
UtilisateurService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
UtilisateurService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ UtilisateurService.ngInjectableDef = defineInjectable({ factory: function UtilisateurService_Factory() { return new UtilisateurService(inject(HttpRequestService), inject(UtilityService)); }, token: UtilisateurService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$4 = 'adminProfile';
class ProfileService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$4, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$4, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$4, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
ProfileService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
ProfileService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ ProfileService.ngInjectableDef = defineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(inject(HttpRequestService), inject(UtilityService)); }, token: ProfileService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$5 = 'adminFonctionnalite';
class FonctionnaliteService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$5, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$5, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$5, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
FonctionnaliteService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
FonctionnaliteService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ FonctionnaliteService.ngInjectableDef = defineInjectable({ factory: function FonctionnaliteService_Factory() { return new FonctionnaliteService(inject(HttpRequestService), inject(UtilityService)); }, token: FonctionnaliteService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$6 = 'adminProfileFonctionnalite';
class ProfileFonctionnaliteService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$6, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$6, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$6, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
ProfileFonctionnaliteService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
ProfileFonctionnaliteService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ ProfileFonctionnaliteService.ngInjectableDef = defineInjectable({ factory: function ProfileFonctionnaliteService_Factory() { return new ProfileFonctionnaliteService(inject(HttpRequestService), inject(UtilityService)); }, token: ProfileFonctionnaliteService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$7 = 'paramSite';
class SiteService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$7, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$7, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$7, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    getParamSite(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$7, 'getParamSite');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
SiteService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
SiteService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ SiteService.ngInjectableDef = defineInjectable({ factory: function SiteService_Factory() { return new SiteService(inject(HttpRequestService), inject(UtilityService)); }, token: SiteService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$8 = 'paramFournisseur';
class FournisseurService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$8, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$8, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$8, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
FournisseurService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
FournisseurService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ FournisseurService.ngInjectableDef = defineInjectable({ factory: function FournisseurService_Factory() { return new FournisseurService(inject(HttpRequestService), inject(UtilityService)); }, token: FournisseurService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$9 = 'paramModele';
class ModeleService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$9, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$9, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$9, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
ModeleService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
ModeleService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ ModeleService.ngInjectableDef = defineInjectable({ factory: function ModeleService_Factory() { return new ModeleService(inject(HttpRequestService), inject(UtilityService)); }, token: ModeleService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$a = 'paramCaracteristiques';
class CaracteristiqueService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$a, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$a, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$a, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
CaracteristiqueService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
CaracteristiqueService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ CaracteristiqueService.ngInjectableDef = defineInjectable({ factory: function CaracteristiqueService_Factory() { return new CaracteristiqueService(inject(HttpRequestService), inject(UtilityService)); }, token: CaracteristiqueService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$b = 'paramOffre';
class OffreService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$b, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$b, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$b, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
OffreService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
OffreService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ OffreService.ngInjectableDef = defineInjectable({ factory: function OffreService_Factory() { return new OffreService(inject(HttpRequestService), inject(UtilityService)); }, token: OffreService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$c = 'olt';
class OltService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$c, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$c, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$c, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
OltService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
OltService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ OltService.ngInjectableDef = defineInjectable({ factory: function OltService_Factory() { return new OltService(inject(HttpRequestService), inject(UtilityService)); }, token: OltService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$d = 'oltBaie';
class BaieService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$d, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$d, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$d, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
BaieService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
BaieService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ BaieService.ngInjectableDef = defineInjectable({ factory: function BaieService_Factory() { return new BaieService(inject(HttpRequestService), inject(UtilityService)); }, token: BaieService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$e = 'oltChassis';
class ChassisService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$e, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$e, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$e, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    getAllInfos(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$e, 'getAllInfos');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
ChassisService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
ChassisService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ ChassisService.ngInjectableDef = defineInjectable({ factory: function ChassisService_Factory() { return new ChassisService(inject(HttpRequestService), inject(UtilityService)); }, token: ChassisService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$f = 'oltCarte';
class CarteService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$f, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$f, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$f, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    getOltCartePortPhysique(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$f, 'getOltCartePortPhysique');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
CarteService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
CarteService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ CarteService.ngInjectableDef = defineInjectable({ factory: function CarteService_Factory() { return new CarteService(inject(HttpRequestService), inject(UtilityService)); }, token: CarteService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$g = 'oltPortPhysique';
class PortService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$g, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$g, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$g, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    getOltPortPhysique(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$g, 'getOltPortPhysique');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
PortService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
PortService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ PortService.ngInjectableDef = defineInjectable({ factory: function PortService_Factory() { return new PortService(inject(HttpRequestService), inject(UtilityService)); }, token: PortService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$h = 'oltRouter';
class RouterService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$h, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$h, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$h, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RouterService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RouterService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RouterService.ngInjectableDef = defineInjectable({ factory: function RouterService_Factory() { return new RouterService(inject(HttpRequestService), inject(UtilityService)); }, token: RouterService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$i = 'oltRouterCarte';
class RouterCarteService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$i, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$i, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$i, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RouterCarteService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RouterCarteService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RouterCarteService.ngInjectableDef = defineInjectable({ factory: function RouterCarteService_Factory() { return new RouterCarteService(inject(HttpRequestService), inject(UtilityService)); }, token: RouterCarteService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$j = 'oltRouterPort';
class RouterPortService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$j, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$j, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$j, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RouterPortService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RouterPortService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RouterPortService.ngInjectableDef = defineInjectable({ factory: function RouterPortService_Factory() { return new RouterPortService(inject(HttpRequestService), inject(UtilityService)); }, token: RouterPortService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$k = 'oltPortLogique';
class OntService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$k, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$k, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$k, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
OntService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
OntService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ OntService.ngInjectableDef = defineInjectable({ factory: function OntService_Factory() { return new OntService(inject(HttpRequestService), inject(UtilityService)); }, token: OntService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$l = 'oltLink';
class OltLinkService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$l, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$l, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$l, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
OltLinkService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
OltLinkService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ OltLinkService.ngInjectableDef = defineInjectable({ factory: function OltLinkService_Factory() { return new OltLinkService(inject(HttpRequestService), inject(UtilityService)); }, token: OltLinkService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$m = 'rfo';
class RfoService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$m, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$m, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$m, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RfoService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RfoService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RfoService.ngInjectableDef = defineInjectable({ factory: function RfoService_Factory() { return new RfoService(inject(HttpRequestService), inject(UtilityService)); }, token: RfoService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$n = 'rfoRoe';
class RoeService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$n, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$n, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$n, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RoeService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RoeService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RoeService.ngInjectableDef = defineInjectable({ factory: function RoeService_Factory() { return new RoeService(inject(HttpRequestService), inject(UtilityService)); }, token: RoeService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$o = 'rfoRot';
class RotService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$o, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$o, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$o, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RotService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RotService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RotService.ngInjectableDef = defineInjectable({ factory: function RotService_Factory() { return new RotService(inject(HttpRequestService), inject(UtilityService)); }, token: RotService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$p = 'rfoRoeModule';
class RoeModuleService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$p, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$p, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$p, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RoeModuleService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RoeModuleService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RoeModuleService.ngInjectableDef = defineInjectable({ factory: function RoeModuleService_Factory() { return new RoeModuleService(inject(HttpRequestService), inject(UtilityService)); }, token: RoeModuleService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$q = 'rfoRotModule';
class RotModuleService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$q, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$q, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$q, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RotModuleService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RotModuleService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RotModuleService.ngInjectableDef = defineInjectable({ factory: function RotModuleService_Factory() { return new RotModuleService(inject(HttpRequestService), inject(UtilityService)); }, token: RotModuleService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$r = 'rfoRoePortModule';
class RoePortService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$r, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$r, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$r, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RoePortService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RoePortService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RoePortService.ngInjectableDef = defineInjectable({ factory: function RoePortService_Factory() { return new RoePortService(inject(HttpRequestService), inject(UtilityService)); }, token: RoePortService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$s = 'rfoRotPortModule';
class RotPortService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$s, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$s, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$s, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    getRfoRotPortModule(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$s, 'getRfoRotPortModule');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RotPortService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RotPortService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RotPortService.ngInjectableDef = defineInjectable({ factory: function RotPortService_Factory() { return new RotPortService(inject(HttpRequestService), inject(UtilityService)); }, token: RotPortService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$t = 'rfoJarretiere';
class RfoJarretiereService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$t, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$t, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$t, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RfoJarretiereService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RfoJarretiereService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RfoJarretiereService.ngInjectableDef = defineInjectable({ factory: function RfoJarretiereService_Factory() { return new RfoJarretiereService(inject(HttpRequestService), inject(UtilityService)); }, token: RfoJarretiereService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$u = 'rfoCableTransport';
class CableTransportService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$u, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$u, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$u, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
CableTransportService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
CableTransportService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ CableTransportService.ngInjectableDef = defineInjectable({ factory: function CableTransportService_Factory() { return new CableTransportService(inject(HttpRequestService), inject(UtilityService)); }, token: CableTransportService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$v = 'sro';
class SroService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$v, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$v, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$v, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
SroService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
SroService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ SroService.ngInjectableDef = defineInjectable({ factory: function SroService_Factory() { return new SroService(inject(HttpRequestService), inject(UtilityService)); }, token: SroService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$w = 'sroPb';
class PbService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$w, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$w, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$w, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
PbService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
PbService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ PbService.ngInjectableDef = defineInjectable({ factory: function PbService_Factory() { return new PbService(inject(HttpRequestService), inject(UtilityService)); }, token: PbService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$x = 'sroTiroirTransition';
class TttService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$x, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$x, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$x, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
TttService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
TttService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ TttService.ngInjectableDef = defineInjectable({ factory: function TttService_Factory() { return new TttService(inject(HttpRequestService), inject(UtilityService)); }, token: TttService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$y = 'sroPortTiroirTransition';
class TttPortService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$y, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$y, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$y, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
TttPortService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
TttPortService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ TttPortService.ngInjectableDef = defineInjectable({ factory: function TttPortService_Factory() { return new TttPortService(inject(HttpRequestService), inject(UtilityService)); }, token: TttPortService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$z = 'sroPlotTransport';
class TotPlotService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$z, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$z, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$z, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
TotPlotService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
TotPlotService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ TotPlotService.ngInjectableDef = defineInjectable({ factory: function TotPlotService_Factory() { return new TotPlotService(inject(HttpRequestService), inject(UtilityService)); }, token: TotPlotService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$A = 'sroPlotDistribution';
class TodPlotService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$A, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$A, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$A, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
TodPlotService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
TodPlotService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ TodPlotService.ngInjectableDef = defineInjectable({ factory: function TodPlotService_Factory() { return new TodPlotService(inject(HttpRequestService), inject(UtilityService)); }, token: TodPlotService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$B = 'sroTiroirTransport';
class TotService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$B, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$B, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$B, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
TotService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
TotService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ TotService.ngInjectableDef = defineInjectable({ factory: function TotService_Factory() { return new TotService(inject(HttpRequestService), inject(UtilityService)); }, token: TotService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$C = 'sroTiroirDistribution';
class TodService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$C, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$C, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$C, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
TodService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
TodService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ TodService.ngInjectableDef = defineInjectable({ factory: function TodService_Factory() { return new TodService(inject(HttpRequestService), inject(UtilityService)); }, token: TodService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$D = 'sroTiroirTransportCoupleur';
class TotCoupleurService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$D, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$D, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$D, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
TotCoupleurService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
TotCoupleurService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ TotCoupleurService.ngInjectableDef = defineInjectable({ factory: function TotCoupleurService_Factory() { return new TotCoupleurService(inject(HttpRequestService), inject(UtilityService)); }, token: TotCoupleurService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$E = 'rfoFe';
class FeService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$E, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$E, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$E, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
FeService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
FeService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ FeService.ngInjectableDef = defineInjectable({ factory: function FeService_Factory() { return new FeService(inject(HttpRequestService), inject(UtilityService)); }, token: FeService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$F = 'rfoFt';
class FtService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$F, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$F, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$F, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
FtService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
FtService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ FtService.ngInjectableDef = defineInjectable({ factory: function FtService_Factory() { return new FtService(inject(HttpRequestService), inject(UtilityService)); }, token: FtService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$G = 'rfoTravee';
class TraveeService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$G, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$G, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$G, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
TraveeService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
TraveeService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ TraveeService.ngInjectableDef = defineInjectable({ factory: function TraveeService_Factory() { return new TraveeService(inject(HttpRequestService), inject(UtilityService)); }, token: TraveeService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$H = 'paramCouleur';
class CouleurService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$H, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$H, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$H, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
CouleurService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
CouleurService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ CouleurService.ngInjectableDef = defineInjectable({ factory: function CouleurService_Factory() { return new CouleurService(inject(HttpRequestService), inject(UtilityService)); }, token: CouleurService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ REQUEST_MAPPING$I = 'rfoFibreTransport';
class FibreCableTransportService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$I, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$I, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$I, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
FibreCableTransportService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
FibreCableTransportService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ FibreCableTransportService.ngInjectableDef = defineInjectable({ factory: function FibreCableTransportService_Factory() { return new FibreCableTransportService(inject(HttpRequestService), inject(UtilityService)); }, token: FibreCableTransportService, providedIn: WebModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RouterCarteRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RouterRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModeleRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class QuartierRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CarteRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OltRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RoeModuleRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RotModuleRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CableTransportRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TttRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TotRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TodRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PbRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RoePortRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TttPortRequest extends Request {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { WebModule, Nro, Commune, Quartier, Utilisateur, Profile, Fonctionnalite, ProfileFonctionnalite, Site, Fournisseur, Modele, Caracteristique, Offre, Olt, Baie, Chassis, Carte, Port, Router, RouterCarte, RouterPort, Ont, OltLink, Rfo, Roe, RoeModule, RoePort, Rot, RotModule, RotPort, RfoJarretiere, CableTransport, Sro, Pb, Ttt, TttPort, Tot, Tod, TotPlot, TodPlot, TotCoupleur, CassetteFibre, Fe, Ft, Travee, Couleur, FibreCableTransport, NroService, CommuneService, QuartierService, UtilisateurService, ProfileService, FonctionnaliteService, ProfileFonctionnaliteService, SiteService, FournisseurService, ModeleService, CaracteristiqueService, OffreService, OltService, BaieService, ChassisService, CarteService, PortService, RouterService, RouterCarteService, RouterPortService, OntService, OltLinkService, RfoService, RoeService, RotService, RoeModuleService, RotModuleService, RoePortService, RotPortService, RfoJarretiereService, CableTransportService, SroService, PbService, TttService, TttPortService, TotPlotService, TodPlotService, TotService, TodService, TotCoupleurService, FeService, FtService, TraveeService, CouleurService, FibreCableTransportService, ProfileRequest, RouterCarteRequest, RouterRequest, ModeleRequest, QuartierRequest, CarteRequest, OltRequest, RoeModuleRequest, RotModuleRequest, CableTransportRequest, TttRequest, TotRequest, TodRequest, PbRequest, RoePortRequest, TttPortRequest };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly93ZWIvbGliL3dlYi5tb2R1bGUudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvbnJvLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2NvbW11bmUudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvcXVhcnRpZXIudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvdXRpbGlzYXRldXIudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvcHJvZmlsZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9mb25jdGlvbm5hbGl0ZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9wcm9maWxlLWZvbmN0aW9ubmFsaXRlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3NpdGUudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvZm91cm5pc3NldXIudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvbW9kZWxlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2NhcmFjdGVyaXN0aXF1ZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9vZmZyZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9vbHQudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvYmFpZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9jaGFzc2lzLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2NhcnRlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3BvcnQudHMiLCJuZzovL3dlYi9saWIvX2R0b3Mvcm91dGVyLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3JvdXRlci1jYXJ0ZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9yb3V0ZXItcG9ydC50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9vbnQudHMiLCJuZzovL3dlYi9saWIvX2R0b3Mvb2x0LWxpbmsudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvcmZvLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3JvZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9yb2UtbW9kdWxlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3JvZS1wb3J0LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3JvdC50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9yb3QtbW9kdWxlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3JvdC1wb3J0LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3Jmby1qYXJyZXRpZXJlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2NhYmxlLXRyYW5zcG9ydC50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9zcm8udHMiLCJuZzovL3dlYi9saWIvX2R0b3MvcGIudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvdHR0LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3R0dC1wb3J0LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3RvdC50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy90b2QudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvdG90LXBsb3QudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvdG9kLXBsb3QudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvdG90LWNvdXBsZXVyLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2Nhc3NldHRlLWZpYnJlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2ZlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2Z0LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3RyYXZlZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9jb3VsZXVyLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2ZpYnJlLWNhYmxlLXRyYW5zcG9ydC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvbnJvLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL2NvbW11bmUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcXVhcnRpZXIuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvdXRpbGlzYXRldXIuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcHJvZmlsZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9mb25jdGlvbm5hbGl0ZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9wcm9maWxlLWZvbmN0aW9ubmFsaXRlLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3NpdGUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvZm91cm5pc3NldXIuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvbW9kZWxlLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL2NhcmFjdGVyaXN0aXF1ZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9vZmZyZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9vbHQuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvYmFpZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9jaGFzc2lzLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL2NhcnRlLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3BvcnQuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcm91dGVyLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3JvdXRlci1jYXJ0ZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9yb3V0ZXItcG9ydC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9vbnQuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvb2x0LWxpbmsuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcmZvLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3JvZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9yb3Quc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcm9lLW1vZHVsZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9yb3QtbW9kdWxlLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3JvZS1wb3J0LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3JvdC1wb3J0LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3Jmby1qYXJyZXRpZXJlLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL2NhYmxlLXRyYW5zcG9ydC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9zcm8uc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcGIuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvdHR0LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3R0dC1wb3J0LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3RvdC1wbG90LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3RvZC1wbG90LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3RvdC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy90b2Quc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvdG90LWNvdXBsZXVyLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL2ZlLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL2Z0LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3RyYXZlZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9jb3VsZXVyLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL2ZpYnJlLWNhYmxlLXRyYW5zcG9ydC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvcHJvZmlsZS1yZXF1ZXN0LnRzIiwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvcm91dGVyLWNhcnRlLXJlcXVlc3QudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyYWN0cy9yb3V0ZXItcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL21vZGVsZS1yZXF1ZXN0LnRzIiwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvcXVhcnRpZXItcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL2NhcnRlLXJlcXVlc3QudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyYWN0cy9vbHQtcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL3JvZS1tb2R1bGUtcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL3JvdC1tb2R1bGUtcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL2NhYmxlLXRyYW5zcG9ydC1yZXF1ZXN0LnRzIiwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvdHR0LXJlcXVlc3QudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyYWN0cy90b3QtcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL3RvZC1yZXF1ZXN0LnRzIiwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvcGItcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL3JvZS1wb3J0LXJlcXVlc3QudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyYWN0cy90dHQtcG9ydC1yZXF1ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnaGVscGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSGVscGVyTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFdlYk1vZHVsZSB7IH1cbiIsImV4cG9ydCBjbGFzcyBOcm8ge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgY29tbXVuZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXJhbUNvbW11bmVMaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBDb21tdW5lIHtcblxuICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFF1YXJ0aWVyIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsaWJlbGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbW11bmU6IG51bWJlcjtcbiAgICBwdWJsaWMgcGFyYW1Db21tdW5lTGliZWxsZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgVXRpbGlzYXRldXIge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBwdWJsaWMgbG9naW46IHN0cmluZztcbiAgICBwdWJsaWMgcHJvZmlsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhZG1pblByb2ZpbGVMaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9maWxlIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBGb25jdGlvbm5hbGl0ZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGliZWxsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwcm9maWxlOiBudW1iZXI7XG4gICAgcHVibGljIGFkbWluUHJvZmlsZUxpYmVsbGU6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFByb2ZpbGVGb25jdGlvbm5hbGl0ZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcHJvZmlsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBmb25jdGlvbm5hbGl0ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhZG1pblByb2ZpbGVMaWJlbGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGFkbWluRm9uY3Rpb25uYWxpdGVMaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBTaXRlIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsaWJlbGxlOiBzdHJpbmc7XG4gICAgcHVibGljIHF1YXJ0aWVyOiBudW1iZXI7XG4gICAgcHVibGljIGxhdGl0dWRlOiBzdHJpbmc7XG4gICAgcHVibGljIGxvbmdpdHVkZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbVF1YXJ0aWVyTGliZWxsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbUNvbW11bmVMaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBGb3Vybmlzc2V1ciB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcmFpc29uOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbnRhY3Q6IHN0cmluZztcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZztcbiAgICBwdWJsaWMgYWRyZXNzZTogc3RyaW5nO1xuXG59XG4iLCJpbXBvcnQgeyBTZWFyY2hQYXJhbSB9IGZyb20gJ2hlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbGUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIHJlZmVyZW5jZTogc3RyaW5nO1xuICAgIHB1YmxpYyBmb3Vybmlzc2V1cjogbnVtYmVyO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGVQYXJhbTogU2VhcmNoUGFyYW08U3RyaW5nPjtcbn1cbiIsImV4cG9ydCBjbGFzcyBDYXJhY3RlcmlzdGlxdWUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgdmFsZXVyOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgT2ZmcmUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgY29kZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkZWJpdDogc3RyaW5nO1xuXG59XG4iLCJpbXBvcnQgeyBCYWllIH0gZnJvbSAnLi9iYWllJztcblxuZXhwb3J0IGNsYXNzIE9sdCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbm9tOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgaXA6IHN0cmluZztcbiAgICBwdWJsaWMgbnJvOiBudW1iZXI7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsYXRpdHV0ZGU6IHN0cmluZztcbiAgICBwdWJsaWMgbG9uZ2l0dWRlOiBzdHJpbmc7XG4gICAgcHVibGljIHNsb3Q6IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1Ocm9MaWJlbGxlOiBzdHJpbmc7XG4gICAgcHVibGljIHBhcmFtTW9kZWxlUmVmZXJlbmNlOiBzdHJpbmc7XG4gICAgcHVibGljIG9sdEJhaWU6IEJhaWU7XG5cbn1cbiIsImltcG9ydCB7IENoYXNzaXMgfSBmcm9tICcuL2NoYXNzaXMnO1xuXG5leHBvcnQgY2xhc3MgQmFpZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIG9sdDogbnVtYmVyO1xuICAgIHB1YmxpYyBpdGVtc09sdENoYXNzaXM6IEFycmF5PENoYXNzaXM+O1xuXG59XG4iLCJpbXBvcnQgeyBPbHRMaW5rIH0gZnJvbSAnLi9vbHQtbGluayc7XG5pbXBvcnQgeyBDYXJ0ZSB9IGZyb20gJy4vY2FydGUnO1xuXG5leHBvcnQgY2xhc3MgQ2hhc3NpcyB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIGJhaWU6IG51bWJlcjtcbiAgICBwdWJsaWMgb2x0QmFpZU51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBpdGVtc09sdExpbms6IEFycmF5PE9sdExpbms+O1xuICAgIHB1YmxpYyBpdGVtc09sdENhcnRlOiBBcnJheTxDYXJ0ZT47XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBDYXJ0ZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBjaGFzc2lzOiBudW1iZXI7XG4gICAgcHVibGljIG9sdE5vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJpbXBvcnQgeyBPbnQgfSBmcm9tICcuL29udCc7XG5cbmV4cG9ydCBjbGFzcyBQb3J0IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgY2FydGU6IG51bWJlcjtcbiAgICBwdWJsaWMgb2x0Q2FydGVOdW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgaXRlbXNPbHRQb3J0TG9naXF1ZXM6IEFycmF5PE9udD47XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG5vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBpcDogc3RyaW5nO1xuICAgIHB1YmxpYyBtb2RlbGU6IG51bWJlcjtcbiAgICBwdWJsaWMgbnJvOiBudW1iZXI7XG4gICAgcHVibGljIHBhcmFtTnJvTGliZWxsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJpbXBvcnQgeyBSb3V0ZXJQb3J0IH0gZnJvbSAnLi9yb3V0ZXItcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJDYXJ0ZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIHJvdXRlcjogbnVtYmVyO1xuICAgIHB1YmxpYyBtb2RlbGU6IG51bWJlcjtcbiAgICBwdWJsaWMgb2x0Um91dGVyTm9tOiBzdHJpbmc7XG4gICAgcHVibGljIHBhcmFtTW9kZWxlUmVmZXJlbmNlOiBzdHJpbmc7XG4gICAgcHVibGljIGl0ZW1zT2x0Um91dGVyUG9ydDogQXJyYXk8Um91dGVyUG9ydD47XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBSb3V0ZXJQb3J0IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgcm91dGVyQ2FydGU6IHN0cmluZztcbiAgICBwdWJsaWMgb2x0TGluazogbnVtYmVyO1xuICAgIHB1YmxpYyBvbHRSb3V0ZXJDYXJ0ZU51bWVybzogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgT250IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgcG9ydFBoeXNpcXVlOiBudW1iZXI7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBPbHRMaW5rIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBzdGF0dXM6IG51bWJlcjtcbiAgICBwdWJsaWMgY2hhc3NpczogbnVtYmVyO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgUmZvIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBub206IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBucm86IG51bWJlcjtcbiAgICBwdWJsaWMgbW9kZWxlOiBudW1iZXI7XG4gICAgcHVibGljIGxhdGl0dXRkZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsb25naXR1ZGU6IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1Ocm9MaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBSb2Uge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBmZTogbnVtYmVyO1xuICAgIHB1YmxpYyByZm9GZU51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBtb2RlbGU6IG51bWJlcjtcblxufVxuIiwiaW1wb3J0IHsgUm9lUG9ydCB9IGZyb20gJy4vcm9lLXBvcnQnO1xuXG5leHBvcnQgY2xhc3MgUm9lTW9kdWxlIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgcm9lOiBudW1iZXI7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBpdGVtc1Jmb1JvZVBvcnRNb2R1bGU6IEFycmF5PFJvZVBvcnQ+O1xuICAgIHB1YmxpYyBzcGxpdHRlcjogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgUm9lUG9ydCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIHJvZU1vZHVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwb3J0UGh5c2lxdWU6IG51bWJlcjtcblxufVxuIiwiZXhwb3J0IGNsYXNzIFJvdCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIGZ0OiBudW1iZXI7XG4gICAgcHVibGljIHJmb0Z0TnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuXG59XG4iLCJpbXBvcnQgeyBSb3RQb3J0IH0gZnJvbSAnLi9yb3QtcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBSb3RNb2R1bGUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyByb3Q6IG51bWJlcjtcbiAgICBwdWJsaWMgbW9kZWxlOiBudW1iZXI7XG4gICAgcHVibGljIHJmb1JvdFBvcnRNb2R1bGU6IEFycmF5PFJvdFBvcnQ+O1xuXG59XG4iLCJleHBvcnQgY2xhc3MgUm90UG9ydCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIHJvdE1vZHVsZTogbnVtYmVyO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgUmZvSmFycmV0aWVyZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcm9lUG9ydE1vZHVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyByb3RQb3J0TW9kdWxlOiBudW1iZXI7XG4gICAgcHVibGljIHJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgQ2FibGVUcmFuc3BvcnQge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBtb2RlbGU6IG51bWJlcjtcbiAgICBwdWJsaWMgZmlicmU6IG51bWJlcjtcbiAgICBwdWJsaWMgcmZvOiBudW1iZXI7XG4gICAgcHVibGljIHJmb05vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU5yb0lkOiBudW1iZXI7XG4gICAgcHVibGljIHBhcmFtTnJvTGliZWxsZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgU3JvIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBub206IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBucm86IG51bWJlcjtcbiAgICBwdWJsaWMgbGF0aXR1dGRlOiBzdHJpbmc7XG4gICAgcHVibGljIGxvbmdpdHVkZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU5yb0xpYmVsbGU6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFBiIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgbGF0aXR1dGRlOiBzdHJpbmc7XG4gICAgcHVibGljIGxvbmdpdHVkZTogc3RyaW5nO1xuICAgIHB1YmxpYyBzaXRlOiBudW1iZXI7XG4gICAgcHVibGljIHNybzogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXJhbU5yb0xpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1TaXRlTGliZWxsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgVHR0IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgc3JvOiBudW1iZXI7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBzcm9Ob206IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1Nb2RlbGVSZWZlcmVuY2U6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFR0dFBvcnQge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXJvaXJUcmFuc2l0aW9uOiBudW1iZXI7XG4gICAgcHVibGljIGZpYnJlVHJhbnNwb3J0OiBudW1iZXI7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBUb3Qge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBzcm86IG51bWJlcjtcbiAgICBwdWJsaWMgbW9kZWxlOiBudW1iZXI7XG4gICAgcHVibGljIHNyb05vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgVG9kIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgc3JvOiBudW1iZXI7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBzcm9Ob206IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1Nb2RlbGVSZWZlcmVuY2U6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFRvdFBsb3Qge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXJvaXJUcmFuc3BvcnQ6IG51bWJlcjtcblxufVxuIiwiZXhwb3J0IGNsYXNzIFRvZFBsb3Qge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXJvaXJEaXN0cmlidXRpb246IG51bWJlcjtcbiAgICBwdWJsaWMgc3RhdHVzOiBudW1iZXI7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBUb3RDb3VwbGV1ciB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIHRpcm9pclRyYW5zcG9ydDogbnVtYmVyO1xuICAgIHB1YmxpYyBwb3J0VGlyb2lyVHJhbnNpdGlvbjogbnVtYmVyO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgQ2Fzc2V0dGVGaWJyZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIGNvdWxldXI6IG51bWJlcjtcbiAgICBwdWJsaWMgcGxvdERpc3RyaWJ1dGlvbjogbnVtYmVyO1xuICAgIHB1YmxpYyBjYXNzZXR0ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBzcm9DYXNzZXR0ZU51bWVybzogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgRmUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyB0cmF2ZWU6IG51bWJlcjtcbiAgICBwdWJsaWMgcmZvVHJhdmVlTnVtZXJvOiBzdHJpbmc7XG5cbn1cbiIsIlxuZXhwb3J0IGNsYXNzIEZ0IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgdHJhdmVlOiBudW1iZXI7XG4gICAgcHVibGljIHJmb1RyYXZlZU51bWVybzogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgVHJhdmVlIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgcmZvOiBudW1iZXI7XG4gICAgcHVibGljIHJmb05vbTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgQ291bGV1ciB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGliZWxsZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgRmlicmVDYWJsZVRyYW5zcG9ydCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIGNvdWxldXI6IG51bWJlcjtcbiAgICBwdWJsaWMgcm90UG9ydE1vZHVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBjYWJsZVRyYW5zcG9ydDogbnVtYmVyO1xuICAgIHB1YmxpYyBldGF0OiBudW1iZXI7XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBOcm8gfSBmcm9tICcuLi9fZHRvcy9ucm8nO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAncGFyYW1Ocm8nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBOcm9TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PE5ybz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxOcm8+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxOcm8+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8TnJvPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE5ybz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE5ybz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxOcm8+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8TnJvPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxOcm8+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBDb21tdW5lIH0gZnJvbSAnLi4vX2R0b3MvY29tbXVuZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbUNvbW11bmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBDb21tdW5lU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxDb21tdW5lPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENvbW11bmU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDb21tdW5lPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENvbW11bmU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q29tbXVuZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENvbW11bmU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Q29tbXVuZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDb21tdW5lPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDb21tdW5lPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUXVhcnRpZXIgfSBmcm9tICcuLi9fZHRvcy9xdWFydGllcic7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbVF1YXJ0aWVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUXVhcnRpZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFF1YXJ0aWVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFF1YXJ0aWVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UXVhcnRpZXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UXVhcnRpZXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UXVhcnRpZXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxRdWFydGllcj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxRdWFydGllcj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxRdWFydGllcj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UXVhcnRpZXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBVdGlsaXNhdGV1ciB9IGZyb20gJy4uL19kdG9zL3V0aWxpc2F0ZXVyJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ2FkbWluVXNlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxpc2F0ZXVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxVdGlsaXNhdGV1cj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxVdGlsaXNhdGV1cj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFV0aWxpc2F0ZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFV0aWxpc2F0ZXVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFV0aWxpc2F0ZXVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VXRpbGlzYXRldXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8VXRpbGlzYXRldXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VXRpbGlzYXRldXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFV0aWxpc2F0ZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL19kdG9zL3Byb2ZpbGUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnYWRtaW5Qcm9maWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UHJvZmlsZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQcm9maWxlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UHJvZmlsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxQcm9maWxlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFByb2ZpbGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxQcm9maWxlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFByb2ZpbGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UHJvZmlsZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UHJvZmlsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IEZvbmN0aW9ubmFsaXRlIH0gZnJvbSAnLi4vX2R0b3MvZm9uY3Rpb25uYWxpdGUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnYWRtaW5Gb25jdGlvbm5hbGl0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIEZvbmN0aW9ubmFsaXRlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxGb25jdGlvbm5hbGl0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGb25jdGlvbm5hbGl0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZvbmN0aW9ubmFsaXRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEZvbmN0aW9ubmFsaXRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZvbmN0aW9ubmFsaXRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Rm9uY3Rpb25uYWxpdGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Rm9uY3Rpb25uYWxpdGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Rm9uY3Rpb25uYWxpdGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZvbmN0aW9ubmFsaXRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUHJvZmlsZUZvbmN0aW9ubmFsaXRlIH0gZnJvbSAnLi4vX2R0b3MvcHJvZmlsZS1mb25jdGlvbm5hbGl0ZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdhZG1pblByb2ZpbGVGb25jdGlvbm5hbGl0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVGb25jdGlvbm5hbGl0ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UHJvZmlsZUZvbmN0aW9ubmFsaXRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFByb2ZpbGVGb25jdGlvbm5hbGl0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFByb2ZpbGVGb25jdGlvbm5hbGl0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxQcm9maWxlRm9uY3Rpb25uYWxpdGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UHJvZmlsZUZvbmN0aW9ubmFsaXRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UHJvZmlsZUZvbmN0aW9ubmFsaXRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFByb2ZpbGVGb25jdGlvbm5hbGl0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQcm9maWxlRm9uY3Rpb25uYWxpdGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFByb2ZpbGVGb25jdGlvbm5hbGl0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFNpdGUgfSBmcm9tICcuLi9fZHRvcy9zaXRlJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3BhcmFtU2l0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFNpdGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8U2l0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNpdGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8U2l0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxTaXRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8U2l0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxTaXRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFNpdGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNpdGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0UGFyYW1TaXRlKHJlcXVlc3Q6IFJlcXVlc3Q8U2l0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxTaXRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldFBhcmFtU2l0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNpdGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBGb3Vybmlzc2V1ciB9IGZyb20gJy4uL19kdG9zL2ZvdXJuaXNzZXVyJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3BhcmFtRm91cm5pc3NldXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBGb3Vybmlzc2V1clNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Rm91cm5pc3NldXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Rm91cm5pc3NldXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxGb3Vybmlzc2V1cj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxGb3Vybmlzc2V1cj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGb3Vybmlzc2V1cj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZvdXJuaXNzZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PEZvdXJuaXNzZXVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZvdXJuaXNzZXVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxGb3Vybmlzc2V1cj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IE1vZGVsZSB9IGZyb20gJy4uL19kdG9zL21vZGVsZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbU1vZGVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIE1vZGVsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8TW9kZWxlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE1vZGVsZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE1vZGVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxNb2RlbGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8TW9kZWxlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8TW9kZWxlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PE1vZGVsZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxNb2RlbGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE1vZGVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IENhcmFjdGVyaXN0aXF1ZSB9IGZyb20gJy4uL19kdG9zL2NhcmFjdGVyaXN0aXF1ZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbUNhcmFjdGVyaXN0aXF1ZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJhY3RlcmlzdGlxdWVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENhcmFjdGVyaXN0aXF1ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDYXJhY3RlcmlzdGlxdWU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDYXJhY3RlcmlzdGlxdWU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Q2FyYWN0ZXJpc3RpcXVlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENhcmFjdGVyaXN0aXF1ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhcmFjdGVyaXN0aXF1ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxDYXJhY3RlcmlzdGlxdWU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2FyYWN0ZXJpc3RpcXVlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDYXJhY3RlcmlzdGlxdWU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBPZmZyZSB9IGZyb20gJy4uL19kdG9zL29mZnJlJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3BhcmFtT2ZmcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBPZmZyZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8T2ZmcmU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8T2ZmcmU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPZmZyZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxPZmZyZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxPZmZyZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE9mZnJlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PE9mZnJlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE9mZnJlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPZmZyZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgT2x0IH0gZnJvbSAnLi4vX2R0b3Mvb2x0JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIE9sdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8T2x0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE9sdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE9sdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxPbHQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8T2x0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8T2x0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PE9sdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxPbHQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE9sdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IEJhaWUgfSBmcm9tICcuLi9fZHRvcy9iYWllJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdEJhaWUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBCYWllU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxCYWllPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEJhaWU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxCYWllPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEJhaWU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8QmFpZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEJhaWU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8QmFpZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxCYWllPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxCYWllPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgQ2hhc3NpcyB9IGZyb20gJy4uL19kdG9zL2NoYXNzaXMnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnb2x0Q2hhc3Npcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIENoYXNzaXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENoYXNzaXM+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2hhc3Npcz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENoYXNzaXM+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Q2hhc3Npcz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDaGFzc2lzPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Q2hhc3Npcz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxDaGFzc2lzPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENoYXNzaXM+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENoYXNzaXM+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0QWxsSW5mb3MocmVxdWVzdDogUmVxdWVzdDxDaGFzc2lzPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENoYXNzaXM+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QWxsSW5mb3MnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDaGFzc2lzPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgQ2FydGUgfSBmcm9tICcuLi9fZHRvcy9jYXJ0ZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdvbHRDYXJ0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIENhcnRlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxDYXJ0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDYXJ0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhcnRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENhcnRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENhcnRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Q2FydGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Q2FydGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2FydGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhcnRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldE9sdENhcnRlUG9ydFBoeXNpcXVlKHJlcXVlc3Q6IFJlcXVlc3Q8Q2FydGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2FydGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0T2x0Q2FydGVQb3J0UGh5c2lxdWUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDYXJ0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFBvcnQgfSBmcm9tICcuLi9fZHRvcy9wb3J0JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdFBvcnRQaHlzaXF1ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFBvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0T2x0UG9ydFBoeXNpcXVlKHJlcXVlc3Q6IFJlcXVlc3Q8UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldE9sdFBvcnRQaHlzaXF1ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9fZHRvcy9yb3V0ZXInO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnb2x0Um91dGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxSb3V0ZXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um91dGVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um91dGVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJvdXRlcj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3V0ZXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3V0ZXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Um91dGVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdXRlcj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um91dGVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUm91dGVyQ2FydGUgfSBmcm9tICcuLi9fZHRvcy9yb3V0ZXItY2FydGUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnb2x0Um91dGVyQ2FydGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZXJDYXJ0ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um91dGVyQ2FydGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um91dGVyQ2FydGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3V0ZXJDYXJ0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb3V0ZXJDYXJ0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3V0ZXJDYXJ0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvdXRlckNhcnRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvdXRlckNhcnRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdXRlckNhcnRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3V0ZXJDYXJ0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvdXRlclBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb3V0ZXItcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdvbHRSb3V0ZXJQb3J0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVyUG9ydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um91dGVyUG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3V0ZXJQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um91dGVyUG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb3V0ZXJQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdXRlclBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3V0ZXJQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvdXRlclBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um91dGVyUG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um91dGVyUG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgT250IH0gZnJvbSAnLi4vX2R0b3Mvb250JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdFBvcnRMb2dpcXVlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgT250U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxPbnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8T250PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8T250PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PE9udD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxPbnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPbnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8T250Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE9udD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8T250PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgT2x0TGluayB9IGZyb20gJy4uL19kdG9zL29sdC1saW5rJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdExpbmsnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBPbHRMaW5rU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxPbHRMaW5rPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE9sdExpbms+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPbHRMaW5rPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PE9sdExpbms+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8T2x0TGluaz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE9sdExpbms+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8T2x0TGluaz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxPbHRMaW5rPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPbHRMaW5rPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUmZvIH0gZnJvbSAnLi4vX2R0b3MvcmZvJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Jmbyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFJmb1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UmZvPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJmbz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJmbz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSZm8+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UmZvPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UmZvPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJmbz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSZm8+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJmbz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvZSB9IGZyb20gJy4uL19kdG9zL3JvZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9Sb2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBSb2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJvZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb2U+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2U+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um9lPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxSb2U+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um9lPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2U+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb3QgfSBmcm9tICcuLi9fZHRvcy9yb3QnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAncmZvUm90JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm90U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxSb3Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um90PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJvdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Um90Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUm9lTW9kdWxlIH0gZnJvbSAnLi4vX2R0b3Mvcm9lLW1vZHVsZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9Sb2VNb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBSb2VNb2R1bGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJvZU1vZHVsZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb2VNb2R1bGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2VNb2R1bGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um9lTW9kdWxlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvZU1vZHVsZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvZU1vZHVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxSb2VNb2R1bGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um9lTW9kdWxlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2VNb2R1bGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb3RNb2R1bGUgfSBmcm9tICcuLi9fZHRvcy9yb3QtbW9kdWxlJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Jmb1JvdE1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFJvdE1vZHVsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um90TW9kdWxlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdE1vZHVsZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvdE1vZHVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb3RNb2R1bGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um90TW9kdWxlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90TW9kdWxlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvdE1vZHVsZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3RNb2R1bGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvdE1vZHVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvZVBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb2UtcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9Sb2VQb3J0TW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm9lUG9ydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um9lUG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb2VQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um9lUG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb2VQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvZVBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2VQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvZVBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um9lUG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um9lUG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvdFBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb3QtcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9Sb3RQb3J0TW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm90UG9ydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um90UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3RQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90UG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb3RQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdFBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3RQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvdFBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um90UG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90UG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXRSZm9Sb3RQb3J0TW9kdWxlKHJlcXVlc3Q6IFJlcXVlc3Q8Um90UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3RQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldFJmb1JvdFBvcnRNb2R1bGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3RQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSZm9KYXJyZXRpZXJlIH0gZnJvbSAnLi4vX2R0b3MvcmZvLWphcnJldGllcmUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAncmZvSmFycmV0aWVyZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFJmb0phcnJldGllcmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJmb0phcnJldGllcmU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UmZvSmFycmV0aWVyZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJmb0phcnJldGllcmU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UmZvSmFycmV0aWVyZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSZm9KYXJyZXRpZXJlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UmZvSmFycmV0aWVyZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxSZm9KYXJyZXRpZXJlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJmb0phcnJldGllcmU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJmb0phcnJldGllcmU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBDYWJsZVRyYW5zcG9ydCB9IGZyb20gJy4uL19kdG9zL2NhYmxlLXRyYW5zcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9DYWJsZVRyYW5zcG9ydCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIENhYmxlVHJhbnNwb3J0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxDYWJsZVRyYW5zcG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDYWJsZVRyYW5zcG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhYmxlVHJhbnNwb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENhYmxlVHJhbnNwb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENhYmxlVHJhbnNwb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Q2FibGVUcmFuc3BvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Q2FibGVUcmFuc3BvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2FibGVUcmFuc3BvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhYmxlVHJhbnNwb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgU3JvIH0gZnJvbSAnLi4vX2R0b3Mvc3JvJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Nybyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFNyb1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8U3JvPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFNybz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNybz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxTcm8+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8U3JvPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8U3JvPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFNybz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxTcm8+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNybz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFBiIH0gZnJvbSAnLi4vX2R0b3MvcGInO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvUGInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBQYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UGI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UGI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxQYj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxQYj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQYj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFBiPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFBiPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFBiPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxQYj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgVHR0IH0gZnJvbSAnLi4vX2R0b3MvdHR0JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Nyb1Rpcm9pclRyYW5zaXRpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBUdHRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFR0dD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUdHQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUdHQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VHR0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFR0dD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFR0dD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxUdHQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VHR0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUdHQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUdHRQb3J0IH0gZnJvbSAnLi4vX2R0b3MvdHR0LXBvcnQnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvUG9ydFRpcm9pclRyYW5zaXRpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBUdHRQb3J0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxUdHRQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFR0dFBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUdHRQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFR0dFBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VHR0UG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFR0dFBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8VHR0UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUdHRQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUdHRQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUb3RQbG90IH0gZnJvbSAnLi4vX2R0b3MvdG90LXBsb3QnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvUGxvdFRyYW5zcG9ydCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFRvdFBsb3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFRvdFBsb3Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG90UGxvdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvdFBsb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VG90UGxvdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb3RQbG90PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG90UGxvdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxUb3RQbG90Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvdFBsb3Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvdFBsb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFRvZFBsb3QgfSBmcm9tICcuLi9fZHRvcy90b2QtcGxvdCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdzcm9QbG90RGlzdHJpYnV0aW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgVG9kUGxvdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VG9kUGxvdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb2RQbG90PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG9kUGxvdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxUb2RQbG90Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvZFBsb3Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb2RQbG90PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFRvZFBsb3Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG9kUGxvdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG9kUGxvdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFRvdCB9IGZyb20gJy4uL19kdG9zL3RvdCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdzcm9UaXJvaXJUcmFuc3BvcnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBUb3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFRvdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb3Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VG90Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxUb3Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG90PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUb2QgfSBmcm9tICcuLi9fZHRvcy90b2QnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvVGlyb2lyRGlzdHJpYnV0aW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgVG9kU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxUb2Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG9kPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG9kPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFRvZD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb2Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb2Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8VG9kPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvZD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG9kPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgVG90Q291cGxldXIgfSBmcm9tICcuLi9fZHRvcy90b3QtY291cGxldXInO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvVGlyb2lyVHJhbnNwb3J0Q291cGxldXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBUb3RDb3VwbGV1clNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VG90Q291cGxldXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG90Q291cGxldXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb3RDb3VwbGV1cj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxUb3RDb3VwbGV1cj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb3RDb3VwbGV1cj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvdENvdXBsZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFRvdENvdXBsZXVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvdENvdXBsZXVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb3RDb3VwbGV1cj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgRmUgfSBmcm9tICcuLi9fZHRvcy9mZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9GZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIEZlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxGZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEZlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8RmU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8RmU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8RmU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBGdCB9IGZyb20gJy4uL19kdG9zL2Z0JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Jmb0Z0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgRnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEZ0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZ0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8RnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8RnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8RnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxGdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxGdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8RnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUcmF2ZWUgfSBmcm9tICcuLi9fZHRvcy90cmF2ZWUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAncmZvVHJhdmVlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgVHJhdmVlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxUcmF2ZWU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VHJhdmVlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VHJhdmVlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFRyYXZlZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUcmF2ZWU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUcmF2ZWU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8VHJhdmVlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRyYXZlZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VHJhdmVlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBDb3VsZXVyIH0gZnJvbSAnLi4vX2R0b3MvY291bGV1cic7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbUNvdWxldXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBDb3VsZXVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxDb3VsZXVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENvdWxldXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDb3VsZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENvdWxldXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q291bGV1cj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENvdWxldXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Q291bGV1cj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDb3VsZXVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDb3VsZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgRmlicmVDYWJsZVRyYW5zcG9ydCB9IGZyb20gJy4uL19kdG9zL2ZpYnJlLWNhYmxlLXRyYW5zcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9GaWJyZVRyYW5zcG9ydCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIEZpYnJlQ2FibGVUcmFuc3BvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEZpYnJlQ2FibGVUcmFuc3BvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8RmlicmVDYWJsZVRyYW5zcG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZpYnJlQ2FibGVUcmFuc3BvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8RmlicmVDYWJsZVRyYW5zcG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGaWJyZUNhYmxlVHJhbnNwb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8RmlicmVDYWJsZVRyYW5zcG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxGaWJyZUNhYmxlVHJhbnNwb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZpYnJlQ2FibGVUcmFuc3BvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZpYnJlQ2FibGVUcmFuc3BvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgRm9uY3Rpb25uYWxpdGUgfSBmcm9tICcuLi9fZHRvcy9mb25jdGlvbm5hbGl0ZSc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi4vX2R0b3MvcHJvZmlsZSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlUmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8UHJvZmlsZT4ge1xuXG4gICAgcHVibGljIGRhdGFzQWRtaW5Gb25jdGlvbm5hbGl0ZTogQXJyYXk8Rm9uY3Rpb25uYWxpdGU+O1xuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvdXRlckNhcnRlIH0gZnJvbSAnLi4vX2R0b3Mvcm91dGVyLWNhcnRlJztcbmltcG9ydCB7IFJvdXRlclBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb3V0ZXItcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJDYXJ0ZVJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0PFJvdXRlckNhcnRlPiB7XG5cbiAgICBwdWJsaWMgZGF0YXNPbHRSb3V0ZXJQb3J0OiBBcnJheTxSb3V0ZXJQb3J0PjtcblxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb3V0ZXJDYXJ0ZSB9IGZyb20gJy4uL19kdG9zL3JvdXRlci1jYXJ0ZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9fZHRvcy9yb3V0ZXInO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyUmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8Um91dGVyPiB7XG5cbiAgICBwdWJsaWMgZGF0YXNPbHRSb3V0ZXJDYXJ0ZTogQXJyYXk8Um91dGVyQ2FydGU+O1xuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IENhcmFjdGVyaXN0aXF1ZSB9IGZyb20gJy4uL19kdG9zL2NhcmFjdGVyaXN0aXF1ZSc7XG5pbXBvcnQgeyBNb2RlbGUgfSBmcm9tICcuLi9fZHRvcy9tb2RlbGUnO1xuXG5leHBvcnQgY2xhc3MgTW9kZWxlUmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8TW9kZWxlPiB7XG5cbiAgICBwdWJsaWMgZGF0YXNQYXJhbUNhcmFjdGVyaXN0aXF1ZTogQXJyYXk8Q2FyYWN0ZXJpc3RpcXVlPjtcblxufVxuIiwiXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFNpdGUgfSBmcm9tICcuLi9fZHRvcy9zaXRlJztcbmltcG9ydCB7IFF1YXJ0aWVyIH0gZnJvbSAnLi4vX2R0b3MvcXVhcnRpZXInO1xuXG5leHBvcnQgY2xhc3MgUXVhcnRpZXJSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxRdWFydGllcj4ge1xuXG4gICAgcHVibGljIGRhdGFzUGFyYW1TaXRlOiBBcnJheTxTaXRlPjtcblxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBDYXJ0ZSB9IGZyb20gJy4uL19kdG9zL2NhcnRlJztcbmltcG9ydCB7IFBvcnQgfSBmcm9tICcuLi9fZHRvcy9wb3J0JztcblxuZXhwb3J0IGNsYXNzIENhcnRlUmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8Q2FydGU+IHtcblxuICAgIHB1YmxpYyBkYXRhc09sdFBvcnRQaHlzaXF1ZTogQXJyYXk8UG9ydD47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgT2x0IH0gZnJvbSAnLi4vX2R0b3Mvb2x0JztcbmltcG9ydCB7IEJhaWUgfSBmcm9tICcuLi9fZHRvcy9iYWllJztcblxuZXhwb3J0IGNsYXNzIE9sdFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0PE9sdD4ge1xuXG4gICAgcHVibGljIGRhdGFzT2x0QmFpZTogQXJyYXk8QmFpZT47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUm9lTW9kdWxlIH0gZnJvbSAnLi4vX2R0b3Mvcm9lLW1vZHVsZSc7XG5pbXBvcnQgeyBSb2VQb3J0IH0gZnJvbSAnLi4vX2R0b3Mvcm9lLXBvcnQnO1xuXG5leHBvcnQgY2xhc3MgUm9lTW9kdWxlUmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8Um9lTW9kdWxlPiB7XG5cbiAgICBwdWJsaWMgZGF0YXNSZm9Sb2VQb3J0TW9kdWxlOiBBcnJheTxSb2VQb3J0PjtcblxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb3RNb2R1bGUgfSBmcm9tICcuLi9fZHRvcy9yb3QtbW9kdWxlJztcbmltcG9ydCB7IFJvdFBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb3QtcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBSb3RNb2R1bGVSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxSb3RNb2R1bGU+IHtcblxuICAgIHB1YmxpYyBkYXRhc1Jmb1JvdFBvcnRNb2R1bGU6IEFycmF5PFJvdFBvcnQ+O1xuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IENhYmxlVHJhbnNwb3J0IH0gZnJvbSAnLi4vX2R0b3MvY2FibGUtdHJhbnNwb3J0JztcbmltcG9ydCB7IEZpYnJlQ2FibGVUcmFuc3BvcnQgfSBmcm9tICcuLi9fZHRvcy9maWJyZS1jYWJsZS10cmFuc3BvcnQnO1xuXG5leHBvcnQgY2xhc3MgQ2FibGVUcmFuc3BvcnRSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxDYWJsZVRyYW5zcG9ydD4ge1xuXG4gICAgcHVibGljIGRhdGFzUmZvRmlicmVUcmFuc3BvcnQ6IEFycmF5PEZpYnJlQ2FibGVUcmFuc3BvcnQ+O1xuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFR0dFBvcnQgfSBmcm9tICcuLi9fZHRvcy90dHQtcG9ydCc7XG5pbXBvcnQgeyBUdHQgfSBmcm9tICcuLi9fZHRvcy90dHQnO1xuXG5leHBvcnQgY2xhc3MgVHR0UmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8VHR0PiB7XG5cbiAgICBwdWJsaWMgZGF0YXNTcm9Qb3J0VGlyb2lyVHJhbnNpdGlvbjogQXJyYXk8VHR0UG9ydD47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgVG90UGxvdCB9IGZyb20gJy4uL19kdG9zL3RvdC1wbG90JztcbmltcG9ydCB7IFRvdCB9IGZyb20gJy4uL19kdG9zL3RvdCc7XG5pbXBvcnQgeyBUb3RDb3VwbGV1ciB9IGZyb20gJy4uL19kdG9zL3RvdC1jb3VwbGV1cic7XG5cbmV4cG9ydCBjbGFzcyBUb3RSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxUb3Q+IHtcblxuICAgIHB1YmxpYyBkYXRhc1Nyb1Bsb3RUcmFuc3BvcnQ6IEFycmF5PFRvdFBsb3Q+O1xuICAgIHB1YmxpYyBkYXRhc1Nyb1Rpcm9pclRyYW5zcG9ydENvdXBsZXVyOiBBcnJheTxUb3RDb3VwbGV1cj47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgVG9kUGxvdCB9IGZyb20gJy4uL19kdG9zL3RvZC1wbG90JztcbmltcG9ydCB7IFRvZCB9IGZyb20gJy4uL19kdG9zL3RvZCc7XG5cbmV4cG9ydCBjbGFzcyBUb2RSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxUb2Q+IHtcblxuICAgIHB1YmxpYyBkYXRhc1Nyb1Bsb3REaXN0cmlidXRpb246IEFycmF5PFRvZFBsb3Q+O1xuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFBiIH0gZnJvbSAnLi4vX2R0b3MvcGInO1xuaW1wb3J0IHsgQ2Fzc2V0dGVGaWJyZSB9IGZyb20gJy4uL19kdG9zL2Nhc3NldHRlLWZpYnJlJztcblxuZXhwb3J0IGNsYXNzIFBiUmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8UGI+IHtcblxuICAgIHB1YmxpYyBkYXRhc1Nyb0Nhc3NldHRlRmlicmU6IEFycmF5PENhc3NldHRlRmlicmU+O1xuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvZVBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb2UtcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBSb2VQb3J0UmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8Um9lUG9ydD4ge1xuXG4gICAgcHVibGljIG9wZXJhdG9yOiBzdHJpbmc7XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgVHR0UG9ydCB9IGZyb20gJy4uL19kdG9zL3R0dC1wb3J0JztcbmltcG9ydCB7IEZpYnJlQ2FibGVUcmFuc3BvcnQgfSBmcm9tICcuLi9fZHRvcy9maWJyZS1jYWJsZS10cmFuc3BvcnQnO1xuXG5leHBvcnQgY2xhc3MgVHR0UG9ydFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0PFR0dFBvcnQ+IHtcblxuICAgIHB1YmxpYyBkYXRhc1Jmb0ZpYnJlVHJhbnNwb3J0OiBBcnJheTxGaWJyZUNhYmxlVHJhbnNwb3J0PjtcblxufVxuIl0sIm5hbWVzIjpbIlJFUVVFU1RfTUFQUElORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O1lBSUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFlBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFLEVBQ1Y7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7YUFDakI7Ozs7Ozs7QUNaRDtDQU9DOzs7Ozs7QUNQRDtDQUtDOzs7Ozs7QUNMRDtDQU9DOzs7Ozs7QUNQRDtDQVNDOzs7Ozs7QUNURDtDQUtDOzs7Ozs7QUNMRDtDQU9DOzs7Ozs7QUNQRDtDQVFDOzs7Ozs7QUNSRDtDQVVDOzs7Ozs7QUNWRDtDQVFDOzs7Ozs7QUNORDtDQU9DOzs7Ozs7QUNURDtDQVFDOzs7Ozs7QUNSRDtDQU9DOzs7Ozs7QUNMRDtDQWVDOzs7Ozs7QUNmRDtDQU9DOzs7Ozs7QUNORDtDQVNDOzs7Ozs7QUNaRDtDQVNDOzs7Ozs7QUNQRDtDQVFDOzs7Ozs7QUNWRDtDQVVDOzs7Ozs7QUNSRDtDQVVDOzs7Ozs7QUNaRDtDQVFDOzs7Ozs7QUNSRDtDQU1DOzs7Ozs7QUNORDtDQVFDOzs7Ozs7QUNSRDtDQVdDOzs7Ozs7QUNYRDtDQVFDOzs7Ozs7QUNORDtDQVNDOzs7Ozs7QUNYRDtDQU9DOzs7Ozs7QUNQRDtDQVFDOzs7Ozs7QUNORDtDQVFDOzs7Ozs7QUNWRDtDQU1DOzs7Ozs7QUNORDtDQU9DOzs7Ozs7QUNQRDtDQVlDOzs7Ozs7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