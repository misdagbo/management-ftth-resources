import { Component, OnInit, Input } from '@angular/core';
import { FeService, Fe } from 'web';
import { Response, Request, TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-fe-create',
  templateUrl: './fe-create.component.html',
  styleUrls: ['./fe-create.component.scss']
})
export class FeCreateComponent implements OnInit {

  @Input() data;

  _fe: Fe = new Fe();
  _modeleArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _feService: FeService, private _translateService: TranslateService) { }

  ngOnInit() {
    if (this.data) {
      this._fe.numero = (Number(this.data.rang) + 1).toString().length > 1 ? (Number(this.data.rang) + 1).toString() : '0' + (Number(this.data.rang) + 1).toString();
      this._fe.rfoTraveeNumero = this.data.travee.numero;
    }
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
        const _request = new Request<Fe>();
        this._fe.travee = this.data.travee.id;
        _request.datas = [this._fe];

        if (this._fe.id && this._fe.id > 0) {
          this._feService.update(_request, environment.origin,
            (response: Response<Fe>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._feService.create(_request, environment.origin,
            (response: Response<Fe>) => {
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
