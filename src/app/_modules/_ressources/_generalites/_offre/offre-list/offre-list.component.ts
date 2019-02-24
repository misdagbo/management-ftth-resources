import { Component, OnInit } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Offre, OffreService } from 'web';
import { environment } from '../../../../../../environments/environment';
import { RessourcesModalService } from '../../../ressources-modal.service';

@Component({
  selector: 'ressources-generalites-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.scss']
})
export class OffreListComponent implements OnInit {

  public _offreList: any;

  constructor(private _offreService: OffreService, private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._offreList = {
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
          name: 'code',
          text: 'Code',
          type: 'text'
        },
        {
          name: 'debit',
          text: 'Débit',
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<Offre>();
        _request.data = new Offre();
        _request.searchParam = searchParam;
        _request.index = this._offreList.index;
        _request.size = this._offreList.size;
        _request.takeAll = this._offreList.isTakeAll;

        this._offreService.get(_request, environment.origin,
          (response: Response<Offre>) => {
            if (!response.hasError) {
              this._offreList.count = response.count;
              this._offreList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.offre(data).result.then(
          (result) => {
            this._offreList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._ressourcesModalService.offre().result.then(
          (result) => {
            this._offreList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._offreList.doLoad();
  }

}
