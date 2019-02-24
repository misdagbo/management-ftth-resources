import { Component, OnInit, Input } from '@angular/core';
import { CommuneService, Commune } from 'web';
import { Request, Response, TranslateService } from 'helper';
import { environment } from '../../../../../../environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var swal: any;

@Component({
  selector: 'ressources-generalites-commune-create',
  templateUrl: './commune-create.component.html',
  styleUrls: ['./commune-create.component.scss']
})
export class CommuneCreateComponent implements OnInit {

  @Input() data;

  _commune: Commune;

  constructor(public _ngbActiveModal: NgbActiveModal, private _translateService: TranslateService,
    private _communeService: CommuneService) { }

  ngOnInit() {
    this._commune = this.data || new Commune();
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
        const _request = new Request<Commune>();
        _request.datas = [this._commune];

        if (this._commune.id && this._commune.id > 0) {
          this._communeService.update(_request, environment.origin,
            (response: Response<Commune>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'La commune <b>' + this._commune.libelle + '</b> existe dans la base de données',
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
          this._communeService.create(_request, environment.origin,
            (response: Response<Commune>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'La commune <b>' + this._commune.libelle + '</b> existe dans la base de données',
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
