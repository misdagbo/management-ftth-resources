import { Component, OnInit, Input } from '@angular/core';
import { Nro, NroService, CommuneService, Commune } from 'web';
import { Response, Request, TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-nro-create',
  templateUrl: './nro-create.component.html',
  styleUrls: ['./nro-create.component.scss']
})
export class NroCreateComponent implements OnInit {

  @Input() data;

  _nro: Nro;
  _communes: Array<any>;

  constructor(public _ngbActiveModal: NgbActiveModal, private _communeService: CommuneService,
    private _nroService: NroService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._nro = this.data || new Nro();
    this.doLoadCommune();
  }

  doLoadCommune() {
    const _request = new Request<Commune>();
    _request.data = new Commune();
    _request.takeAll = true;

    this._communeService.get(_request, environment.origin,
      (response: Response<Commune>) => {
        if (!response.hasError) {
          this._communes = response.items;
        } else {

        }
      });
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
        const _request = new Request<Nro>();
        _request.datas = [this._nro];

        if (this._nro.id && this._nro.id > 0) {
          this._nroService.update(_request, environment.origin,
            (response: Response<Nro>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le NRO <b>' + this._nro.libelle + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  this._ngbActiveModal.close();
                }
              } else {

              }
            });
        } else {
          this._nroService.create(_request, environment.origin,
            (response: Response<Nro>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le NRO <b>' + this._nro.libelle + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  this._ngbActiveModal.close();
                }
              } else {

              }
            });
        }
      }
    });
  }

}
