import { Component, OnInit, Input } from '@angular/core';
import { Carte, CarteService, CarteRequest, ModeleService, Modele, Ont, Chassis, Caracteristique, CaracteristiqueService, Port } from 'web';
import { Response, Request, TranslateService, GlobalEnum, SearchParam } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-olt-carte-create',
  templateUrl: './olt-carte-create.component.html',
  styleUrls: ['./olt-carte-create.component.scss']
})
export class OltCarteCreateComponent implements OnInit {

  @Input() data;

  _item: Carte = new Carte();
  _chassis: Chassis = new Chassis();
  _modele: Modele = null;
  _modeleArray: Array<any>;
  _oltPortPhysiqueArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _carteService: CarteService,
    private _modeleService: ModeleService, private _caracteristiqueService: CaracteristiqueService, private _translateService: TranslateService) { }

  ngOnInit() {
    if (this.data) {
      this._chassis = this.data.chassis;
      this._item.numero = this.data.slot;
    }
    this.doLoadModele();
  }

  doLoadModele() {
    const _request = new Request<Modele>();
    _request.data = new Modele();
    _request.data.type = 'CARTE OLT';
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
    this._oltPortPhysiqueArray.length = 0;

    this._caracteristiqueService.get(_request, environment.origin,
      (response: Response<Caracteristique>) => {
        if (!response.hasError) {
          let _caracteristiquePort = Enumerable.From(response.items)
            .Where(function (x) { return x.libelle === 'PORT'; })
            .Select(function (x) { return x; })
            .ToArray();

          if (_caracteristiquePort != null && _caracteristiquePort.length > 0) {
            if (isNaN(_caracteristiquePort[0].valeur) || (!isNaN(_caracteristiquePort[0].valeur) && Number(_caracteristiquePort[0].valeur) < 0)) {
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

            let _caracteristiqueOnt = Enumerable.From(response.items)
              .Where(function (x) { return x.libelle === 'ONT'; })
              .Select(function (x) { return x; })
              .ToArray();

            if (_caracteristiqueOnt != null && _caracteristiqueOnt.length > 0) {
              if (isNaN(_caracteristiqueOnt[0].valeur) || (!isNaN(_caracteristiqueOnt[0].valeur) && Number(_caracteristiqueOnt[0].valeur) < 0)) {
                swal({
                  title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                  html:
                    'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique pour la propriété <b>ONT</b>',
                  type: 'info',
                  allowOutsideClick: false
                });
                this._modele = null;
                return;
              }

              for (let i = 1; i <= Number(_caracteristiquePort[0].valeur); i++) {
                let portPhysique = new Port();
                portPhysique.numero = i.toString();
                portPhysique.itemsOltPortLogiques = new Array();

                let ont = Number(_caracteristiqueOnt[0].valeur) / Number(_caracteristiquePort[0].valeur);
                for (let j = 1; j <= ont; j++) {
                  let portLogique = new Ont();
                  portLogique.numero = j.toString();
                  portPhysique.itemsOltPortLogiques.push(portLogique);
                }

                this._oltPortPhysiqueArray.push(portPhysique);
              }

            } else {
              swal({
                title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                html:
                  'Veuillez définir la propriété <b>ONT</b> du modèle réf. <b>' + this._modele.reference + '</b>',
                type: 'info',
                allowOutsideClick: false
              });
              this._modele = null;
              return;
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
        const _request = new CarteRequest();
        this._item.chassis = this._chassis.id;
        this._item.modele = this._modele.id;
        _request.datasOltPortPhysique = this._oltPortPhysiqueArray;
        _request.datas = [this._item];

        if (this._item.id && this._item.id > 0) {
          this._carteService.update(_request, environment.origin,
            (response: Response<Carte>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._carteService.create(_request, environment.origin,
            (response: Response<Carte>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === '801') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html:
                      'Le slot <b>' + this._item.numero + '</b> est occupé',
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
