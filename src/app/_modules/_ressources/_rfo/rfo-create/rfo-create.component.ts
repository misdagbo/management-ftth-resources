import { Component, OnInit, Input } from '@angular/core';
import { Rfo, RfoService, Nro, NroService } from 'web';
import { Response, Request, TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-rfo-create',
  templateUrl: './rfo-create.component.html',
  styleUrls: ['./rfo-create.component.scss']
})
export class RfoCreateComponent implements OnInit {

  @Input() data;

  _rfo: Rfo;
  _nro: Nro = new Nro();
  _nroArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _rfoService: RfoService, private _nroService: NroService,
    private _translateService: TranslateService) { }

  ngOnInit() {
    this._rfo = this.data || new Rfo();
    this.doLoadNro();
  }

  doLoadNro() {
    const _request = new Request<Nro>();
    _request.data = new Nro();
    _request.takeAll = true;

    this._nroService.get(_request, environment.origin,
      (response: Response<Nro>) => {
        if (!response.hasError) {
          this._nroArray = response.items;
          if (this._rfo.nro) {
            let _nro = this._rfo.nro;
            this._nro = Enumerable.From(this._nroArray)
              .Where(function (x) { return x.id === _nro; })
              .Select(function (x) { return x; })
              .First();
          }
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
        const _request = new Request<Rfo>();
        this._rfo.nro = this._nro.id;
        _request.datas = [this._rfo];

        if (this._rfo.id && this._rfo.id > 0) {
          this._rfoService.update(_request, environment.origin,
            (response: Response<Rfo>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le RFO <b>' + this._rfo.nom + '</b> existe dans la base de données',
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
          this._rfoService.create(_request, environment.origin,
            (response: Response<Rfo>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le RFO <b>' + this._rfo.nom + '</b> existe dans la base de données',
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
