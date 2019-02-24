import { Component, OnInit } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Olt, OltService } from 'web';
import { RessourcesModalService } from '../../ressources-modal.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ressources-olt-list',
  templateUrl: './olt-list.component.html',
  styleUrls: ['./olt-list.component.scss']
})
export class OltListComponent implements OnInit {

  private _oltList: any;

  constructor(private _oltService: OltService, private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._oltList = {
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
        const _request = new Request<Olt>();
        _request.data = new Olt();
        _request.searchParam = searchParam;
        _request.index = this._oltList.index;
        _request.size = this._oltList.size;
        _request.takeAll = this._oltList.isTakeAll;

        this._oltService.get(_request, environment.origin,
          (response: Response<Olt>) => {
            if (!response.hasError) {
              this._oltList.count = response.count;
              this._oltList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.olt(data).result.then(
          (result) => {
            this._oltList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._ressourcesModalService.olt().result.then(
          (result) => {
            this._oltList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._oltList.doLoad();
  }

}
