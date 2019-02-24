import { Component, OnInit, Input } from '@angular/core';
import { RoeService, Roe, ModeleService, Modele } from 'web';
import { Response, Request, TranslateService, GlobalEnum, SearchParam } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-roe-create',
  templateUrl: './roe-create.component.html',
  styleUrls: ['./roe-create.component.scss']
})
export class RoeCreateComponent implements OnInit {

  @Input() data;

  _roe: Roe = new Roe();
  _modeleArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _roeService: RoeService,
    private _modeleService: ModeleService, private _translateService: TranslateService) { }

  ngOnInit() {
    if (this.data) {
      this._roe.numero = (Number(this.data.niveau) + 1).toString().length > 1 ? (Number(this.data.niveau) + 1).toString() : '0' + (Number(this.data.niveau) + 1).toString();
      this._roe.rfoFeNumero = this.data.fe.numero;
    }
    this.doLoadModele();
  }

  doLoadModele() {
    const _request = new Request<Modele>();
    _request.data = new Modele();
    _request.data.type = 'CHASSIS RFO';
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
        const _request = new Request<Roe>();
        this._roe.fe = this.data.fe.id;
        _request.datas = [this._roe];

        if (this._roe.id && this._roe.id > 0) {
          this._roeService.update(_request, environment.origin,
            (response: Response<Roe>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._roeService.create(_request, environment.origin,
            (response: Response<Roe>) => {
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
