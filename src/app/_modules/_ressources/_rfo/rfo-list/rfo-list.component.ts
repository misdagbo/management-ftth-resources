import { Component, OnInit } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Rfo, RfoService } from 'web';
import { RessourcesModalService } from '../../ressources-modal.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ressources-rfo-list',
  templateUrl: './rfo-list.component.html',
  styleUrls: ['./rfo-list.component.scss']
})
export class RfoListComponent implements OnInit {

  private _rfoList: any;

  constructor(private _rfoService: RfoService, private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._rfoList = {
      isRefresh: true,
      isCreate: true,
      isSearch: true,
      isModify: true,
      isSelected: true,
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
          name: 'type',
          text: 'Type',
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
          name: 'latitude',
          text: 'Latitude',
          type: 'text'
        },
        {
          name: 'longitude',
          text: 'Longitude',
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<Rfo>();
        _request.data = new Rfo();
        _request.searchParam = searchParam;
        _request.index = this._rfoList.index;
        _request.size = this._rfoList.size;
        _request.takeAll = this._rfoList.isTakeAll;

        this._rfoService.get(_request, environment.origin,
          (response: Response<Rfo>) => {
            if (!response.hasError) {
              this._rfoList.count = response.count;
              this._rfoList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.rfo(data).result.then(
          (result) => {
            this._rfoList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._ressourcesModalService.rfo().result.then(
          (result) => {
            this._rfoList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._rfoList.doLoad();
  }

}
