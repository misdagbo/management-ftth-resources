import { Component, OnInit } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Modele, ModeleService } from 'web';
import { environment } from '../../../../../../environments/environment';
import { RessourcesModalService } from '../../../ressources-modal.service';

@Component({
  selector: 'ressources-generalites-modele-list',
  templateUrl: './modele-list.component.html',
  styleUrls: ['./modele-list.component.scss']
})
export class ModeleListComponent implements OnInit {

  public _modeleList: any;

  constructor(private _modeleService: ModeleService, private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._modeleList = {
      isHeader: true,
      isRefresh: true,
      isSearch: true,
      isModify: true,
      isCreate: true,
      isTakeAll: false,
      szSearch: GlobalEnum._MD,
      szTable: GlobalEnum._SM,
      index: GlobalEnum._INDEX,
      size: GlobalEnum._SIZE,
      columns: [
        {
          name: 'reference',
          text: 'Réference',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'type',
          text: 'Type',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'paramFournisseurRaison',
          text: 'Fournisseur',
          isSorting: true,
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<Modele>();
        _request.data = new Modele();
        _request.searchParam = searchParam;
        _request.index = this._modeleList.index;
        _request.size = this._modeleList.size;
        _request.takeAll = this._modeleList.isTakeAll;

        this._modeleService.get(_request, environment.origin,
          (response: Response<Modele>) => {
            if (!response.hasError) {
              this._modeleList.count = response.count;
              this._modeleList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.modele(data).result.then(
          (result) => {
            this._modeleList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._ressourcesModalService.modele().result.then(
          (result) => {
            this._modeleList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._modeleList.doLoad();
  }

}
