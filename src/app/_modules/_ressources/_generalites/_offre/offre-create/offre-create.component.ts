import { Component, OnInit, Input } from '@angular/core';
import { OffreService, Offre } from 'web';
import { Request, Response, TranslateService } from 'helper';
import { environment } from '../../../../../../environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var swal: any;

@Component({
  selector: 'ressources-generalites-offre-create',
  templateUrl: './offre-create.component.html',
  styleUrls: ['./offre-create.component.scss']
})
export class OffreCreateComponent implements OnInit {

  @Input() data;

  _offre: Offre;

  constructor(public _ngbActiveModal: NgbActiveModal, private _offreService: OffreService,
    private _translateService: TranslateService) { }

  ngOnInit() {
    this._offre = this.data || new Offre();
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
        const _request = new Request<Offre>();
        _request.datas = [this._offre];

        if (this._offre.id && this._offre.id > 0) {
          this._offreService.update(_request, environment.origin,
            (response: Response<Offre>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'LIBELLE_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'L\'offre <b>' + this._offre.libelle + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  if (response.hasCustomError !== null && response.hasCustomError === 'CODE_EXIST') {
                    swal({
                      title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                      html: 'Le code d\'offre <b>' + this._offre.code + '</b> existe dans la base de données',
                      type: 'info',
                      allowOutsideClick: false
                    });
                  } else {
                    this._ngbActiveModal.close();
                  }
                }
              } else {

              }
            });
        } else {
          this._offreService.create(_request, environment.origin,
            (response: Response<Offre>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'LIBELLE_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'L\'offre <b>' + this._offre.libelle + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  if (response.hasCustomError !== null && response.hasCustomError === 'CODE_EXIST') {
                    swal({
                      title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                      html: 'Le code d\'offre <b>' + this._offre.code + '</b> existe dans la base de données',
                      type: 'info',
                      allowOutsideClick: false
                    });
                  } else {
                    this._ngbActiveModal.close();
                  }
                }
              } else {

              }
            });
        }
      }
    });
  }

}
