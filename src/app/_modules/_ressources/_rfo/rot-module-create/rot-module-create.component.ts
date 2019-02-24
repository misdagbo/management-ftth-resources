import { Component, OnInit, Input } from '@angular/core';
import { RotModule, Rot, RotModuleService, RotModuleRequest, ModeleService, Modele, Caracteristique, CaracteristiqueService } from 'web';
import { Response, Request, TranslateService, GlobalEnum, SearchParam } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-rot-module-create',
  templateUrl: './rot-module-create.component.html',
  styleUrls: ['./rot-module-create.component.scss']
})
export class RotModuleCreateComponent implements OnInit {

  @Input() data;

  _rotModule: RotModule = new RotModule();
  _rot: Rot = new Rot();
  _modele: Modele = null;
  _modeleArray: Array<any> = [];
  _rfoRotPortArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _rotModuleService: RotModuleService, private _modeleService: ModeleService,
    private _caracteristiqueService: CaracteristiqueService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._rot = this.data.rot;
    this._rotModule.numero = Number(this.data.module).toString().length > 1 ? Number(this.data.module).toString() : '0' + Number(this.data.module).toString();
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
    this._rfoRotPortArray.length = 0;

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
              this._rfoRotPortArray.push({ numero: i.toString() });
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
        const _request = new RotModuleRequest();
        this._rotModule.rot = this.data.rot.id;
        this._rotModule.modele = this._modele.id;
        _request.datas = [this._rotModule];
        _request.datasRfoRotPortModule = this._rfoRotPortArray;

        if (this._rotModule.id && this._rotModule.id > 0) {
          this._rotModuleService.update(_request, environment.origin,
            (response: Response<RotModule>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._rotModuleService.create(_request, environment.origin,
            (response: Response<RotModule>) => {
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
