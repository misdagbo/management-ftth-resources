import { Component, OnInit } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Commune, CommuneService } from 'web';
import { environment } from '../../../../../../environments/environment';
import { RessourcesModalService } from '../../../ressources-modal.service';

@Component({
  selector: 'ressources-generalites-commune-list',
  templateUrl: './commune-list.component.html',
  styleUrls: ['./commune-list.component.scss']
})
export class CommuneListComponent implements OnInit {

  public _communeList: any;

  constructor(private _communeService: CommuneService, private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._communeList = {
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
          name: 'libelle',
          text: 'Libellé',
          isSorting: true,
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<Commune>();
        _request.data = new Commune();
        _request.searchParam = searchParam;
        _request.index = this._communeList.index;
        _request.size = this._communeList.size;
        _request.takeAll = this._communeList.isTakeAll;

        this._communeService.get(_request, environment.origin,
          (response: Response<Commune>) => {
            if (!response.hasError) {
              this._communeList.count = response.count;
              this._communeList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.commune(data).result.then(
          (result) => {
            this._communeList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._ressourcesModalService.commune().result.then(
          (result) => {
            this._communeList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._communeList.doLoad();
  }

}
