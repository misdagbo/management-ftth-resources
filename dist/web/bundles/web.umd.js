(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('helper')) :
    typeof define === 'function' && define.amd ? define('web', ['exports', '@angular/core', '@angular/common/http', 'helper'], factory) :
    (factory((global.web = {}),global.ng.core,global.ng.common.http,null));
}(this, (function (exports,i0,http,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WebModule = (function () {
        function WebModule() {
        }
        WebModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            http.HttpClientModule,
                            i1.HelperModule
                        ],
                        providers: [],
                        declarations: []
                    },] },
        ];
        return WebModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Nro = (function () {
        function Nro() {
        }
        return Nro;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Commune = (function () {
        function Commune() {
        }
        return Commune;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Quartier = (function () {
        function Quartier() {
        }
        return Quartier;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Utilisateur = (function () {
        function Utilisateur() {
        }
        return Utilisateur;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Profile = (function () {
        function Profile() {
        }
        return Profile;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Fonctionnalite = (function () {
        function Fonctionnalite() {
        }
        return Fonctionnalite;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileFonctionnalite = (function () {
        function ProfileFonctionnalite() {
        }
        return ProfileFonctionnalite;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Site = (function () {
        function Site() {
        }
        return Site;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Fournisseur = (function () {
        function Fournisseur() {
        }
        return Fournisseur;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Modele = (function () {
        function Modele() {
        }
        return Modele;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Caracteristique = (function () {
        function Caracteristique() {
        }
        return Caracteristique;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Offre = (function () {
        function Offre() {
        }
        return Offre;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Olt = (function () {
        function Olt() {
        }
        return Olt;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Baie = (function () {
        function Baie() {
        }
        return Baie;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Chassis = (function () {
        function Chassis() {
        }
        return Chassis;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Carte = (function () {
        function Carte() {
        }
        return Carte;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Port = (function () {
        function Port() {
        }
        return Port;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Router = (function () {
        function Router() {
        }
        return Router;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RouterCarte = (function () {
        function RouterCarte() {
        }
        return RouterCarte;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RouterPort = (function () {
        function RouterPort() {
        }
        return RouterPort;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ont = (function () {
        function Ont() {
        }
        return Ont;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var OltLink = (function () {
        function OltLink() {
        }
        return OltLink;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Rfo = (function () {
        function Rfo() {
        }
        return Rfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Roe = (function () {
        function Roe() {
        }
        return Roe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RoeModule = (function () {
        function RoeModule() {
        }
        return RoeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RoePort = (function () {
        function RoePort() {
        }
        return RoePort;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Rot = (function () {
        function Rot() {
        }
        return Rot;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RotModule = (function () {
        function RotModule() {
        }
        return RotModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RotPort = (function () {
        function RotPort() {
        }
        return RotPort;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RfoJarretiere = (function () {
        function RfoJarretiere() {
        }
        return RfoJarretiere;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CableTransport = (function () {
        function CableTransport() {
        }
        return CableTransport;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Sro = (function () {
        function Sro() {
        }
        return Sro;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Pb = (function () {
        function Pb() {
        }
        return Pb;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ttt = (function () {
        function Ttt() {
        }
        return Ttt;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TttPort = (function () {
        function TttPort() {
        }
        return TttPort;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Tot = (function () {
        function Tot() {
        }
        return Tot;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Tod = (function () {
        function Tod() {
        }
        return Tod;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TotPlot = (function () {
        function TotPlot() {
        }
        return TotPlot;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TodPlot = (function () {
        function TodPlot() {
        }
        return TodPlot;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TotCoupleur = (function () {
        function TotCoupleur() {
        }
        return TotCoupleur;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CassetteFibre = (function () {
        function CassetteFibre() {
        }
        return CassetteFibre;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Fe = (function () {
        function Fe() {
        }
        return Fe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ft = (function () {
        function Ft() {
        }
        return Ft;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Travee = (function () {
        function Travee() {
        }
        return Travee;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Couleur = (function () {
        function Couleur() {
        }
        return Couleur;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FibreCableTransport = (function () {
        function FibreCableTransport() {
        }
        return FibreCableTransport;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING = 'paramNro';
    var NroService = (function () {
        function NroService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        NroService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        NroService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        NroService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        NroService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        NroService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ NroService.ngInjectableDef = i0.defineInjectable({ factory: function NroService_Factory() { return new NroService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: NroService, providedIn: WebModule });
        return NroService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$1 = 'paramCommune';
    var CommuneService = (function () {
        function CommuneService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CommuneService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$1, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CommuneService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$1, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CommuneService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$1, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        CommuneService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        CommuneService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ CommuneService.ngInjectableDef = i0.defineInjectable({ factory: function CommuneService_Factory() { return new CommuneService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: CommuneService, providedIn: WebModule });
        return CommuneService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$2 = 'paramQuartier';
    var QuartierService = (function () {
        function QuartierService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        QuartierService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$2, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        QuartierService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$2, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        QuartierService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$2, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        QuartierService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        QuartierService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ QuartierService.ngInjectableDef = i0.defineInjectable({ factory: function QuartierService_Factory() { return new QuartierService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: QuartierService, providedIn: WebModule });
        return QuartierService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$3 = 'adminUser';
    var UtilisateurService = (function () {
        function UtilisateurService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        UtilisateurService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$3, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        UtilisateurService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$3, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        UtilisateurService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$3, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        UtilisateurService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        UtilisateurService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ UtilisateurService.ngInjectableDef = i0.defineInjectable({ factory: function UtilisateurService_Factory() { return new UtilisateurService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: UtilisateurService, providedIn: WebModule });
        return UtilisateurService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$4 = 'adminProfile';
    var ProfileService = (function () {
        function ProfileService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ProfileService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$4, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ProfileService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$4, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ProfileService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$4, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        ProfileService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        ProfileService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ ProfileService.ngInjectableDef = i0.defineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: ProfileService, providedIn: WebModule });
        return ProfileService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$5 = 'adminFonctionnalite';
    var FonctionnaliteService = (function () {
        function FonctionnaliteService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FonctionnaliteService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$5, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FonctionnaliteService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$5, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FonctionnaliteService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$5, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        FonctionnaliteService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        FonctionnaliteService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ FonctionnaliteService.ngInjectableDef = i0.defineInjectable({ factory: function FonctionnaliteService_Factory() { return new FonctionnaliteService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: FonctionnaliteService, providedIn: WebModule });
        return FonctionnaliteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$6 = 'adminProfileFonctionnalite';
    var ProfileFonctionnaliteService = (function () {
        function ProfileFonctionnaliteService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ProfileFonctionnaliteService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$6, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ProfileFonctionnaliteService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$6, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ProfileFonctionnaliteService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$6, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        ProfileFonctionnaliteService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        ProfileFonctionnaliteService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ ProfileFonctionnaliteService.ngInjectableDef = i0.defineInjectable({ factory: function ProfileFonctionnaliteService_Factory() { return new ProfileFonctionnaliteService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: ProfileFonctionnaliteService, providedIn: WebModule });
        return ProfileFonctionnaliteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$7 = 'paramSite';
    var SiteService = (function () {
        function SiteService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        SiteService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$7, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        SiteService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$7, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        SiteService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$7, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        SiteService.prototype.getParamSite = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$7, 'getParamSite');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        SiteService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        SiteService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ SiteService.ngInjectableDef = i0.defineInjectable({ factory: function SiteService_Factory() { return new SiteService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: SiteService, providedIn: WebModule });
        return SiteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$8 = 'paramFournisseur';
    var FournisseurService = (function () {
        function FournisseurService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FournisseurService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$8, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FournisseurService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$8, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FournisseurService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$8, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        FournisseurService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        FournisseurService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ FournisseurService.ngInjectableDef = i0.defineInjectable({ factory: function FournisseurService_Factory() { return new FournisseurService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: FournisseurService, providedIn: WebModule });
        return FournisseurService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$9 = 'paramModele';
    var ModeleService = (function () {
        function ModeleService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ModeleService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$9, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ModeleService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$9, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ModeleService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$9, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        ModeleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        ModeleService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ ModeleService.ngInjectableDef = i0.defineInjectable({ factory: function ModeleService_Factory() { return new ModeleService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: ModeleService, providedIn: WebModule });
        return ModeleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$a = 'paramCaracteristiques';
    var CaracteristiqueService = (function () {
        function CaracteristiqueService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CaracteristiqueService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$a, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CaracteristiqueService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$a, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CaracteristiqueService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$a, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        CaracteristiqueService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        CaracteristiqueService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ CaracteristiqueService.ngInjectableDef = i0.defineInjectable({ factory: function CaracteristiqueService_Factory() { return new CaracteristiqueService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: CaracteristiqueService, providedIn: WebModule });
        return CaracteristiqueService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$b = 'paramOffre';
    var OffreService = (function () {
        function OffreService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OffreService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$b, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OffreService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$b, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OffreService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$b, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        OffreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        OffreService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ OffreService.ngInjectableDef = i0.defineInjectable({ factory: function OffreService_Factory() { return new OffreService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: OffreService, providedIn: WebModule });
        return OffreService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$c = 'olt';
    var OltService = (function () {
        function OltService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OltService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$c, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OltService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$c, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OltService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$c, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        OltService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        OltService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ OltService.ngInjectableDef = i0.defineInjectable({ factory: function OltService_Factory() { return new OltService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: OltService, providedIn: WebModule });
        return OltService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$d = 'oltBaie';
    var BaieService = (function () {
        function BaieService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        BaieService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$d, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        BaieService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$d, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        BaieService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$d, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        BaieService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        BaieService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ BaieService.ngInjectableDef = i0.defineInjectable({ factory: function BaieService_Factory() { return new BaieService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: BaieService, providedIn: WebModule });
        return BaieService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$e = 'oltChassis';
    var ChassisService = (function () {
        function ChassisService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ChassisService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$e, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ChassisService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$e, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ChassisService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$e, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        ChassisService.prototype.getAllInfos = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$e, 'getAllInfos');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        ChassisService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        ChassisService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ ChassisService.ngInjectableDef = i0.defineInjectable({ factory: function ChassisService_Factory() { return new ChassisService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: ChassisService, providedIn: WebModule });
        return ChassisService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$f = 'oltCarte';
    var CarteService = (function () {
        function CarteService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CarteService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$f, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CarteService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$f, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CarteService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$f, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CarteService.prototype.getOltCartePortPhysique = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$f, 'getOltCartePortPhysique');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        CarteService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        CarteService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ CarteService.ngInjectableDef = i0.defineInjectable({ factory: function CarteService_Factory() { return new CarteService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: CarteService, providedIn: WebModule });
        return CarteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$g = 'oltPortPhysique';
    var PortService = (function () {
        function PortService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        PortService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$g, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        PortService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$g, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        PortService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$g, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        PortService.prototype.getOltPortPhysique = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$g, 'getOltPortPhysique');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        PortService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        PortService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ PortService.ngInjectableDef = i0.defineInjectable({ factory: function PortService_Factory() { return new PortService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: PortService, providedIn: WebModule });
        return PortService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$h = 'oltRouter';
    var RouterService = (function () {
        function RouterService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RouterService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$h, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RouterService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$h, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RouterService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$h, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RouterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RouterService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RouterService.ngInjectableDef = i0.defineInjectable({ factory: function RouterService_Factory() { return new RouterService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RouterService, providedIn: WebModule });
        return RouterService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$i = 'oltRouterCarte';
    var RouterCarteService = (function () {
        function RouterCarteService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RouterCarteService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$i, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RouterCarteService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$i, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RouterCarteService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$i, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RouterCarteService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RouterCarteService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RouterCarteService.ngInjectableDef = i0.defineInjectable({ factory: function RouterCarteService_Factory() { return new RouterCarteService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RouterCarteService, providedIn: WebModule });
        return RouterCarteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$j = 'oltRouterPort';
    var RouterPortService = (function () {
        function RouterPortService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RouterPortService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$j, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RouterPortService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$j, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RouterPortService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$j, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RouterPortService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RouterPortService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RouterPortService.ngInjectableDef = i0.defineInjectable({ factory: function RouterPortService_Factory() { return new RouterPortService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RouterPortService, providedIn: WebModule });
        return RouterPortService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$k = 'oltPortLogique';
    var OntService = (function () {
        function OntService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OntService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$k, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OntService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$k, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OntService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$k, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        OntService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        OntService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ OntService.ngInjectableDef = i0.defineInjectable({ factory: function OntService_Factory() { return new OntService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: OntService, providedIn: WebModule });
        return OntService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$l = 'oltLink';
    var OltLinkService = (function () {
        function OltLinkService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OltLinkService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$l, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OltLinkService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$l, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        OltLinkService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$l, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        OltLinkService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        OltLinkService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ OltLinkService.ngInjectableDef = i0.defineInjectable({ factory: function OltLinkService_Factory() { return new OltLinkService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: OltLinkService, providedIn: WebModule });
        return OltLinkService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$m = 'rfo';
    var RfoService = (function () {
        function RfoService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RfoService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$m, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RfoService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$m, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RfoService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$m, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RfoService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RfoService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RfoService.ngInjectableDef = i0.defineInjectable({ factory: function RfoService_Factory() { return new RfoService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RfoService, providedIn: WebModule });
        return RfoService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$n = 'rfoRoe';
    var RoeService = (function () {
        function RoeService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RoeService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$n, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RoeService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$n, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RoeService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$n, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RoeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RoeService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RoeService.ngInjectableDef = i0.defineInjectable({ factory: function RoeService_Factory() { return new RoeService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RoeService, providedIn: WebModule });
        return RoeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$o = 'rfoRot';
    var RotService = (function () {
        function RotService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$o, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$o, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$o, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RotService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RotService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RotService.ngInjectableDef = i0.defineInjectable({ factory: function RotService_Factory() { return new RotService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RotService, providedIn: WebModule });
        return RotService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$p = 'rfoRoeModule';
    var RoeModuleService = (function () {
        function RoeModuleService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RoeModuleService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$p, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RoeModuleService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$p, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RoeModuleService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$p, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RoeModuleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RoeModuleService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RoeModuleService.ngInjectableDef = i0.defineInjectable({ factory: function RoeModuleService_Factory() { return new RoeModuleService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RoeModuleService, providedIn: WebModule });
        return RoeModuleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$q = 'rfoRotModule';
    var RotModuleService = (function () {
        function RotModuleService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotModuleService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$q, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotModuleService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$q, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotModuleService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$q, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RotModuleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RotModuleService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RotModuleService.ngInjectableDef = i0.defineInjectable({ factory: function RotModuleService_Factory() { return new RotModuleService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RotModuleService, providedIn: WebModule });
        return RotModuleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$r = 'rfoRoePortModule';
    var RoePortService = (function () {
        function RoePortService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RoePortService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$r, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RoePortService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$r, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RoePortService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$r, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RoePortService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RoePortService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RoePortService.ngInjectableDef = i0.defineInjectable({ factory: function RoePortService_Factory() { return new RoePortService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RoePortService, providedIn: WebModule });
        return RoePortService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$s = 'rfoRotPortModule';
    var RotPortService = (function () {
        function RotPortService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotPortService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$s, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotPortService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$s, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotPortService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$s, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RotPortService.prototype.getRfoRotPortModule = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$s, 'getRfoRotPortModule');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RotPortService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RotPortService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RotPortService.ngInjectableDef = i0.defineInjectable({ factory: function RotPortService_Factory() { return new RotPortService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RotPortService, providedIn: WebModule });
        return RotPortService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$t = 'rfoJarretiere';
    var RfoJarretiereService = (function () {
        function RfoJarretiereService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RfoJarretiereService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$t, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RfoJarretiereService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$t, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        RfoJarretiereService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$t, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        RfoJarretiereService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        RfoJarretiereService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ RfoJarretiereService.ngInjectableDef = i0.defineInjectable({ factory: function RfoJarretiereService_Factory() { return new RfoJarretiereService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RfoJarretiereService, providedIn: WebModule });
        return RfoJarretiereService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$u = 'rfoCableTransport';
    var CableTransportService = (function () {
        function CableTransportService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CableTransportService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$u, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CableTransportService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$u, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CableTransportService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$u, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        CableTransportService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        CableTransportService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ CableTransportService.ngInjectableDef = i0.defineInjectable({ factory: function CableTransportService_Factory() { return new CableTransportService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: CableTransportService, providedIn: WebModule });
        return CableTransportService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$v = 'sro';
    var SroService = (function () {
        function SroService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        SroService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$v, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        SroService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$v, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        SroService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$v, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        SroService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        SroService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ SroService.ngInjectableDef = i0.defineInjectable({ factory: function SroService_Factory() { return new SroService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: SroService, providedIn: WebModule });
        return SroService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$w = 'sroPb';
    var PbService = (function () {
        function PbService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        PbService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$w, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        PbService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$w, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        PbService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$w, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        PbService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        PbService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ PbService.ngInjectableDef = i0.defineInjectable({ factory: function PbService_Factory() { return new PbService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: PbService, providedIn: WebModule });
        return PbService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$x = 'sroTiroirTransition';
    var TttService = (function () {
        function TttService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TttService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$x, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TttService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$x, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TttService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$x, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        TttService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        TttService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ TttService.ngInjectableDef = i0.defineInjectable({ factory: function TttService_Factory() { return new TttService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TttService, providedIn: WebModule });
        return TttService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$y = 'sroPortTiroirTransition';
    var TttPortService = (function () {
        function TttPortService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TttPortService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$y, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TttPortService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$y, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TttPortService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$y, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        TttPortService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        TttPortService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ TttPortService.ngInjectableDef = i0.defineInjectable({ factory: function TttPortService_Factory() { return new TttPortService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TttPortService, providedIn: WebModule });
        return TttPortService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$z = 'sroPlotTransport';
    var TotPlotService = (function () {
        function TotPlotService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TotPlotService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$z, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TotPlotService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$z, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TotPlotService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$z, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        TotPlotService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        TotPlotService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ TotPlotService.ngInjectableDef = i0.defineInjectable({ factory: function TotPlotService_Factory() { return new TotPlotService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TotPlotService, providedIn: WebModule });
        return TotPlotService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$A = 'sroPlotDistribution';
    var TodPlotService = (function () {
        function TodPlotService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TodPlotService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$A, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TodPlotService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$A, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TodPlotService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$A, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        TodPlotService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        TodPlotService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ TodPlotService.ngInjectableDef = i0.defineInjectable({ factory: function TodPlotService_Factory() { return new TodPlotService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TodPlotService, providedIn: WebModule });
        return TodPlotService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$B = 'sroTiroirTransport';
    var TotService = (function () {
        function TotService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TotService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$B, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TotService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$B, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TotService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$B, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        TotService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        TotService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ TotService.ngInjectableDef = i0.defineInjectable({ factory: function TotService_Factory() { return new TotService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TotService, providedIn: WebModule });
        return TotService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$C = 'sroTiroirDistribution';
    var TodService = (function () {
        function TodService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TodService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$C, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TodService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$C, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TodService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$C, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        TodService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        TodService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ TodService.ngInjectableDef = i0.defineInjectable({ factory: function TodService_Factory() { return new TodService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TodService, providedIn: WebModule });
        return TodService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$D = 'sroTiroirTransportCoupleur';
    var TotCoupleurService = (function () {
        function TotCoupleurService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TotCoupleurService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$D, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TotCoupleurService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$D, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TotCoupleurService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$D, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        TotCoupleurService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        TotCoupleurService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ TotCoupleurService.ngInjectableDef = i0.defineInjectable({ factory: function TotCoupleurService_Factory() { return new TotCoupleurService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TotCoupleurService, providedIn: WebModule });
        return TotCoupleurService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$E = 'rfoFe';
    var FeService = (function () {
        function FeService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FeService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$E, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FeService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$E, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FeService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$E, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        FeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        FeService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ FeService.ngInjectableDef = i0.defineInjectable({ factory: function FeService_Factory() { return new FeService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: FeService, providedIn: WebModule });
        return FeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$F = 'rfoFt';
    var FtService = (function () {
        function FtService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FtService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$F, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FtService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$F, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FtService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$F, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        FtService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        FtService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ FtService.ngInjectableDef = i0.defineInjectable({ factory: function FtService_Factory() { return new FtService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: FtService, providedIn: WebModule });
        return FtService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$G = 'rfoTravee';
    var TraveeService = (function () {
        function TraveeService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TraveeService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$G, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TraveeService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$G, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        TraveeService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$G, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        TraveeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        TraveeService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ TraveeService.ngInjectableDef = i0.defineInjectable({ factory: function TraveeService_Factory() { return new TraveeService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TraveeService, providedIn: WebModule });
        return TraveeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$H = 'paramCouleur';
    var CouleurService = (function () {
        function CouleurService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CouleurService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$H, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CouleurService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$H, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        CouleurService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$H, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        CouleurService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        CouleurService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ CouleurService.ngInjectableDef = i0.defineInjectable({ factory: function CouleurService_Factory() { return new CouleurService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: CouleurService, providedIn: WebModule });
        return CouleurService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ REQUEST_MAPPING$I = 'rfoFibreTransport';
    var FibreCableTransportService = (function () {
        function FibreCableTransportService(_httpService, _utilityService) {
            this._httpService = _httpService;
            this._utilityService = _utilityService;
        }
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FibreCableTransportService.prototype.create = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$I, 'create');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FibreCableTransportService.prototype.update = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$I, 'update');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'true',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
        FibreCableTransportService.prototype.get = /**
         * @param {?} request
         * @param {?} origin
         * @param {?} callback
         * @return {?}
         */
            function (request, origin, callback) {
                var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING$I, 'getByCriteria');
                var /** @type {?} */ _httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Show-Success-Message': 'false',
                        'Show-Loader': 'true',
                        'Show-Error-Message': 'true'
                    })
                };
                this._httpService.post(_url, request, _httpOptions)
                    .subscribe(function (response) { return callback(response); });
            };
        FibreCableTransportService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: WebModule
                    },] },
        ];
        /** @nocollapse */
        FibreCableTransportService.ctorParameters = function () {
            return [
                { type: i1.HttpRequestService, },
                { type: i1.UtilityService, },
            ];
        };
        /** @nocollapse */ FibreCableTransportService.ngInjectableDef = i0.defineInjectable({ factory: function FibreCableTransportService_Factory() { return new FibreCableTransportService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: FibreCableTransportService, providedIn: WebModule });
        return FibreCableTransportService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileRequest = (function (_super) {
        __extends(ProfileRequest, _super);
        function ProfileRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ProfileRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RouterCarteRequest = (function (_super) {
        __extends(RouterCarteRequest, _super);
        function RouterCarteRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RouterCarteRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RouterRequest = (function (_super) {
        __extends(RouterRequest, _super);
        function RouterRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RouterRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModeleRequest = (function (_super) {
        __extends(ModeleRequest, _super);
        function ModeleRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ModeleRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var QuartierRequest = (function (_super) {
        __extends(QuartierRequest, _super);
        function QuartierRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QuartierRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CarteRequest = (function (_super) {
        __extends(CarteRequest, _super);
        function CarteRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CarteRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var OltRequest = (function (_super) {
        __extends(OltRequest, _super);
        function OltRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return OltRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RoeModuleRequest = (function (_super) {
        __extends(RoeModuleRequest, _super);
        function RoeModuleRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RoeModuleRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RotModuleRequest = (function (_super) {
        __extends(RotModuleRequest, _super);
        function RotModuleRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RotModuleRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CableTransportRequest = (function (_super) {
        __extends(CableTransportRequest, _super);
        function CableTransportRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CableTransportRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TttRequest = (function (_super) {
        __extends(TttRequest, _super);
        function TttRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TttRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TotRequest = (function (_super) {
        __extends(TotRequest, _super);
        function TotRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TotRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TodRequest = (function (_super) {
        __extends(TodRequest, _super);
        function TodRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TodRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PbRequest = (function (_super) {
        __extends(PbRequest, _super);
        function PbRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PbRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RoePortRequest = (function (_super) {
        __extends(RoePortRequest, _super);
        function RoePortRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RoePortRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TttPortRequest = (function (_super) {
        __extends(TttPortRequest, _super);
        function TttPortRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TttPortRequest;
    }(i1.Request));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.WebModule = WebModule;
    exports.Nro = Nro;
    exports.Commune = Commune;
    exports.Quartier = Quartier;
    exports.Utilisateur = Utilisateur;
    exports.Profile = Profile;
    exports.Fonctionnalite = Fonctionnalite;
    exports.ProfileFonctionnalite = ProfileFonctionnalite;
    exports.Site = Site;
    exports.Fournisseur = Fournisseur;
    exports.Modele = Modele;
    exports.Caracteristique = Caracteristique;
    exports.Offre = Offre;
    exports.Olt = Olt;
    exports.Baie = Baie;
    exports.Chassis = Chassis;
    exports.Carte = Carte;
    exports.Port = Port;
    exports.Router = Router;
    exports.RouterCarte = RouterCarte;
    exports.RouterPort = RouterPort;
    exports.Ont = Ont;
    exports.OltLink = OltLink;
    exports.Rfo = Rfo;
    exports.Roe = Roe;
    exports.RoeModule = RoeModule;
    exports.RoePort = RoePort;
    exports.Rot = Rot;
    exports.RotModule = RotModule;
    exports.RotPort = RotPort;
    exports.RfoJarretiere = RfoJarretiere;
    exports.CableTransport = CableTransport;
    exports.Sro = Sro;
    exports.Pb = Pb;
    exports.Ttt = Ttt;
    exports.TttPort = TttPort;
    exports.Tot = Tot;
    exports.Tod = Tod;
    exports.TotPlot = TotPlot;
    exports.TodPlot = TodPlot;
    exports.TotCoupleur = TotCoupleur;
    exports.CassetteFibre = CassetteFibre;
    exports.Fe = Fe;
    exports.Ft = Ft;
    exports.Travee = Travee;
    exports.Couleur = Couleur;
    exports.FibreCableTransport = FibreCableTransport;
    exports.NroService = NroService;
    exports.CommuneService = CommuneService;
    exports.QuartierService = QuartierService;
    exports.UtilisateurService = UtilisateurService;
    exports.ProfileService = ProfileService;
    exports.FonctionnaliteService = FonctionnaliteService;
    exports.ProfileFonctionnaliteService = ProfileFonctionnaliteService;
    exports.SiteService = SiteService;
    exports.FournisseurService = FournisseurService;
    exports.ModeleService = ModeleService;
    exports.CaracteristiqueService = CaracteristiqueService;
    exports.OffreService = OffreService;
    exports.OltService = OltService;
    exports.BaieService = BaieService;
    exports.ChassisService = ChassisService;
    exports.CarteService = CarteService;
    exports.PortService = PortService;
    exports.RouterService = RouterService;
    exports.RouterCarteService = RouterCarteService;
    exports.RouterPortService = RouterPortService;
    exports.OntService = OntService;
    exports.OltLinkService = OltLinkService;
    exports.RfoService = RfoService;
    exports.RoeService = RoeService;
    exports.RotService = RotService;
    exports.RoeModuleService = RoeModuleService;
    exports.RotModuleService = RotModuleService;
    exports.RoePortService = RoePortService;
    exports.RotPortService = RotPortService;
    exports.RfoJarretiereService = RfoJarretiereService;
    exports.CableTransportService = CableTransportService;
    exports.SroService = SroService;
    exports.PbService = PbService;
    exports.TttService = TttService;
    exports.TttPortService = TttPortService;
    exports.TotPlotService = TotPlotService;
    exports.TodPlotService = TodPlotService;
    exports.TotService = TotService;
    exports.TodService = TodService;
    exports.TotCoupleurService = TotCoupleurService;
    exports.FeService = FeService;
    exports.FtService = FtService;
    exports.TraveeService = TraveeService;
    exports.CouleurService = CouleurService;
    exports.FibreCableTransportService = FibreCableTransportService;
    exports.ProfileRequest = ProfileRequest;
    exports.RouterCarteRequest = RouterCarteRequest;
    exports.RouterRequest = RouterRequest;
    exports.ModeleRequest = ModeleRequest;
    exports.QuartierRequest = QuartierRequest;
    exports.CarteRequest = CarteRequest;
    exports.OltRequest = OltRequest;
    exports.RoeModuleRequest = RoeModuleRequest;
    exports.RotModuleRequest = RotModuleRequest;
    exports.CableTransportRequest = CableTransportRequest;
    exports.TttRequest = TttRequest;
    exports.TotRequest = TotRequest;
    exports.TodRequest = TodRequest;
    exports.PbRequest = PbRequest;
    exports.RoePortRequest = RoePortRequest;
    exports.TttPortRequest = TttPortRequest;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vd2ViL2xpYi93ZWIubW9kdWxlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL25yby50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9jb21tdW5lLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3F1YXJ0aWVyLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3V0aWxpc2F0ZXVyLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3Byb2ZpbGUudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvZm9uY3Rpb25uYWxpdGUudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvcHJvZmlsZS1mb25jdGlvbm5hbGl0ZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9zaXRlLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2ZvdXJuaXNzZXVyLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL21vZGVsZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9jYXJhY3RlcmlzdGlxdWUudHMiLCJuZzovL3dlYi9saWIvX2R0b3Mvb2ZmcmUudHMiLCJuZzovL3dlYi9saWIvX2R0b3Mvb2x0LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL2JhaWUudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvY2hhc3Npcy50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9jYXJ0ZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9wb3J0LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3JvdXRlci50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9yb3V0ZXItY2FydGUudHMiLCJuZzovL3dlYi9saWIvX2R0b3Mvcm91dGVyLXBvcnQudHMiLCJuZzovL3dlYi9saWIvX2R0b3Mvb250LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL29sdC1saW5rLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3Jmby50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9yb2UudHMiLCJuZzovL3dlYi9saWIvX2R0b3Mvcm9lLW1vZHVsZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9yb2UtcG9ydC50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9yb3QudHMiLCJuZzovL3dlYi9saWIvX2R0b3Mvcm90LW1vZHVsZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9yb3QtcG9ydC50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9yZm8tamFycmV0aWVyZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9jYWJsZS10cmFuc3BvcnQudHMiLCJuZzovL3dlYi9saWIvX2R0b3Mvc3JvLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3BiLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3R0dC50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy90dHQtcG9ydC50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy90b3QudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvdG9kLnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3RvdC1wbG90LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3RvZC1wbG90LnRzIiwibmc6Ly93ZWIvbGliL19kdG9zL3RvdC1jb3VwbGV1ci50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9jYXNzZXR0ZS1maWJyZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9mZS50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9mdC50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy90cmF2ZWUudHMiLCJuZzovL3dlYi9saWIvX2R0b3MvY291bGV1ci50cyIsIm5nOi8vd2ViL2xpYi9fZHRvcy9maWJyZS1jYWJsZS10cmFuc3BvcnQudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL25yby5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9jb21tdW5lLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3F1YXJ0aWVyLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3V0aWxpc2F0ZXVyLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3Byb2ZpbGUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvZm9uY3Rpb25uYWxpdGUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcHJvZmlsZS1mb25jdGlvbm5hbGl0ZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9zaXRlLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL2ZvdXJuaXNzZXVyLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL21vZGVsZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9jYXJhY3RlcmlzdGlxdWUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvb2ZmcmUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvb2x0LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL2JhaWUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvY2hhc3Npcy5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9jYXJ0ZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9wb3J0LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3JvdXRlci5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9yb3V0ZXItY2FydGUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcm91dGVyLXBvcnQuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvb250LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL29sdC1saW5rLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3Jmby5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9yb2Uuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcm90LnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3JvZS1tb2R1bGUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvcm90LW1vZHVsZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9yb2UtcG9ydC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9yb3QtcG9ydC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9yZm8tamFycmV0aWVyZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9jYWJsZS10cmFuc3BvcnQuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvc3JvLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3BiLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3R0dC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy90dHQtcG9ydC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy90b3QtcGxvdC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy90b2QtcGxvdC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy90b3Quc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvdG9kLnNlcnZpY2UudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyb2xsZXJzL3RvdC1jb3VwbGV1ci5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9mZS5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9mdC5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy90cmF2ZWUuc2VydmljZS50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJvbGxlcnMvY291bGV1ci5zZXJ2aWNlLnRzIiwibmc6Ly93ZWIvbGliL19jb250cm9sbGVycy9maWJyZS1jYWJsZS10cmFuc3BvcnQuc2VydmljZS50cyIsbnVsbCwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvcHJvZmlsZS1yZXF1ZXN0LnRzIiwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvcm91dGVyLWNhcnRlLXJlcXVlc3QudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyYWN0cy9yb3V0ZXItcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL21vZGVsZS1yZXF1ZXN0LnRzIiwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvcXVhcnRpZXItcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL2NhcnRlLXJlcXVlc3QudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyYWN0cy9vbHQtcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL3JvZS1tb2R1bGUtcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL3JvdC1tb2R1bGUtcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL2NhYmxlLXRyYW5zcG9ydC1yZXF1ZXN0LnRzIiwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvdHR0LXJlcXVlc3QudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyYWN0cy90b3QtcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL3RvZC1yZXF1ZXN0LnRzIiwibmc6Ly93ZWIvbGliL19jb250cmFjdHMvcGItcmVxdWVzdC50cyIsIm5nOi8vd2ViL2xpYi9fY29udHJhY3RzL3JvZS1wb3J0LXJlcXVlc3QudHMiLCJuZzovL3dlYi9saWIvX2NvbnRyYWN0cy90dHQtcG9ydC1yZXF1ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnaGVscGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSGVscGVyTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFdlYk1vZHVsZSB7IH1cbiIsImV4cG9ydCBjbGFzcyBOcm8ge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgY29tbXVuZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXJhbUNvbW11bmVMaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBDb21tdW5lIHtcblxuICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFF1YXJ0aWVyIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsaWJlbGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbW11bmU6IG51bWJlcjtcbiAgICBwdWJsaWMgcGFyYW1Db21tdW5lTGliZWxsZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgVXRpbGlzYXRldXIge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBwdWJsaWMgbG9naW46IHN0cmluZztcbiAgICBwdWJsaWMgcHJvZmlsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhZG1pblByb2ZpbGVMaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9maWxlIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBGb25jdGlvbm5hbGl0ZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGliZWxsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwcm9maWxlOiBudW1iZXI7XG4gICAgcHVibGljIGFkbWluUHJvZmlsZUxpYmVsbGU6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFByb2ZpbGVGb25jdGlvbm5hbGl0ZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcHJvZmlsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBmb25jdGlvbm5hbGl0ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhZG1pblByb2ZpbGVMaWJlbGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGFkbWluRm9uY3Rpb25uYWxpdGVMaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBTaXRlIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsaWJlbGxlOiBzdHJpbmc7XG4gICAgcHVibGljIHF1YXJ0aWVyOiBudW1iZXI7XG4gICAgcHVibGljIGxhdGl0dWRlOiBzdHJpbmc7XG4gICAgcHVibGljIGxvbmdpdHVkZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbVF1YXJ0aWVyTGliZWxsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbUNvbW11bmVMaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBGb3Vybmlzc2V1ciB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcmFpc29uOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbnRhY3Q6IHN0cmluZztcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZztcbiAgICBwdWJsaWMgYWRyZXNzZTogc3RyaW5nO1xuXG59XG4iLCJpbXBvcnQgeyBTZWFyY2hQYXJhbSB9IGZyb20gJ2hlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbGUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIHJlZmVyZW5jZTogc3RyaW5nO1xuICAgIHB1YmxpYyBmb3Vybmlzc2V1cjogbnVtYmVyO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGVQYXJhbTogU2VhcmNoUGFyYW08U3RyaW5nPjtcbn1cbiIsImV4cG9ydCBjbGFzcyBDYXJhY3RlcmlzdGlxdWUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgdmFsZXVyOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgT2ZmcmUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgY29kZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkZWJpdDogc3RyaW5nO1xuXG59XG4iLCJpbXBvcnQgeyBCYWllIH0gZnJvbSAnLi9iYWllJztcblxuZXhwb3J0IGNsYXNzIE9sdCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbm9tOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgaXA6IHN0cmluZztcbiAgICBwdWJsaWMgbnJvOiBudW1iZXI7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsYXRpdHV0ZGU6IHN0cmluZztcbiAgICBwdWJsaWMgbG9uZ2l0dWRlOiBzdHJpbmc7XG4gICAgcHVibGljIHNsb3Q6IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1Ocm9MaWJlbGxlOiBzdHJpbmc7XG4gICAgcHVibGljIHBhcmFtTW9kZWxlUmVmZXJlbmNlOiBzdHJpbmc7XG4gICAgcHVibGljIG9sdEJhaWU6IEJhaWU7XG5cbn1cbiIsImltcG9ydCB7IENoYXNzaXMgfSBmcm9tICcuL2NoYXNzaXMnO1xuXG5leHBvcnQgY2xhc3MgQmFpZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIG9sdDogbnVtYmVyO1xuICAgIHB1YmxpYyBpdGVtc09sdENoYXNzaXM6IEFycmF5PENoYXNzaXM+O1xuXG59XG4iLCJpbXBvcnQgeyBPbHRMaW5rIH0gZnJvbSAnLi9vbHQtbGluayc7XG5pbXBvcnQgeyBDYXJ0ZSB9IGZyb20gJy4vY2FydGUnO1xuXG5leHBvcnQgY2xhc3MgQ2hhc3NpcyB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIGJhaWU6IG51bWJlcjtcbiAgICBwdWJsaWMgb2x0QmFpZU51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBpdGVtc09sdExpbms6IEFycmF5PE9sdExpbms+O1xuICAgIHB1YmxpYyBpdGVtc09sdENhcnRlOiBBcnJheTxDYXJ0ZT47XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBDYXJ0ZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBjaGFzc2lzOiBudW1iZXI7XG4gICAgcHVibGljIG9sdE5vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJpbXBvcnQgeyBPbnQgfSBmcm9tICcuL29udCc7XG5cbmV4cG9ydCBjbGFzcyBQb3J0IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgY2FydGU6IG51bWJlcjtcbiAgICBwdWJsaWMgb2x0Q2FydGVOdW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgaXRlbXNPbHRQb3J0TG9naXF1ZXM6IEFycmF5PE9udD47XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG5vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBpcDogc3RyaW5nO1xuICAgIHB1YmxpYyBtb2RlbGU6IG51bWJlcjtcbiAgICBwdWJsaWMgbnJvOiBudW1iZXI7XG4gICAgcHVibGljIHBhcmFtTnJvTGliZWxsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJpbXBvcnQgeyBSb3V0ZXJQb3J0IH0gZnJvbSAnLi9yb3V0ZXItcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJDYXJ0ZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIHJvdXRlcjogbnVtYmVyO1xuICAgIHB1YmxpYyBtb2RlbGU6IG51bWJlcjtcbiAgICBwdWJsaWMgb2x0Um91dGVyTm9tOiBzdHJpbmc7XG4gICAgcHVibGljIHBhcmFtTW9kZWxlUmVmZXJlbmNlOiBzdHJpbmc7XG4gICAgcHVibGljIGl0ZW1zT2x0Um91dGVyUG9ydDogQXJyYXk8Um91dGVyUG9ydD47XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBSb3V0ZXJQb3J0IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgcm91dGVyQ2FydGU6IHN0cmluZztcbiAgICBwdWJsaWMgb2x0TGluazogbnVtYmVyO1xuICAgIHB1YmxpYyBvbHRSb3V0ZXJDYXJ0ZU51bWVybzogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgT250IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgcG9ydFBoeXNpcXVlOiBudW1iZXI7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBPbHRMaW5rIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBzdGF0dXM6IG51bWJlcjtcbiAgICBwdWJsaWMgY2hhc3NpczogbnVtYmVyO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgUmZvIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBub206IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBucm86IG51bWJlcjtcbiAgICBwdWJsaWMgbW9kZWxlOiBudW1iZXI7XG4gICAgcHVibGljIGxhdGl0dXRkZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsb25naXR1ZGU6IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1Ocm9MaWJlbGxlOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBSb2Uge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBmZTogbnVtYmVyO1xuICAgIHB1YmxpYyByZm9GZU51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBtb2RlbGU6IG51bWJlcjtcblxufVxuIiwiaW1wb3J0IHsgUm9lUG9ydCB9IGZyb20gJy4vcm9lLXBvcnQnO1xuXG5leHBvcnQgY2xhc3MgUm9lTW9kdWxlIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgcm9lOiBudW1iZXI7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBpdGVtc1Jmb1JvZVBvcnRNb2R1bGU6IEFycmF5PFJvZVBvcnQ+O1xuICAgIHB1YmxpYyBzcGxpdHRlcjogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgUm9lUG9ydCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIHJvZU1vZHVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwb3J0UGh5c2lxdWU6IG51bWJlcjtcblxufVxuIiwiZXhwb3J0IGNsYXNzIFJvdCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIGZ0OiBudW1iZXI7XG4gICAgcHVibGljIHJmb0Z0TnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuXG59XG4iLCJpbXBvcnQgeyBSb3RQb3J0IH0gZnJvbSAnLi9yb3QtcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBSb3RNb2R1bGUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyByb3Q6IG51bWJlcjtcbiAgICBwdWJsaWMgbW9kZWxlOiBudW1iZXI7XG4gICAgcHVibGljIHJmb1JvdFBvcnRNb2R1bGU6IEFycmF5PFJvdFBvcnQ+O1xuXG59XG4iLCJleHBvcnQgY2xhc3MgUm90UG9ydCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIHJvdE1vZHVsZTogbnVtYmVyO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgUmZvSmFycmV0aWVyZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcm9lUG9ydE1vZHVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyByb3RQb3J0TW9kdWxlOiBudW1iZXI7XG4gICAgcHVibGljIHJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgQ2FibGVUcmFuc3BvcnQge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBtb2RlbGU6IG51bWJlcjtcbiAgICBwdWJsaWMgZmlicmU6IG51bWJlcjtcbiAgICBwdWJsaWMgcmZvOiBudW1iZXI7XG4gICAgcHVibGljIHJmb05vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU5yb0lkOiBudW1iZXI7XG4gICAgcHVibGljIHBhcmFtTnJvTGliZWxsZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgU3JvIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBub206IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBucm86IG51bWJlcjtcbiAgICBwdWJsaWMgbGF0aXR1dGRlOiBzdHJpbmc7XG4gICAgcHVibGljIGxvbmdpdHVkZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU5yb0xpYmVsbGU6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFBiIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgbGF0aXR1dGRlOiBzdHJpbmc7XG4gICAgcHVibGljIGxvbmdpdHVkZTogc3RyaW5nO1xuICAgIHB1YmxpYyBzaXRlOiBudW1iZXI7XG4gICAgcHVibGljIHNybzogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXJhbU5yb0xpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1TaXRlTGliZWxsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgVHR0IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgc3JvOiBudW1iZXI7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBzcm9Ob206IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1Nb2RlbGVSZWZlcmVuY2U6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFR0dFBvcnQge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXJvaXJUcmFuc2l0aW9uOiBudW1iZXI7XG4gICAgcHVibGljIGZpYnJlVHJhbnNwb3J0OiBudW1iZXI7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBUb3Qge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyBzcm86IG51bWJlcjtcbiAgICBwdWJsaWMgbW9kZWxlOiBudW1iZXI7XG4gICAgcHVibGljIHNyb05vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbU1vZGVsZVJlZmVyZW5jZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgVG9kIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgc3JvOiBudW1iZXI7XG4gICAgcHVibGljIG1vZGVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBzcm9Ob206IHN0cmluZztcbiAgICBwdWJsaWMgcGFyYW1Nb2RlbGVSZWZlcmVuY2U6IHN0cmluZztcblxufVxuIiwiZXhwb3J0IGNsYXNzIFRvdFBsb3Qge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXJvaXJUcmFuc3BvcnQ6IG51bWJlcjtcblxufVxuIiwiZXhwb3J0IGNsYXNzIFRvZFBsb3Qge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXJvaXJEaXN0cmlidXRpb246IG51bWJlcjtcbiAgICBwdWJsaWMgc3RhdHVzOiBudW1iZXI7XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBUb3RDb3VwbGV1ciB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIHRpcm9pclRyYW5zcG9ydDogbnVtYmVyO1xuICAgIHB1YmxpYyBwb3J0VGlyb2lyVHJhbnNpdGlvbjogbnVtYmVyO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgQ2Fzc2V0dGVGaWJyZSB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIGNvdWxldXI6IG51bWJlcjtcbiAgICBwdWJsaWMgcGxvdERpc3RyaWJ1dGlvbjogbnVtYmVyO1xuICAgIHB1YmxpYyBjYXNzZXR0ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBzcm9DYXNzZXR0ZU51bWVybzogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgRmUge1xuXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG51bWVybzogc3RyaW5nO1xuICAgIHB1YmxpYyB0cmF2ZWU6IG51bWJlcjtcbiAgICBwdWJsaWMgcmZvVHJhdmVlTnVtZXJvOiBzdHJpbmc7XG5cbn1cbiIsIlxuZXhwb3J0IGNsYXNzIEZ0IHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgdHJhdmVlOiBudW1iZXI7XG4gICAgcHVibGljIHJmb1RyYXZlZU51bWVybzogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgVHJhdmVlIHtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1lcm86IHN0cmluZztcbiAgICBwdWJsaWMgcmZvOiBudW1iZXI7XG4gICAgcHVibGljIHJmb05vbTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgQ291bGV1ciB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGliZWxsZTogc3RyaW5nO1xuXG59XG4iLCJleHBvcnQgY2xhc3MgRmlicmVDYWJsZVRyYW5zcG9ydCB7XG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtZXJvOiBzdHJpbmc7XG4gICAgcHVibGljIGNvdWxldXI6IG51bWJlcjtcbiAgICBwdWJsaWMgcm90UG9ydE1vZHVsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBjYWJsZVRyYW5zcG9ydDogbnVtYmVyO1xuICAgIHB1YmxpYyBldGF0OiBudW1iZXI7XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBOcm8gfSBmcm9tICcuLi9fZHRvcy9ucm8nO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAncGFyYW1Ocm8nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBOcm9TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PE5ybz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxOcm8+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxOcm8+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8TnJvPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE5ybz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE5ybz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxOcm8+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8TnJvPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxOcm8+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBDb21tdW5lIH0gZnJvbSAnLi4vX2R0b3MvY29tbXVuZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbUNvbW11bmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBDb21tdW5lU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxDb21tdW5lPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENvbW11bmU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDb21tdW5lPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENvbW11bmU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q29tbXVuZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENvbW11bmU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Q29tbXVuZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDb21tdW5lPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDb21tdW5lPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUXVhcnRpZXIgfSBmcm9tICcuLi9fZHRvcy9xdWFydGllcic7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbVF1YXJ0aWVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUXVhcnRpZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFF1YXJ0aWVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFF1YXJ0aWVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UXVhcnRpZXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UXVhcnRpZXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UXVhcnRpZXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxRdWFydGllcj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxRdWFydGllcj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxRdWFydGllcj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UXVhcnRpZXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBVdGlsaXNhdGV1ciB9IGZyb20gJy4uL19kdG9zL3V0aWxpc2F0ZXVyJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ2FkbWluVXNlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxpc2F0ZXVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxVdGlsaXNhdGV1cj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxVdGlsaXNhdGV1cj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFV0aWxpc2F0ZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFV0aWxpc2F0ZXVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFV0aWxpc2F0ZXVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VXRpbGlzYXRldXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8VXRpbGlzYXRldXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VXRpbGlzYXRldXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFV0aWxpc2F0ZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL19kdG9zL3Byb2ZpbGUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnYWRtaW5Qcm9maWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UHJvZmlsZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQcm9maWxlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UHJvZmlsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxQcm9maWxlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFByb2ZpbGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxQcm9maWxlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFByb2ZpbGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UHJvZmlsZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UHJvZmlsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IEZvbmN0aW9ubmFsaXRlIH0gZnJvbSAnLi4vX2R0b3MvZm9uY3Rpb25uYWxpdGUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnYWRtaW5Gb25jdGlvbm5hbGl0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIEZvbmN0aW9ubmFsaXRlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxGb25jdGlvbm5hbGl0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGb25jdGlvbm5hbGl0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZvbmN0aW9ubmFsaXRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEZvbmN0aW9ubmFsaXRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZvbmN0aW9ubmFsaXRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Rm9uY3Rpb25uYWxpdGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Rm9uY3Rpb25uYWxpdGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Rm9uY3Rpb25uYWxpdGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZvbmN0aW9ubmFsaXRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUHJvZmlsZUZvbmN0aW9ubmFsaXRlIH0gZnJvbSAnLi4vX2R0b3MvcHJvZmlsZS1mb25jdGlvbm5hbGl0ZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdhZG1pblByb2ZpbGVGb25jdGlvbm5hbGl0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVGb25jdGlvbm5hbGl0ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UHJvZmlsZUZvbmN0aW9ubmFsaXRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFByb2ZpbGVGb25jdGlvbm5hbGl0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFByb2ZpbGVGb25jdGlvbm5hbGl0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxQcm9maWxlRm9uY3Rpb25uYWxpdGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UHJvZmlsZUZvbmN0aW9ubmFsaXRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UHJvZmlsZUZvbmN0aW9ubmFsaXRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFByb2ZpbGVGb25jdGlvbm5hbGl0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQcm9maWxlRm9uY3Rpb25uYWxpdGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFByb2ZpbGVGb25jdGlvbm5hbGl0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFNpdGUgfSBmcm9tICcuLi9fZHRvcy9zaXRlJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3BhcmFtU2l0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFNpdGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8U2l0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNpdGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8U2l0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxTaXRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8U2l0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxTaXRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFNpdGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNpdGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0UGFyYW1TaXRlKHJlcXVlc3Q6IFJlcXVlc3Q8U2l0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxTaXRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldFBhcmFtU2l0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNpdGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBGb3Vybmlzc2V1ciB9IGZyb20gJy4uL19kdG9zL2ZvdXJuaXNzZXVyJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3BhcmFtRm91cm5pc3NldXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBGb3Vybmlzc2V1clNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Rm91cm5pc3NldXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Rm91cm5pc3NldXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxGb3Vybmlzc2V1cj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxGb3Vybmlzc2V1cj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGb3Vybmlzc2V1cj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZvdXJuaXNzZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PEZvdXJuaXNzZXVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZvdXJuaXNzZXVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxGb3Vybmlzc2V1cj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IE1vZGVsZSB9IGZyb20gJy4uL19kdG9zL21vZGVsZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbU1vZGVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIE1vZGVsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8TW9kZWxlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE1vZGVsZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE1vZGVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxNb2RlbGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8TW9kZWxlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8TW9kZWxlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PE1vZGVsZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxNb2RlbGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE1vZGVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IENhcmFjdGVyaXN0aXF1ZSB9IGZyb20gJy4uL19kdG9zL2NhcmFjdGVyaXN0aXF1ZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbUNhcmFjdGVyaXN0aXF1ZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJhY3RlcmlzdGlxdWVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENhcmFjdGVyaXN0aXF1ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDYXJhY3RlcmlzdGlxdWU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDYXJhY3RlcmlzdGlxdWU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Q2FyYWN0ZXJpc3RpcXVlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENhcmFjdGVyaXN0aXF1ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhcmFjdGVyaXN0aXF1ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxDYXJhY3RlcmlzdGlxdWU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2FyYWN0ZXJpc3RpcXVlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDYXJhY3RlcmlzdGlxdWU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBPZmZyZSB9IGZyb20gJy4uL19kdG9zL29mZnJlJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3BhcmFtT2ZmcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBPZmZyZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8T2ZmcmU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8T2ZmcmU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPZmZyZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxPZmZyZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxPZmZyZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE9mZnJlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PE9mZnJlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE9mZnJlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPZmZyZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgT2x0IH0gZnJvbSAnLi4vX2R0b3Mvb2x0JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIE9sdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8T2x0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE9sdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE9sdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxPbHQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8T2x0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8T2x0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PE9sdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxPbHQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE9sdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IEJhaWUgfSBmcm9tICcuLi9fZHRvcy9iYWllJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdEJhaWUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBCYWllU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxCYWllPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEJhaWU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxCYWllPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEJhaWU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8QmFpZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEJhaWU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8QmFpZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxCYWllPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxCYWllPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgQ2hhc3NpcyB9IGZyb20gJy4uL19kdG9zL2NoYXNzaXMnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnb2x0Q2hhc3Npcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIENoYXNzaXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENoYXNzaXM+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2hhc3Npcz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENoYXNzaXM+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Q2hhc3Npcz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDaGFzc2lzPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Q2hhc3Npcz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxDaGFzc2lzPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENoYXNzaXM+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENoYXNzaXM+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0QWxsSW5mb3MocmVxdWVzdDogUmVxdWVzdDxDaGFzc2lzPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENoYXNzaXM+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QWxsSW5mb3MnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDaGFzc2lzPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgQ2FydGUgfSBmcm9tICcuLi9fZHRvcy9jYXJ0ZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdvbHRDYXJ0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIENhcnRlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxDYXJ0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDYXJ0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhcnRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENhcnRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENhcnRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Q2FydGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Q2FydGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2FydGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhcnRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldE9sdENhcnRlUG9ydFBoeXNpcXVlKHJlcXVlc3Q6IFJlcXVlc3Q8Q2FydGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2FydGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0T2x0Q2FydGVQb3J0UGh5c2lxdWUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDYXJ0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFBvcnQgfSBmcm9tICcuLi9fZHRvcy9wb3J0JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdFBvcnRQaHlzaXF1ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFBvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0T2x0UG9ydFBoeXNpcXVlKHJlcXVlc3Q6IFJlcXVlc3Q8UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldE9sdFBvcnRQaHlzaXF1ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9fZHRvcy9yb3V0ZXInO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnb2x0Um91dGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxSb3V0ZXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um91dGVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um91dGVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJvdXRlcj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3V0ZXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3V0ZXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Um91dGVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdXRlcj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um91dGVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUm91dGVyQ2FydGUgfSBmcm9tICcuLi9fZHRvcy9yb3V0ZXItY2FydGUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnb2x0Um91dGVyQ2FydGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZXJDYXJ0ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um91dGVyQ2FydGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um91dGVyQ2FydGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3V0ZXJDYXJ0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb3V0ZXJDYXJ0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3V0ZXJDYXJ0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvdXRlckNhcnRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvdXRlckNhcnRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdXRlckNhcnRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3V0ZXJDYXJ0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvdXRlclBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb3V0ZXItcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdvbHRSb3V0ZXJQb3J0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVyUG9ydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um91dGVyUG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3V0ZXJQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um91dGVyUG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb3V0ZXJQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdXRlclBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3V0ZXJQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvdXRlclBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um91dGVyUG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um91dGVyUG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgT250IH0gZnJvbSAnLi4vX2R0b3Mvb250JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdFBvcnRMb2dpcXVlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgT250U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxPbnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8T250PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8T250PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PE9udD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxPbnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPbnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8T250Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE9udD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8T250PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgT2x0TGluayB9IGZyb20gJy4uL19kdG9zL29sdC1saW5rJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ29sdExpbmsnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBPbHRMaW5rU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxPbHRMaW5rPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPE9sdExpbms+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPbHRMaW5rPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PE9sdExpbms+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8T2x0TGluaz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PE9sdExpbms+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8T2x0TGluaz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxPbHRMaW5rPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxPbHRMaW5rPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUmZvIH0gZnJvbSAnLi4vX2R0b3MvcmZvJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Jmbyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFJmb1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UmZvPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJmbz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJmbz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSZm8+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UmZvPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UmZvPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJmbz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSZm8+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJmbz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvZSB9IGZyb20gJy4uL19kdG9zL3JvZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9Sb2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBSb2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJvZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb2U+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2U+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um9lPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxSb2U+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um9lPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2U+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb3QgfSBmcm9tICcuLi9fZHRvcy9yb3QnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAncmZvUm90JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm90U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxSb3Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um90PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJvdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Um90Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUm9lTW9kdWxlIH0gZnJvbSAnLi4vX2R0b3Mvcm9lLW1vZHVsZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9Sb2VNb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBSb2VNb2R1bGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJvZU1vZHVsZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb2VNb2R1bGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2VNb2R1bGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um9lTW9kdWxlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvZU1vZHVsZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvZU1vZHVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxSb2VNb2R1bGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um9lTW9kdWxlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2VNb2R1bGU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb3RNb2R1bGUgfSBmcm9tICcuLi9fZHRvcy9yb3QtbW9kdWxlJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Jmb1JvdE1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFJvdE1vZHVsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um90TW9kdWxlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdE1vZHVsZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvdE1vZHVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb3RNb2R1bGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um90TW9kdWxlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90TW9kdWxlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvdE1vZHVsZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3RNb2R1bGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvdE1vZHVsZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvZVBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb2UtcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9Sb2VQb3J0TW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm9lUG9ydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um9lUG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb2VQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um9lUG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb2VQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvZVBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb2VQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvZVBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um9lUG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um9lUG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvdFBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb3QtcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9Sb3RQb3J0TW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUm90UG9ydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um90UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3RQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90UG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxSb3RQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdFBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3RQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFJvdFBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um90UG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um90UG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXRSZm9Sb3RQb3J0TW9kdWxlKHJlcXVlc3Q6IFJlcXVlc3Q8Um90UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3RQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldFJmb1JvdFBvcnRNb2R1bGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxSb3RQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSZm9KYXJyZXRpZXJlIH0gZnJvbSAnLi4vX2R0b3MvcmZvLWphcnJldGllcmUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAncmZvSmFycmV0aWVyZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFJmb0phcnJldGllcmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJmb0phcnJldGllcmU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UmZvSmFycmV0aWVyZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJmb0phcnJldGllcmU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UmZvSmFycmV0aWVyZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSZm9KYXJyZXRpZXJlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8UmZvSmFycmV0aWVyZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxSZm9KYXJyZXRpZXJlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJmb0phcnJldGllcmU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJmb0phcnJldGllcmU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBDYWJsZVRyYW5zcG9ydCB9IGZyb20gJy4uL19kdG9zL2NhYmxlLXRyYW5zcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9DYWJsZVRyYW5zcG9ydCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIENhYmxlVHJhbnNwb3J0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxDYWJsZVRyYW5zcG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDYWJsZVRyYW5zcG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhYmxlVHJhbnNwb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENhYmxlVHJhbnNwb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENhYmxlVHJhbnNwb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Q2FibGVUcmFuc3BvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Q2FibGVUcmFuc3BvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q2FibGVUcmFuc3BvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENhYmxlVHJhbnNwb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgU3JvIH0gZnJvbSAnLi4vX2R0b3Mvc3JvJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Nybyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFNyb1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8U3JvPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFNybz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNybz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxTcm8+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8U3JvPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8U3JvPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFNybz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxTcm8+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNybz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFBiIH0gZnJvbSAnLi4vX2R0b3MvcGInO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvUGInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBQYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8UGI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8UGI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxQYj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxQYj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxQYj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFBiPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFBiPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFBiPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxQYj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgVHR0IH0gZnJvbSAnLi4vX2R0b3MvdHR0JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Nyb1Rpcm9pclRyYW5zaXRpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBUdHRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFR0dD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUdHQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUdHQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VHR0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFR0dD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFR0dD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxUdHQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VHR0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUdHQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUdHRQb3J0IH0gZnJvbSAnLi4vX2R0b3MvdHR0LXBvcnQnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvUG9ydFRpcm9pclRyYW5zaXRpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBUdHRQb3J0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxUdHRQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFR0dFBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUdHRQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFR0dFBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VHR0UG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFR0dFBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8VHR0UG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUdHRQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUdHRQb3J0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUb3RQbG90IH0gZnJvbSAnLi4vX2R0b3MvdG90LXBsb3QnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvUGxvdFRyYW5zcG9ydCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFRvdFBsb3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFRvdFBsb3Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG90UGxvdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvdFBsb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VG90UGxvdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb3RQbG90PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG90UGxvdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxUb3RQbG90Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvdFBsb3Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvdFBsb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFRvZFBsb3QgfSBmcm9tICcuLi9fZHRvcy90b2QtcGxvdCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdzcm9QbG90RGlzdHJpYnV0aW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgVG9kUGxvdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VG9kUGxvdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb2RQbG90PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG9kUGxvdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxUb2RQbG90Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvZFBsb3Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb2RQbG90PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFRvZFBsb3Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG9kUGxvdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG9kUGxvdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFRvdCB9IGZyb20gJy4uL19kdG9zL3RvdCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdzcm9UaXJvaXJUcmFuc3BvcnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBUb3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFRvdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb3Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VG90Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxUb3Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG90PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUb2QgfSBmcm9tICcuLi9fZHRvcy90b2QnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvVGlyb2lyRGlzdHJpYnV0aW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgVG9kU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxUb2Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG9kPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG9kPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFRvZD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb2Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb2Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8VG9kPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvZD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG9kPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgVG90Q291cGxldXIgfSBmcm9tICcuLi9fZHRvcy90b3QtY291cGxldXInO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvVGlyb2lyVHJhbnNwb3J0Q291cGxldXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBUb3RDb3VwbGV1clNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VG90Q291cGxldXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG90Q291cGxldXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb3RDb3VwbGV1cj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxUb3RDb3VwbGV1cj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb3RDb3VwbGV1cj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvdENvdXBsZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PFRvdENvdXBsZXVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvdENvdXBsZXVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUb3RDb3VwbGV1cj4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgRmUgfSBmcm9tICcuLi9fZHRvcy9mZSc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9GZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIEZlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxGZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEZlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8RmU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8RmU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8RmU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBGdCB9IGZyb20gJy4uL19kdG9zL2Z0JztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ3Jmb0Z0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgRnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEZ0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZ0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8RnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8RnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8RnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxGdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxGdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8RnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUcmF2ZWUgfSBmcm9tICcuLi9fZHRvcy90cmF2ZWUnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAncmZvVHJhdmVlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgVHJhdmVlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxUcmF2ZWU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VHJhdmVlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VHJhdmVlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFRyYXZlZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUcmF2ZWU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUcmF2ZWU+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8VHJhdmVlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRyYXZlZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VHJhdmVlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBDb3VsZXVyIH0gZnJvbSAnLi4vX2R0b3MvY291bGV1cic7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdwYXJhbUNvdWxldXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBDb3VsZXVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxDb3VsZXVyPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPENvdWxldXI+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDb3VsZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PENvdWxldXI+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Q291bGV1cj4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PENvdWxldXI+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8Q291bGV1cj4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxDb3VsZXVyPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxDb3VsZXVyPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdlYk1vZHVsZSB9IGZyb20gJy4uL3dlYi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHBSZXF1ZXN0U2VydmljZSwgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgRmlicmVDYWJsZVRyYW5zcG9ydCB9IGZyb20gJy4uL19kdG9zL2ZpYnJlLWNhYmxlLXRyYW5zcG9ydCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdyZm9GaWJyZVRyYW5zcG9ydCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIEZpYnJlQ2FibGVUcmFuc3BvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PEZpYnJlQ2FibGVUcmFuc3BvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8RmlicmVDYWJsZVRyYW5zcG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZpYnJlQ2FibGVUcmFuc3BvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8RmlicmVDYWJsZVRyYW5zcG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGaWJyZUNhYmxlVHJhbnNwb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8RmlicmVDYWJsZVRyYW5zcG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxGaWJyZUNhYmxlVHJhbnNwb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZpYnJlQ2FibGVUcmFuc3BvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZpYnJlQ2FibGVUcmFuc3BvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBGb25jdGlvbm5hbGl0ZSB9IGZyb20gJy4uL19kdG9zL2ZvbmN0aW9ubmFsaXRlJztcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLi9fZHRvcy9wcm9maWxlJztcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxQcm9maWxlPiB7XG5cbiAgICBwdWJsaWMgZGF0YXNBZG1pbkZvbmN0aW9ubmFsaXRlOiBBcnJheTxGb25jdGlvbm5hbGl0ZT47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUm91dGVyQ2FydGUgfSBmcm9tICcuLi9fZHRvcy9yb3V0ZXItY2FydGUnO1xuaW1wb3J0IHsgUm91dGVyUG9ydCB9IGZyb20gJy4uL19kdG9zL3JvdXRlci1wb3J0JztcblxuZXhwb3J0IGNsYXNzIFJvdXRlckNhcnRlUmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8Um91dGVyQ2FydGU+IHtcblxuICAgIHB1YmxpYyBkYXRhc09sdFJvdXRlclBvcnQ6IEFycmF5PFJvdXRlclBvcnQ+O1xuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvdXRlckNhcnRlIH0gZnJvbSAnLi4vX2R0b3Mvcm91dGVyLWNhcnRlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL19kdG9zL3JvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxSb3V0ZXI+IHtcblxuICAgIHB1YmxpYyBkYXRhc09sdFJvdXRlckNhcnRlOiBBcnJheTxSb3V0ZXJDYXJ0ZT47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgQ2FyYWN0ZXJpc3RpcXVlIH0gZnJvbSAnLi4vX2R0b3MvY2FyYWN0ZXJpc3RpcXVlJztcbmltcG9ydCB7IE1vZGVsZSB9IGZyb20gJy4uL19kdG9zL21vZGVsZSc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbGVSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxNb2RlbGU+IHtcblxuICAgIHB1YmxpYyBkYXRhc1BhcmFtQ2FyYWN0ZXJpc3RpcXVlOiBBcnJheTxDYXJhY3RlcmlzdGlxdWU+O1xuXG59XG4iLCJcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgU2l0ZSB9IGZyb20gJy4uL19kdG9zL3NpdGUnO1xuaW1wb3J0IHsgUXVhcnRpZXIgfSBmcm9tICcuLi9fZHRvcy9xdWFydGllcic7XG5cbmV4cG9ydCBjbGFzcyBRdWFydGllclJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0PFF1YXJ0aWVyPiB7XG5cbiAgICBwdWJsaWMgZGF0YXNQYXJhbVNpdGU6IEFycmF5PFNpdGU+O1xuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IENhcnRlIH0gZnJvbSAnLi4vX2R0b3MvY2FydGUnO1xuaW1wb3J0IHsgUG9ydCB9IGZyb20gJy4uL19kdG9zL3BvcnQnO1xuXG5leHBvcnQgY2xhc3MgQ2FydGVSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxDYXJ0ZT4ge1xuXG4gICAgcHVibGljIGRhdGFzT2x0UG9ydFBoeXNpcXVlOiBBcnJheTxQb3J0PjtcblxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBPbHQgfSBmcm9tICcuLi9fZHRvcy9vbHQnO1xuaW1wb3J0IHsgQmFpZSB9IGZyb20gJy4uL19kdG9zL2JhaWUnO1xuXG5leHBvcnQgY2xhc3MgT2x0UmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8T2x0PiB7XG5cbiAgICBwdWJsaWMgZGF0YXNPbHRCYWllOiBBcnJheTxCYWllPjtcblxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb2VNb2R1bGUgfSBmcm9tICcuLi9fZHRvcy9yb2UtbW9kdWxlJztcbmltcG9ydCB7IFJvZVBvcnQgfSBmcm9tICcuLi9fZHRvcy9yb2UtcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBSb2VNb2R1bGVSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxSb2VNb2R1bGU+IHtcblxuICAgIHB1YmxpYyBkYXRhc1Jmb1JvZVBvcnRNb2R1bGU6IEFycmF5PFJvZVBvcnQ+O1xuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFJvdE1vZHVsZSB9IGZyb20gJy4uL19kdG9zL3JvdC1tb2R1bGUnO1xuaW1wb3J0IHsgUm90UG9ydCB9IGZyb20gJy4uL19kdG9zL3JvdC1wb3J0JztcblxuZXhwb3J0IGNsYXNzIFJvdE1vZHVsZVJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0PFJvdE1vZHVsZT4ge1xuXG4gICAgcHVibGljIGRhdGFzUmZvUm90UG9ydE1vZHVsZTogQXJyYXk8Um90UG9ydD47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgQ2FibGVUcmFuc3BvcnQgfSBmcm9tICcuLi9fZHRvcy9jYWJsZS10cmFuc3BvcnQnO1xuaW1wb3J0IHsgRmlicmVDYWJsZVRyYW5zcG9ydCB9IGZyb20gJy4uL19kdG9zL2ZpYnJlLWNhYmxlLXRyYW5zcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBDYWJsZVRyYW5zcG9ydFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0PENhYmxlVHJhbnNwb3J0PiB7XG5cbiAgICBwdWJsaWMgZGF0YXNSZm9GaWJyZVRyYW5zcG9ydDogQXJyYXk8RmlicmVDYWJsZVRyYW5zcG9ydD47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgVHR0UG9ydCB9IGZyb20gJy4uL19kdG9zL3R0dC1wb3J0JztcbmltcG9ydCB7IFR0dCB9IGZyb20gJy4uL19kdG9zL3R0dCc7XG5cbmV4cG9ydCBjbGFzcyBUdHRSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxUdHQ+IHtcblxuICAgIHB1YmxpYyBkYXRhc1Nyb1BvcnRUaXJvaXJUcmFuc2l0aW9uOiBBcnJheTxUdHRQb3J0PjtcblxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUb3RQbG90IH0gZnJvbSAnLi4vX2R0b3MvdG90LXBsb3QnO1xuaW1wb3J0IHsgVG90IH0gZnJvbSAnLi4vX2R0b3MvdG90JztcbmltcG9ydCB7IFRvdENvdXBsZXVyIH0gZnJvbSAnLi4vX2R0b3MvdG90LWNvdXBsZXVyJztcblxuZXhwb3J0IGNsYXNzIFRvdFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0PFRvdD4ge1xuXG4gICAgcHVibGljIGRhdGFzU3JvUGxvdFRyYW5zcG9ydDogQXJyYXk8VG90UGxvdD47XG4gICAgcHVibGljIGRhdGFzU3JvVGlyb2lyVHJhbnNwb3J0Q291cGxldXI6IEFycmF5PFRvdENvdXBsZXVyPjtcblxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUb2RQbG90IH0gZnJvbSAnLi4vX2R0b3MvdG9kLXBsb3QnO1xuaW1wb3J0IHsgVG9kIH0gZnJvbSAnLi4vX2R0b3MvdG9kJztcblxuZXhwb3J0IGNsYXNzIFRvZFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0PFRvZD4ge1xuXG4gICAgcHVibGljIGRhdGFzU3JvUGxvdERpc3RyaWJ1dGlvbjogQXJyYXk8VG9kUGxvdD47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUGIgfSBmcm9tICcuLi9fZHRvcy9wYic7XG5pbXBvcnQgeyBDYXNzZXR0ZUZpYnJlIH0gZnJvbSAnLi4vX2R0b3MvY2Fzc2V0dGUtZmlicmUnO1xuXG5leHBvcnQgY2xhc3MgUGJSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxQYj4ge1xuXG4gICAgcHVibGljIGRhdGFzU3JvQ2Fzc2V0dGVGaWJyZTogQXJyYXk8Q2Fzc2V0dGVGaWJyZT47XG5cbn1cbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0IHsgUm9lUG9ydCB9IGZyb20gJy4uL19kdG9zL3JvZS1wb3J0JztcblxuZXhwb3J0IGNsYXNzIFJvZVBvcnRSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdDxSb2VQb3J0PiB7XG5cbiAgICBwdWJsaWMgb3BlcmF0b3I6IHN0cmluZztcblxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUdHRQb3J0IH0gZnJvbSAnLi4vX2R0b3MvdHR0LXBvcnQnO1xuaW1wb3J0IHsgRmlicmVDYWJsZVRyYW5zcG9ydCB9IGZyb20gJy4uL19kdG9zL2ZpYnJlLWNhYmxlLXRyYW5zcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBUdHRQb3J0UmVxdWVzdCBleHRlbmRzIFJlcXVlc3Q8VHR0UG9ydD4ge1xuXG4gICAgcHVibGljIGRhdGFzUmZvRmlicmVUcmFuc3BvcnQ6IEFycmF5PEZpYnJlQ2FibGVUcmFuc3BvcnQ+O1xuXG59XG4iXSwibmFtZXMiOlsiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiSGVscGVyTW9kdWxlIiwiSHR0cEhlYWRlcnMiLCJJbmplY3RhYmxlIiwiSHR0cFJlcXVlc3RTZXJ2aWNlIiwiVXRpbGl0eVNlcnZpY2UiLCJSRVFVRVNUX01BUFBJTkciLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIlJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztvQkFJQ0EsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMscUJBQWdCOzRCQUNoQkMsZUFBWTt5QkFDYjt3QkFDRCxTQUFTLEVBQUUsRUFDVjt3QkFDRCxZQUFZLEVBQUUsRUFBRTtxQkFDakI7O3dCQVpEOzs7Ozs7O0FDQUEsUUFBQTs7O2tCQUFBO1FBT0M7Ozs7OztBQ1BELFFBQUE7OztzQkFBQTtRQUtDOzs7Ozs7QUNM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