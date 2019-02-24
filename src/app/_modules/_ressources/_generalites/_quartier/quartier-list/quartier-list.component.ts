import { Component, OnInit } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Quartier, QuartierService } from 'web';
import { environment } from '../../../../../../environments/environment';
import { RessourcesModalService } from '../../../ressources-modal.service';

@Component({
  selector: 'ressources-generalites-quartier-list',
  templateUrl: './quartier-list.component.html',
  styleUrls: ['./quartier-list.component.scss']
})
export class QuartierListComponent implements OnInit {

  public _quartierList: any;

  constructor(private _quartierService: QuartierService, private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._quartierList = {
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
        },
        {
          name: 'paramCommuneLibelle',
          text: 'Commune',
          isSorting: true,
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<Quartier>();
        _request.data = new Quartier();
        _request.searchParam = searchParam;
        _request.index = this._quartierList.index;
        _request.size = this._quartierList.size;
        _request.takeAll = this._quartierList.isTakeAll;

        this._quartierService.get(_request, environment.origin,
          (response: Response<Quartier>) => {
            if (!response.hasError) {
              this._quartierList.count = response.count;
              this._quartierList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.quartier(data).result.then(
          (result) => {
            this._quartierList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._ressourcesModalService.quartier().result.then(
          (result) => {
            this._quartierList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._quartierList.doLoad();
  }

}
