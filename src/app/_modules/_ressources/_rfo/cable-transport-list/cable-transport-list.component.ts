import { Component, OnInit, Input } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { CableTransport, CableTransportService } from 'web';
import { environment } from '../../../../../environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'ressources-cable-transport-list',
  templateUrl: './cable-transport-list.component.html',
  styleUrls: ['./cable-transport-list.component.scss']
})
export class CableTransportListComponent implements OnInit {

  @Input() data;

  private _cableTransportList: any;

  constructor(public _ngbActiveModal: NgbActiveModal, private _cableTransportService: CableTransportService) { }

  ngOnInit() {
    this._cableTransportList = {
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
          name: 'paramModeleReference',
          text: 'Modèle',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'rfoNom',
          text: 'RFO',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'paramNroLibelle',
          text: 'SRO',
          isSorting: true,
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<CableTransport>();
        _request.data = new CableTransport();
        _request.data.rfo = this.data.id;
        _request.searchParam = searchParam;
        _request.index = this._cableTransportList.index;
        _request.size = this._cableTransportList.size;
        _request.takeAll = this._cableTransportList.isTakeAll;

        this._cableTransportService.get(_request, environment.origin,
          (response: Response<CableTransport>) => {
            if (!response.hasError) {
              this._cableTransportList.count = response.count;
              this._cableTransportList.dataSource = response.items;
            } else {

            }
          });
      }
    };


    if (this.data && this.data.id) {
      this._cableTransportList.doLoad();
    }
  }

}
