import { Component, OnInit, Input } from '@angular/core';
import { FtService, Ft } from 'web';
import { Response, Request, TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-ft-create',
  templateUrl: './ft-create.component.html',
  styleUrls: ['./ft-create.component.scss']
})
export class FtCreateComponent implements OnInit {

  @Input() data;

  _ft: Ft = new Ft();
  _modeleArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _ftService: FtService, private _translateService: TranslateService) { }

  ngOnInit() {
    if (this.data) {
      this._ft.numero = (Number(this.data.rang) + 1).toString().length > 1 ? (Number(this.data.rang) + 1).toString() : '0' + (Number(this.data.rang) + 1).toString();
      this._ft.rfoTraveeNumero = this.data.travee.numero;
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
        const _request = new Request<Ft>();
        this._ft.travee = this.data.travee.id;
        _request.datas = [this._ft];

        if (this._ft.id && this._ft.id > 0) {
          this._ftService.update(_request, environment.origin,
            (response: Response<Ft>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._ftService.create(_request, environment.origin,
            (response: Response<Ft>) => {
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
