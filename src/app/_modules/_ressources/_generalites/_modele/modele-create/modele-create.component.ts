import { Component, OnInit, Input } from '@angular/core';
import { Modele, ModeleService, FournisseurService, Fournisseur, ModeleRequest } from 'web';
import { Response, Request, TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-generalites-modele-create',
  templateUrl: './modele-create.component.html',
  styleUrls: ['./modele-create.component.scss']
})
export class ModeleCreateComponent implements OnInit {

  @Input() data;

  _modele: Modele;
  _fournisseurArray: Array<any>;
  _caracteristiqueArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _fournisseurService: FournisseurService,
    private _modeleService: ModeleService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._modele = this.data || new Modele();
    this.doLoadFournisseur();
  }

  doLoadFournisseur() {
    const _request = new Request<Fournisseur>();
    _request.data = new Fournisseur();
    _request.takeAll = true;

    this._fournisseurService.get(_request, environment.origin,
      (response: Response<Fournisseur>) => {
        if (!response.hasError) {
          this._fournisseurArray = response.items;
        } else {

        }
      });
  }

  doAddCaracteristique(caracteristique: any) {
    this._caracteristiqueArray.push(caracteristique);
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
        const _request = new ModeleRequest();
        _request.datas = [this._modele];
        _request.datasParamCaracteristique = this._caracteristiqueArray;

        if (this._modele.id && this._modele.id > 0) {
          this._modeleService.update(_request, environment.origin,
            (response: Response<Modele>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le modèle <b>' + this._modele.reference + '</b> existe dans la base de données',
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
          this._modeleService.create(_request, environment.origin,
            (response: Response<Modele>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le modèle <b>' + this._modele.reference + '</b> existe dans la base de données',
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
