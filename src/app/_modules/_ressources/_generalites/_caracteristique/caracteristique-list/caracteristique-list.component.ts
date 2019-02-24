import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response, Request, GlobalEnum, TranslateService } from 'helper';
import { Caracteristique, CaracteristiqueService } from 'web';
import { environment } from '../../../../../../environments/environment';
import { RessourcesModalService } from '../../../ressources-modal.service';

declare var swal: any;

@Component({
  selector: 'ressources-generalites-caracteristique-list',
  templateUrl: './caracteristique-list.component.html',
  styleUrls: ['./caracteristique-list.component.scss']
})
export class CaracteristiqueListComponent implements OnInit {

  @Input() data;
  @Output() onAddCaracteristique = new EventEmitter<any>();

  public _caracteristiqueList: any;

  constructor(private _caracteristiqueService: CaracteristiqueService,
    private _ressourcesModalService: RessourcesModalService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._caracteristiqueList = {
      isHeader: true,
      isCreate: true,
      isDeleted: true,
      isTakeAll: true,
      szSearch: GlobalEnum._MD,
      szTable: GlobalEnum._SM,
      index: GlobalEnum._INDEX,
      size: GlobalEnum._SIZE,
      dataSource: [],
      count: 0,
      columns: [
        {
          name: 'libelle',
          text: 'Propriétés',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'valeur',
          text: 'Valeur',
          type: 'text'
        },
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<Caracteristique>();
        _request.data = new Caracteristique();
        _request.data.modele = this.data.id;
        _request.takeAll = this._caracteristiqueList.isTakeAll;

        this._caracteristiqueService.get(_request, environment.origin,
          (response: Response<Caracteristique>) => {
            if (!response.hasError) {
              if (response.count && response.count > 0) {
                this._caracteristiqueList.count = response.count;
                this._caracteristiqueList.dataSource = response.items;
              }
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.caracteristique(data).result.then(
          (result) => {
            this._caracteristiqueList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        if (!this.data.reference) {
          swal({
            title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
            html: 'Veuillez renseigner la référence du modèle',
            type: 'info',
            allowOutsideClick: false
          });
          return;
        }
        this.data.caracteristiqueList = this._caracteristiqueList.dataSource;
        this._ressourcesModalService.caracteristique(this.data).result.then(
          (result) => {
            this.doAddCaracteristique(result);
          },
          (reason) => {

          }
        );
      },
      doDelete: (data: any) => {
        if (!data.id) {
          const index = this._caracteristiqueList.dataSource.indexOf(data);
          if (index > -1) {
            this._caracteristiqueList.dataSource.splice(index, 1);
          }
        }
      }
    };

    if (this.data && this.data.id) {
      this._caracteristiqueList.doLoad();
    }

  }

  doAddCaracteristique(result: any) {
    this._caracteristiqueList.dataSource.unshift(result);
    this._caracteristiqueList.count++;
    this.onAddCaracteristique.emit(result);
  }

}
