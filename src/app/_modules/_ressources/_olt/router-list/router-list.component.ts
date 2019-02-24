import { Component, OnInit, Input } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Router, RouterService } from 'web';
import { environment } from '../../../../../environments/environment';
import { RessourcesModalService } from '../../ressources-modal.service';

@Component({
  selector: 'ressources-router-list',
  templateUrl: './router-list.component.html',
  styleUrls: ['./router-list.component.scss']
})
export class RouterListComponent implements OnInit {

  @Input() data;

  private _routerList: any;

  constructor(private _routerService: RouterService, private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._routerList = {
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
          name: 'nom',
          text: 'Nom',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'paramModeleReference',
          text: 'Modèle',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'paramNroLibelle',
          text: 'NRO',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'ip',
          text: 'IP',
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<Router>();
        _request.data = new Router();
        _request.searchParam = searchParam;
        _request.index = this._routerList.index;
        _request.size = this._routerList.size;
        _request.takeAll = this._routerList.isTakeAll;

        this._routerService.get(_request, environment.origin,
          (response: Response<Router>) => {
            if (!response.hasError) {
              this._routerList.count = response.count;
              this._routerList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.router(data).result.then(
          (result) => {
            this._routerList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._ressourcesModalService.router().result.then(
          (result) => {
            this._routerList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._routerList.doLoad();
  }

}
