import { Component, OnInit, Input } from '@angular/core';
import { ModeleService, Modele, FibreCableTransport, Caracteristique, CaracteristiqueService, CableTransport, CableTransportService, CableTransportRequest, CouleurService, Couleur } from 'web';
import { Response, Request, TranslateService, GlobalEnum, SearchParam } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-cable-transport-create',
  templateUrl: './cable-transport-create.component.html',
  styleUrls: ['./cable-transport-create.component.scss']
})
export class CableTransportCreateComponent implements OnInit {

  @Input() data;

  _cableTransport: any = {};
  _modele: Modele = null;
  _modeleArray: Array<any> = [];
  _couleurArray: Array<any> = [];
  _rotPortFibreArray: Array<any> = [];
  _rotPortFibreSelectedArray: Array<any> = [];
  _fibreCableTransportArray: Array<any> = [];
  _fibreCableTransportSelectedArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _cableFoService: CableTransportService,
    private _modeleService: ModeleService, private _translateService: TranslateService,
    private _caracteristiqueService: CaracteristiqueService, private _couleurService: CouleurService) { }

  ngOnInit() {
    for (let rotModule of this.data.rotModules) {
      if (rotModule && rotModule.itemsRfoRotPortModule) {
        for (let rotPortModule of rotModule.itemsRfoRotPortModule) {
          if (rotPortModule.paramEtatLibelle === 'ETEINT') {
            let rotPortFibre = new FibreCableTransport();
            rotPortFibre.numero = 'F' + (((Number(rotModule.numero) - 1) * rotModule.itemsRfoRotPortModule.length) + Number(rotPortModule.numero)).toString();
            rotPortFibre.rotPortModule = rotPortModule.id;
            rotPortFibre.couleur = Number(rotPortModule.numero);
            rotPortFibre.etat = GlobalEnum._NOT_USED;
            this._rotPortFibreArray.push(rotPortFibre);
          }
        }
      }
    }
    this.doLoadModele();
    this.doLoadCouleur();
  }

  doLoadModele() {
    const _request = new Request<Modele>();
    _request.data = new Modele();
    _request.data.type = 'CABLE TRANSPORT';
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

  doLoadCouleur() {
    const _request = new Request<Couleur>();
    _request.data = new Couleur();
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._couleurService.get(_request, environment.origin,
      (response: Response<Couleur>) => {
        if (!response.hasError) {
          this._couleurArray = response.items;
        } else {

        }
      });
  }

  doChangeModele() {
    const _request = new Request<Caracteristique>();
    _request.data = new Caracteristique();
    _request.data.modele = this._modele.id;
    _request.takeAll = true;

    this._caracteristiqueService.get(_request, environment.origin,
      (response: Response<Caracteristique>) => {
        if (!response.hasError) {
          let _caracteristiqueCapacite = Enumerable.From(response.items)
            .Where(function (x) { return x.libelle === 'CAPACITE'; })
            .Select(function (x) { return x; })
            .ToArray();

          if (_caracteristiqueCapacite != null && _caracteristiqueCapacite.length > 0) {
            if (isNaN(_caracteristiqueCapacite[0].valeur)) {
              swal({
                title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                html:
                  'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique pour la propriété <b>CAPACITE</b>',
                type: 'info',
                allowOutsideClick: false
              });
              this._modele = null;
              return;
            }
            this._cableTransport.capacite = Number(_caracteristiqueCapacite[0].valeur);
          } else {
            swal({
              title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
              html:
                'Veuillez définir la propriété <b>CAPACITE</b> du modèle réf. <b>' + this._modele.reference + '</b>',
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

  doSelectRotPortFibre(rotPortFibre) {
    rotPortFibre.selected = true;
    const isAny = Enumerable.From(this._rotPortFibreSelectedArray)
      .Where(function (x) { return x.numero === rotPortFibre.numero; })
      .Select(function (x) { return x; })
      .Any();
    if (!isAny) {
      this._rotPortFibreSelectedArray.push(rotPortFibre);
    }
  }

  doSelectFibreCableTransport(fibreCableTransport) {
    fibreCableTransport.selected = true;
    const isAny = Enumerable.From(this._rotPortFibreSelectedArray)
      .Where(function (x) { return x.numero === fibreCableTransport.numero; })
      .Select(function (x) { return x; })
      .Any();
    if (!isAny) {
      this._fibreCableTransportSelectedArray.push(fibreCableTransport);
    }
  }

  doAdd() {
    if (this._rotPortFibreSelectedArray.length > this._cableTransport.capacite) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html: 'Le câble ne peut contenir que ' + this._cableTransport.capacite + ' fibres',
        type: 'info',
        allowOutsideClick: false
      });
      return;
    }
    for (let rotPortFibre of this._rotPortFibreSelectedArray) {
      rotPortFibre.selected = false;
      this._fibreCableTransportArray.push(rotPortFibre);
      this._rotPortFibreArray.splice(this._rotPortFibreArray.indexOf(rotPortFibre), 1);
    }
    this._rotPortFibreSelectedArray.length = 0;
  }

  doRemove() {
    for (let fibreCableTransport of this._fibreCableTransportSelectedArray) {
      fibreCableTransport.selected = false;
      this._rotPortFibreArray.push(fibreCableTransport);
      this._fibreCableTransportArray.splice(this._fibreCableTransportArray.indexOf(fibreCableTransport), 1);
    }
    this._fibreCableTransportSelectedArray.length = 0;
  }

  doAddAll() {
    if (this._rotPortFibreArray.length > this._cableTransport.capacite) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html: 'Le câble ne peut contenir que ' + this._cableTransport.capacite + ' fibres',
        type: 'info',
        allowOutsideClick: false
      });
      return;
    }
    for (let rotPortFibre of this._rotPortFibreArray) {
      rotPortFibre.selected = false;
      this._fibreCableTransportArray.push(rotPortFibre);
    }
    this._rotPortFibreSelectedArray.length = 0;
    this._rotPortFibreArray.length = 0;
  }

  doRemoveAll() {
    for (let fibreCableTransport of this._fibreCableTransportArray) {
      fibreCableTransport.selected = false;
      this._rotPortFibreArray.push(fibreCableTransport);
    }
    this._fibreCableTransportSelectedArray.length = 0;
    this._fibreCableTransportArray.length = 0;
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
        const _request = new CableTransportRequest();
        this._cableTransport.rfo = this.data.rfo.id;
        this._cableTransport.modele = this._modele.id;
        _request.datasRfoFibreTransport = this._fibreCableTransportArray;
        _request.datas = [this._cableTransport];

        if (this._cableTransport.id && this._cableTransport.id > 0) {
          this._cableFoService.update(_request, environment.origin,
            (response: Response<CableTransport>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._cableFoService.create(_request, environment.origin,
            (response: Response<CableTransport>) => {
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
