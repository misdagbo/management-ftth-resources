import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterService, ModeleService, Modele, Nro, NroService, RouterRequest } from 'web';
import { Response, Request, TranslateService, SearchParam, GlobalEnum } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-router-create',
  templateUrl: './router-create.component.html',
  styleUrls: ['./router-create.component.scss']
})
export class RouterCreateComponent implements OnInit {

  @Input() data;

  _router: Router;
  _modeleArray: Array<any>;
  _nroArray: Array<any>;
  _routerCarteArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _nroService: NroService,
    private _routerService: RouterService, private _modeleService: ModeleService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._router = this.data || new Router();
    this.doLoadNro();
    this.doLoadModele();
  }

  doLoadModele() {
    const _request = new Request<Modele>();
    _request.data = new Modele();
    _request.data.type = 'ROUTER';
    _request.data.typeParam = new SearchParam<String>();
    _request.data.typeParam.operator = GlobalEnum._EQUAL;
    _request.takeAll = true;

    this._modeleService.get(_request, environment.origin,
      (response: Response<Modele>) => {
        if (!response.hasError) {
          this._modeleArray = response.items;
        } else {

        }
      });
  }

  doLoadNro() {
    const _request = new Request<Nro>();
    _request.data = new Nro();
    _request.takeAll = true;

    this._nroService.get(_request, environment.origin,
      (response: Response<Nro>) => {
        if (!response.hasError) {
          this._nroArray = response.items;
        } else {

        }
      });
  }

  doAddCarte(carte: any) {
    this._routerCarteArray.push(carte);
  }

  onSubmit() {
    swal({
      title: this._translateService.instant('NOTIFY_CONFIRM_TITLE'),
      text: this._translateService.instant('NOTIFY_CONFIRM_TEXT'),
      type: 'question',
      showCancelButton: true,
      confirmButtonText: this._translateService.instant('NOTIFY_CONFIRM_YES'),
      cancelButtonText: this._translateService.instant('NOTIFY_CONFIRM_NO'),
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        const _request = new RouterRequest();
        _request.datas = [this._router];
        _request.datasOltRouterCarte = this._routerCarteArray;

        if (this._router.id && this._router.id > 0) {
          this._routerService.update(_request, environment.origin,
            (response: Response<Router>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'NOM_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le BNG <b>' + this._router.nom + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  if (response.hasCustomError !== null && response.hasCustomError === 'IP_EXIST') {
                    swal({
                      title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                      html: 'L\'IP <b>' + this._router.ip + '</b> existe dans la base de données',
                      type: 'info',
                      allowOutsideClick: false
                    });
                  } else {
                    this._ngbActiveModal.close();
                  }
                }
              } else {

              }
            });
        } else {
          this._routerService.create(_request, environment.origin,
            (response: Response<Router>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'NOM_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le BNG <b>' + this._router.nom + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  if (response.hasCustomError !== null && response.hasCustomError === 'IP_EXIST') {
                    swal({
                      title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                      html: 'L\'IP <b>' + this._router.ip + '</b> existe dans la base de données',
                      type: 'info',
                      allowOutsideClick: false
                    });
                  } else {
                    this._ngbActiveModal.close();
                  }
                }
              } else {

              }
            });
        }
      }
    });
  }

}
