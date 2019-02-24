import { Component, OnInit } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Site, SiteService } from 'web';
import { environment } from '../../../../../../environments/environment';
import { RessourcesModalService } from '../../../ressources-modal.service';

@Component({
  selector: 'ressources-generalites-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  private _siteList: any;

  constructor(private _siteService: SiteService, private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._siteList = {
      isRefresh: true,
      isSearch: true,
      isCreate: true,
      isModify: true,
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
        },
        {
          name: 'paramQuartierLibelle',
          text: 'Quartier',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'type',
          text: 'Type',
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<Site>();
        _request.data = new Site();
        _request.searchParam = searchParam;
        _request.index = this._siteList.index;
        _request.size = this._siteList.size;
        _request.takeAll = this._siteList.isTakeAll;

        this._siteService.getParamSite(_request, environment.origin,
          (response: Response<Site>) => {
            if (!response.hasError) {
              this._siteList.count = response.count;
              this._siteList.dataSource = response.items;
            } else {

            }
          });
      },
      doCreate: () => {
        this._ressourcesModalService.site().result.then(
          (result) => {
            this._siteList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doModify: (data: any) => {
        this._ressourcesModalService.site(data).result.then(
          (result) => {
            this._siteList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._siteList.doLoad();

  }

}
