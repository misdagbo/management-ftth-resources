import { Component, OnInit, HostListener } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Sro, SroService } from 'web';
import { RessourcesModalService } from '../../ressources-modal.service';
import { environment } from '../../../../../environments/environment';

declare var $: any;

@Component({
  selector: 'ressources-sro-list',
  templateUrl: './sro-list.component.html',
  styleUrls: ['./sro-list.component.scss']
})
export class SroListComponent implements OnInit {

  private _sroList: any;

  _screenHeight: number;
  _screenWidth: number;

  constructor(private _sroService: SroService, private _ressourcesModalService: RessourcesModalService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this._screenHeight = window.innerHeight - 113;
    this._screenWidth = window.innerWidth;
  }

  ngOnInit() {

    this.onResize();

    $('.mCustomScrollbar').mCustomScrollbar({
      scrollButtons: { enable: true },
      theme: 'light-thick'
    });

    this._sroList = {
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
        const _request = new Request<Sro>();
        _request.data = new Sro();
        _request.searchParam = searchParam;
        _request.index = this._sroList.index;
        _request.size = this._sroList.size;
        _request.takeAll = this._sroList.isTakeAll;

        this._sroService.get(_request, environment.origin,
          (response: Response<Sro>) => {
            if (!response.hasError) {
              this._sroList.count = response.count;
              this._sroList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.sro(data).result.then(
          (result) => {
            this._sroList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._ressourcesModalService.sro().result.then(
          (result) => {
            this._sroList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._sroList.doLoad();
  }

}
