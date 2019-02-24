import { Component, OnInit, HostListener } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Pb, PbService } from 'web';
import { RessourcesModalService } from '../../ressources-modal.service';
import { environment } from '../../../../../environments/environment';

declare var $: any;

@Component({
  selector: 'ressources-pb-list',
  templateUrl: './pb-list.component.html',
  styleUrls: ['./pb-list.component.scss']
})
export class PbListComponent implements OnInit {

  private _pbList: any;

  _screenHeight: number;
  _screenWidth: number;

  constructor(private _pbService: PbService, private _ressourcesModalService: RessourcesModalService) { }

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

    this._pbList = {
      isRefresh: true,
      isSearch: true,
      isTakeAll: false,
      szSearch: GlobalEnum._MD,
      szTable: GlobalEnum._SM,
      index: GlobalEnum._INDEX,
      size: GlobalEnum._SIZE,
      columns: [
        {
          name: 'numero',
          text: 'Numéro',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'paramSiteLibelle',
          text: 'Site',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'paramSroLibelle',
          text: 'SRO',
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
        const _request = new Request<Pb>();
        _request.data = new Pb();
        _request.searchParam = searchParam;
        _request.index = this._pbList.index;
        _request.size = this._pbList.size;
        _request.takeAll = this._pbList.isTakeAll;

        this._pbService.get(_request, environment.origin,
          (response: Response<Pb>) => {
            if (!response.hasError) {
              this._pbList.count = response.count;
              this._pbList.dataSource = response.items;
            } else {

            }
          });
      }
    };

    this._pbList.doLoad();
  }

}
