import { Component, OnInit, Input } from '@angular/core';
import { RouterCarte, ModeleService, Modele, Caracteristique, CaracteristiqueService, RouterPort, Router } from 'web';
import { Response, Request, TranslateService, GlobalEnum, SearchParam } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-router-carte-create',
  templateUrl: './router-carte-create.component.html',
  styleUrls: ['./router-carte-create.component.scss']
})
export class RouterCarteCreateComponent implements OnInit {

  @Input() data;

  _routerCarte: RouterCarte;
  _modele: Modele = null;
  _modeleArray: Array<any>;
  _slotArray: Array<any> = [];
  _routerPortArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _modeleService: ModeleService,
    private _caracteristiqueService: CaracteristiqueService, private _translateService: TranslateService) { }

  ngOnInit() {
    if (this.data) {
      this._routerCarte = new RouterCarte();
      this._routerCarte.oltRouterNom = this.data.nom;
      this.doLoadSlot(this.data);
    }
    this.doLoadModele();
  }

  doLoadModele() {
    const _request = new Request<Modele>();
    _request.data = new Modele();
    _request.data.type = 'CARTE ROUTER';
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

  doLoadSlot(router: Router) {
    const _request = new Request<Caracteristique>();
    _request.data = new Caracteristique();
    _request.data.modele = router.modele;
    _request.takeAll = true;

    this._caracteristiqueService.get(_request, environment.origin,
      (response: Response<Caracteristique>) => {
        if (!response.hasError) {
          let _caracteristiquesSlot = Enumerable.From(response.items)
            .Where(function (x) { return x.libelle === 'SLOT'; })
            .Select(function (x) { return x; })
            .ToArray();

          if (_caracteristiquesSlot != null && _caracteristiquesSlot.length > 0) {
            if (isNaN(_caracteristiquesSlot[0].valeur) || (!isNaN(_caracteristiquesSlot[0].valeur) && Number(_caracteristiquesSlot[0].valeur) < 0)) {
              swal({
                title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                html:
                  'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique supérieure à 0 pour la propriété <b>PORT</b>',
                type: 'info',
                allowOutsideClick: false
              });
              this._modele = null;
              return;
            }

            for (let i = 1; i <= Number(_caracteristiquesSlot[0].valeur); i++) {
              let slot = i.toString();
              this._slotArray.push(slot);
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

  doChangeModele() {
    const _request = new Request<Caracteristique>();
    _request.data = new Caracteristique();
    _request.data.modele = this._modele.id;
    _request.takeAll = true;
    this._routerPortArray.length = 0;

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
                  'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique supérieure à 0 pour la propriété <b>PORT</b>',
                type: 'info',
                allowOutsideClick: false
              });
              this._modele = null;
              return;
            }

            for (let i = 1; i <= Number(_caracteristiquePort[0].valeur); i++) {
              let _routerPort = new RouterPort();
              _routerPort.numero = i.toString();
              this._routerPortArray.push(_routerPort);
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
    const _numero = this._routerCarte.numero;
    let isAny = Enumerable.From(this.data.routerCarteList)
      .Where(function (x) { return x.numero === _numero; })
      .Select(function (x) { return x; })
      .Any();

    if (isAny) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html:
          'Le slot <b>' + this._routerCarte.numero + '</b> est occupé',
        type: 'info',
        allowOutsideClick: false
      });
      return;
    }
    const _routerCarte = new RouterCarte();
    _routerCarte.numero = this._routerCarte.numero;
    _routerCarte.modele = this._modele.id;
    _routerCarte.paramModeleReference = this._modele.reference;
    _routerCarte.itemsOltRouterPort = this._routerPortArray;

    this._ngbActiveModal.close(_routerCarte);
  }

}
