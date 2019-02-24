import { Component, OnInit, Input } from '@angular/core';
import { RoeModule, Roe, RoeModuleService, RoeModuleRequest, ModeleService, Modele, Caracteristique, CaracteristiqueService } from 'web';
import { Response, Request, TranslateService, GlobalEnum, SearchParam } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-roe-module-create',
  templateUrl: './roe-module-create.component.html',
  styleUrls: ['./roe-module-create.component.scss']
})
export class RoeModuleCreateComponent implements OnInit {

  @Input() data;

  _roeModule: RoeModule = new RoeModule();
  _roe: Roe = new Roe();
  _modele: Modele = null;
  _modeleArray: Array<any> = [];
  _rfoRoePortArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _roeModuleService: RoeModuleService, private _modeleService: ModeleService,
    private _caracteristiqueService: CaracteristiqueService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._roe = this.data.roe;
    this._roeModule.numero = Number(this.data.module).toString().length > 1 ? Number(this.data.module).toString() : '0' + Number(this.data.module).toString();
    this.doLoadModele();
  }

  doLoadModele() {
    const _request = new Request<Modele>();
    _request.data = new Modele();
    _request.data.type = 'MODULE RFO';
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

  doChangeModele() {
    const _request = new Request<Caracteristique>();
    _request.data = new Caracteristique();
    _request.data.modele = this._modele.id;
    _request.takeAll = true;
    this._rfoRoePortArray.length = 0;

    this._caracteristiqueService.get(_request, environment.origin,
      (response: Response<Caracteristique>) => {
        if (!response.hasError) {
          let _caracteristiquePort = Enumerable.From(response.items)
            .Where(function (x) { return x.libelle === 'PORT'; })
            .Select(function (x) { return x; })
            .ToArray();

          if (_caracteristiquePort != null && _caracteristiquePort.length > 0) {
            if (isNaN(_caracteristiquePort[0].valeur)) {
              swal({
                title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                html:
                  'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique pour la propriété <b>PORT</b>',
                type: 'info',
                allowOutsideClick: false
              });
              this._modele = null;
              return;
            }

            for (let i = 1; i <= Number(_caracteristiquePort[0].valeur); i++) {
              this._rfoRoePortArray.push({ numero: i.toString() });
            }

          } else {
            swal({
              title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
              html:
                'Veuillez définir la propriété <b>PORT</b> du modèle réf. <b>' + this._modele.reference + '</b>',
              type: 'info',
              allowOutsideClick: false
            });
            this._modele = null;
            return;
          }
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
        const _request = new RoeModuleRequest();
        this._roeModule.roe = this.data.roe.id;
        this._roeModule.modele = this._modele.id;
        _request.datas = [this._roeModule];
        _request.datasRfoRoePortModule = this._rfoRoePortArray;

        if (this._roeModule.id && this._roeModule.id > 0) {
          this._roeModuleService.update(_request, environment.origin,
            (response: Response<RoeModule>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._roeModuleService.create(_request, environment.origin,
            (response: Response<RoeModule>) => {
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
