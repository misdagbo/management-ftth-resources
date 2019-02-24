import { Component, OnInit, Input } from '@angular/core';
import { Quartier, QuartierService, CommuneService, Commune, QuartierRequest } from 'web';
import { Response, Request, TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-generalites-quartier-create',
  templateUrl: './quartier-create.component.html',
  styleUrls: ['./quartier-create.component.scss']
})
export class QuartierCreateComponent implements OnInit {

  @Input() data;

  _quartier: Quartier;
  _communeArray: Array<any>;

  constructor(public _ngbActiveModal: NgbActiveModal, private _communeService: CommuneService,
    private _quartierService: QuartierService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._quartier = this.data || new Quartier();
    this.doLoadCommune();
  }

  doLoadCommune() {
    const _request = new Request<Commune>();
    _request.data = new Commune();
    _request.takeAll = true;

    this._communeService.get(_request, environment.origin,
      (response: Response<Commune>) => {
        if (!response.hasError) {
          this._communeArray = response.items;
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
        const _request = new QuartierRequest();
        _request.datas = [this._quartier];

        if (this._quartier.id && this._quartier.id > 0) {
          this._quartierService.update(_request, environment.origin,
            (response: Response<Quartier>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le quartier <b>' + this._quartier.libelle + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                  return;
                } else {
                  this._ngbActiveModal.close();
                }
              } else {

              }
            });
        } else {
          this._quartierService.create(_request, environment.origin,
            (response: Response<Quartier>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le quartier <b>' + this._quartier.libelle + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                  return;
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
