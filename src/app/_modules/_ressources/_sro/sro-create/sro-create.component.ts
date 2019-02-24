import { Component, OnInit, Input } from '@angular/core';
import { Sro, SroService, Nro, NroService } from 'web';
import { Response, Request, TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-sro-create',
  templateUrl: './sro-create.component.html',
  styleUrls: ['./sro-create.component.scss']
})
export class SroCreateComponent implements OnInit {

  @Input() data;
  _item: Sro;
  _nro: Nro = new Nro();
  _nros: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _sroService: SroService, private _nroService: NroService,
    private _translateService: TranslateService) { }

  ngOnInit() {
    this._item = this.data || new Sro();
    this.doLoadNro();
  }

  doLoadNro() {
    const _request = new Request<Nro>();
    _request.data = new Nro();
    _request.takeAll = true;

    this._nroService.get(_request, environment.origin,
      (response: Response<Nro>) => {
        if (!response.hasError) {
          this._nros = response.items;

          if (this._item.nro) {
            let nro = this._item.nro;
            this._nro = Enumerable.From(this._nros)
              .Where(function (x) { return x.id === nro; })
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
        const _request = new Request<Sro>();
        this._item.nro = this._nro.id;
        _request.datas = [this._item];

        if (this._item.id && this._item.id > 0) {
          this._sroService.update(_request, environment.origin,
            (response: Response<Sro>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._sroService.create(_request, environment.origin,
            (response: Response<Sro>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        }
      }
    });
  }

}
