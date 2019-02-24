import { Component, OnInit, Input } from '@angular/core';
import { TraveeService, Travee } from 'web';
import { Response, Request, TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-travee-create',
  templateUrl: './travee-create.component.html',
  styleUrls: ['./travee-create.component.scss']
})
export class TraveeCreateComponent implements OnInit {

  @Input() data;

  _travee: Travee = new Travee();
  _modeleArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _traveeService: TraveeService, private _translateService: TranslateService) { }

  ngOnInit() {
    if (this.data) {
      this._travee.rfoNom = this.data.rfo.nom;
      this._travee.numero = (Number(this.data.rang) + 1).toString().length > 1 ? (Number(this.data.rang) + 1).toString() : '0' + (Number(this.data.rang) + 1).toString();
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
        const _request = new Request<Travee>();
        this._travee.rfo = this.data.rfo.id;
        _request.datas = [this._travee];

        if (this._travee.id && this._travee.id > 0) {
          this._traveeService.update(_request, environment.origin,
            (response: Response<Travee>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._traveeService.create(_request, environment.origin,
            (response: Response<Travee>) => {
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
