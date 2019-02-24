import { Component, OnInit, Input } from '@angular/core';
import { Olt, OltService, OltLink, ModeleService, Modele, Nro, Baie, Chassis, NroService, OltRequest, Caracteristique, CaracteristiqueService } from 'web';
import { Response, Request, TranslateService, GlobalEnum, SearchParam } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-olt-create',
  templateUrl: './olt-create.component.html',
  styleUrls: ['./olt-create.component.scss']
})
export class OltCreateComponent implements OnInit {

  @Input() data;
  _olt: Olt;
  _nro: Nro = new Nro();
  _modele: Modele = null;
  _modeleArray: Array<any> = [];
  _nroArray: Array<any> = [];
  _oltBaieArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _modeleService: ModeleService, private _oltService: OltService,
    private _nroService: NroService, private _translateService: TranslateService, private _caracteristiqueService: CaracteristiqueService) { }

  ngOnInit() {
    this._olt = this.data || new Olt();
    this.doLoadNro();
    this.doLoadModele();
  }

  doLoadNro() {
    const _request = new Request<Nro>();
    _request.data = new Nro();
    _request.takeAll = true;

    this._nroService.get(_request, environment.origin,
      (response: Response<Nro>) => {
        if (!response.hasError) {
          this._nroArray = response.items;

          if (this._olt.nro) {
            let nro = this._olt.nro;
            this._nro = Enumerable.From(this._nroArray)
              .Where(function (x) { return x.id === nro; })
              .Select(function (x) { return x; })
              .First();
          }
        } else {

        }
      });
  }

  doLoadModele() {
    const _request = new Request<Modele>();
    _request.data = new Modele();
    _request.data.type = 'OLT';
    _request.data.typeParam = new SearchParam<String>();
    _request.data.typeParam.operator = GlobalEnum._EQUAL;
    _request.takeAll = true;

    this._modeleService.get(_request, environment.origin,
      (response: Response<Modele>) => {
        if (!response.hasError) {
          this._modeleArray = response.items;

          if (this._olt.modele) {
            const modele = this._olt.modele;
            this._modele = Enumerable.From(this._modeleArray)
              .Where(function (x) { return x.id === modele; })
              .Select(function (x) { return x; })
              .First();
          }
        } else {

        }
      });
  }

  doChangeModele() {
    const _request = new Request<Caracteristique>();
    _request.data = new Caracteristique();
    _request.data.modele = this._modele.id;
    _request.takeAll = true;
    this._oltBaieArray.length = 0;

    this._caracteristiqueService.get(_request, environment.origin,
      (response: Response<Caracteristique>) => {
        if (!response.hasError) {

          let _caracteristiqueBaie = Enumerable.From(response.items)
            .Where(function (x) { return x.libelle === 'BAIE'; })
            .Select(function (x) { return x; })
            .ToArray();

          if (_caracteristiqueBaie != null && _caracteristiqueBaie.length > 0) {
            if (isNaN(_caracteristiqueBaie[0].valeur) || (!isNaN(_caracteristiqueBaie[0].valeur) && Number(_caracteristiqueBaie[0].valeur) < 0)) {
              swal({
                title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                html:
                  'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique égale à 1 pour la propriété <b>BAIE</b>',
                type: 'info',
                allowOutsideClick: false
              });
              this._modele = null;
              return;
            }

            let _caracteristiqueChassis = Enumerable.From(response.items)
              .Where(function (x) { return x.libelle === 'CHASSIS'; })
              .Select(function (x) { return x; })
              .ToArray();

            if (_caracteristiqueChassis != null && _caracteristiqueChassis.length > 0) {
              if (isNaN(_caracteristiqueChassis[0].valeur) || (!isNaN(_caracteristiqueChassis[0].valeur) && Number(_caracteristiqueChassis[0].valeur) < 0)) {
                swal({
                  title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                  html:
                    'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique supérieure à 0 pour la propriété <b>CHASSIS</b>',
                  type: 'info',
                  allowOutsideClick: false
                });
                this._modele = null;
                return;
              }

              let _caracteristiqueLinkPrimaire = Enumerable.From(response.items)
                .Where(function (x) { return x.libelle === 'LIEN PRIMAIRE'; })
                .Select(function (x) { return x; })
                .ToArray();

              if (_caracteristiqueLinkPrimaire != null && _caracteristiqueLinkPrimaire.length > 0) {
                if (isNaN(_caracteristiqueLinkPrimaire[0].valeur) || (!isNaN(_caracteristiqueLinkPrimaire[0].valeur) && Number(_caracteristiqueLinkPrimaire[0].valeur) < 0)) {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html:
                      'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique supérieure à 0 pour la propriété <b>LIEN PRIMAIRE</b>',
                    type: 'info',
                    allowOutsideClick: false
                  });
                  this._modele = null;
                  return;
                }

                let _caracteristiqueLinkSecondaire = Enumerable.From(response.items)
                  .Where(function (x) { return x.libelle === 'LIEN SECONDAIRE'; })
                  .Select(function (x) { return x; })
                  .ToArray();

                if (_caracteristiqueLinkSecondaire != null && _caracteristiqueLinkSecondaire.length > 0) {
                  if (isNaN(_caracteristiqueLinkSecondaire[0].valeur) || (!isNaN(_caracteristiqueLinkSecondaire[0].valeur) && Number(_caracteristiqueLinkSecondaire[0].valeur) < 0)) {
                    swal({
                      title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                      html:
                        'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique supérieure à 0 pour la propriété <b>LIEN SECONDAIRE</b>',
                      type: 'info',
                      allowOutsideClick: false
                    });
                    this._modele = null;
                    return;
                  }

                  let _caracteristiqueSlot = Enumerable.From(response.items)
                    .Where(function (x) { return x.libelle === 'SLOT'; })
                    .Select(function (x) { return x; })
                    .ToArray();

                  if (_caracteristiqueSlot != null && _caracteristiqueSlot.length > 0) {
                    if (isNaN(_caracteristiqueSlot[0].valeur) || (!isNaN(_caracteristiqueSlot[0].valeur) && Number(_caracteristiqueSlot[0].valeur) < 0)) {
                      swal({
                        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                        html:
                          'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique supérieure à 0 pour la propriété <b>SLOT</b>',
                        type: 'info',
                        allowOutsideClick: false
                      });
                      this._modele = null;
                      return;
                    }

                    for (let n = 1; n <= Number(_caracteristiqueBaie[0].valeur); n++) {
                      let _baie = new Baie();
                      _baie.numero = n.toString();
                      _baie.itemsOltChassis = new Array();

                      for (let i = 1; i <= Number(_caracteristiqueChassis[0].valeur); i++) {
                        let _chassis = new Chassis();
                        _chassis.numero = i.toString();
                        _chassis.itemsOltLink = new Array();

                        for (let j = 1; j <= Number(_caracteristiqueLinkPrimaire[0].valeur); j++) {
                          let _oltLinkPrimaire = new OltLink();
                          _oltLinkPrimaire.numero = j.toString();
                          _oltLinkPrimaire.type = 'PRIMAIRE';
                          _chassis.itemsOltLink.push(_oltLinkPrimaire);
                        }

                        for (let k = 1; k <= Number(_caracteristiqueLinkSecondaire[0].valeur); k++) {
                          let _oltLinkSecondaire = new OltLink();
                          _oltLinkSecondaire.numero = k.toString();
                          _oltLinkSecondaire.type = 'SECONDAIRE';
                          _chassis.itemsOltLink.push(_oltLinkSecondaire);
                        }

                        _baie.itemsOltChassis.push(_chassis);
                      }

                      this._oltBaieArray.push(_baie);
                    }

                  } else {
                    swal({
                      title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                      html:
                        'Veuillez définir la propriété <b>SLOT</b> du modèle réf. <b>' + this._modele.reference + '</b>',
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
                      'Veuillez définir la propriété <b>LIEN SECONDAIRE</b> du modèle réf. <b>' + this._modele.reference + '</b>',
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
                    'Veuillez définir la propriété <b>LIEN PRIMAIRE</b> du modèle réf. <b>' + this._modele.reference + '</b>',
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
                  'Veuillez définir la propriété <b>CHASSIS</b> du modèle réf. <b>' + this._modele.reference + '</b>',
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
                'Veuillez définir la propriété <b>BAIE</b> du modèle réf. <b>' + this._modele.reference + '</b>',
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
        const _request = new OltRequest();
        this._olt.nro = this._nro.id;
        this._olt.modele = this._modele.id;
        _request.datas = [this._olt];
        _request.datasOltBaie = this._oltBaieArray;

        if (this._olt.id && this._olt.id > 0) {
          this._oltService.update(_request, environment.origin,
            (response: Response<Olt>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'NOM_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'L\'OLT <b>' + this._olt.nom + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  if (response.hasCustomError !== null && response.hasCustomError === 'IP_EXIST') {
                    swal({
                      title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                      html: 'L\'IP <b>' + this._olt.ip + '</b> existe dans la base de données',
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
          this._oltService.create(_request, environment.origin,
            (response: Response<Olt>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'NOM_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'L\'OLT <b>' + this._olt.nom + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  if (response.hasCustomError !== null && response.hasCustomError === 'IP_EXIST') {
                    swal({
                      title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                      html: 'L\'IP <b>' + this._olt.ip + '</b> existe dans la base de données',
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
