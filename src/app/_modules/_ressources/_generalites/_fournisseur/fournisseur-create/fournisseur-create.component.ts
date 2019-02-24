import { Component, OnInit, Input } from '@angular/core';
import { FournisseurService, Fournisseur } from 'web';
import { Request, Response, TranslateService } from 'helper';
import { environment } from '../../../../../../environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var swal: any;

@Component({
  selector: 'ressources-generalites-fournisseur-create',
  templateUrl: './fournisseur-create.component.html',
  styleUrls: ['./fournisseur-create.component.scss']
})
export class FournisseurCreateComponent implements OnInit {

  @Input() data;

  _fournisseur: Fournisseur;

  constructor(public _ngbActiveModal: NgbActiveModal, private _fournisseurService: FournisseurService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._fournisseur = this.data || new Fournisseur();
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
        const _request = new Request<Fournisseur>();
        _request.datas = [this._fournisseur];

        if (this._fournisseur.id && this._fournisseur.id > 0) {
          this._fournisseurService.update(_request, environment.origin,
            (response: Response<Fournisseur>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le fournisseur <b>' + this._fournisseur.raison + '</b> existe dans la base de données',
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
          this._fournisseurService.create(_request, environment.origin,
            (response: Response<Fournisseur>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le fournisseur <b>' + this._fournisseur.raison + '</b> existe dans la base de données',
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
