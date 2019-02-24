import { Component, OnInit, Input } from '@angular/core';
import { RotService, Rot, ModeleService, Modele } from 'web';
import { Response, Request, TranslateService, GlobalEnum, SearchParam } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-rot-create',
  templateUrl: './rot-create.component.html',
  styleUrls: ['./rot-create.component.scss']
})
export class RotCreateComponent implements OnInit {

  @Input() data;

  _rot: Rot = new Rot();
  _modeleArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _rotService: RotService,
    private _modeleService: ModeleService, private _translateService: TranslateService) { }

  ngOnInit() {
    if (this.data) {
      this._rot.numero = (Number(this.data.niveau) + 1).toString().length > 1 ? (Number(this.data.niveau) + 1).toString() : '0' + (Number(this.data.niveau) + 1).toString();
      this._rot.rfoFtNumero = this.data.ft.numero;
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
        const _request = new Request<Rot>();
        this._rot.ft = this.data.ft.id;
        _request.datas = [this._rot];

        if (this._rot.id && this._rot.id > 0) {
          this._rotService.update(_request, environment.origin,
            (response: Response<Rot>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._rotService.create(_request, environment.origin,
            (response: Response<Rot>) => {
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
