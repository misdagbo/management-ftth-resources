import { Component, OnInit } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { Fournisseur, FournisseurService } from 'web';
import { environment } from '../../../../../../environments/environment';
import { RessourcesModalService } from '../../../ressources-modal.service';

@Component({
  selector: 'ressources-generalites-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.scss']
})
export class FournisseurListComponent implements OnInit {

  public _fournisseurList: any;

  constructor(private _fournisseurService: FournisseurService, private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._fournisseurList = {
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
          name: 'raison',
          text: 'Raison sociale',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'contact',
          text: 'Contact',
          type: 'text'
        },
        {
          name: 'email',
          text: 'e-mail',
          type: 'text'
        },
        {
          name: 'adresse',
          text: 'Adresse',
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<Fournisseur>();
        _request.data = new Fournisseur();
        _request.searchParam = searchParam;
        _request.index = this._fournisseurList.index;
        _request.size = this._fournisseurList.size;
        _request.takeAll = this._fournisseurList.isTakeAll;

        this._fournisseurService.get(_request, environment.origin,
          (response: Response<Fournisseur>) => {
            if (!response.hasError) {
              this._fournisseurList.count = response.count;
              this._fournisseurList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._ressourcesModalService.fournisseur(data).result.then(
          (result) => {
            this._fournisseurList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._ressourcesModalService.fournisseur().result.then(
          (result) => {
            this._fournisseurList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._fournisseurList.doLoad();
  }

}
