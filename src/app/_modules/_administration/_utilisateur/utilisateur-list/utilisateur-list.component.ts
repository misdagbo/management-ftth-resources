import { Component, OnInit } from '@angular/core';
import { AdministrationModalService } from '../../administration-modal.service';
import { GlobalEnum, Request, Response } from 'helper';
import { Utilisateur, UtilisateurService } from 'web';
import { environment } from '../../../../../environments/environment';
import { FonctionnaliteListComponent } from '../../_fonctionnalite/fonctionnalite-list/fonctionnalite-list.component';

@Component({
  selector: 'administration-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.scss']
})
export class UtilisateurListComponent implements OnInit {

  public _utilisateurList: any;

  constructor(private _administrationModalService: AdministrationModalService, private _utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this._utilisateurList = {
      isHeader: true,
      isRefresh: true,
      isDetails: true,
      isSearch: true,
      isModify: true,
      isCreate: true,
      isTakeAll: false,
      szSearch: GlobalEnum._SM,
      szTable: GlobalEnum._SM,
      index: GlobalEnum._INDEX,
      size: GlobalEnum._SIZE,
      columns: [
        {
          name: 'name',
          text: 'Nom',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'login',
          text: 'Login',
          isSorting: true,
          type: 'text'
        },
        {
          name: 'adminProfileLibelle',
          text: 'Profile',
          isSorting: true,
          type: 'text'
        }
      ],
      viewChild: FonctionnaliteListComponent,
      doLoad: (searchParam?: any) => {
        const _request = new Request<Utilisateur>();
        _request.data = new Utilisateur();
        _request.searchParam = searchParam;
        _request.index = this._utilisateurList.index;
        _request.size = this._utilisateurList.size;
        _request.takeAll = this._utilisateurList.isTakeAll;

        this._utilisateurService.get(_request, environment.origin,
          (response: Response<Utilisateur>) => {
            if (!response.hasError) {
              this._utilisateurList.count = response.count;
              this._utilisateurList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._administrationModalService.utilisateur(data).result.then(
          (result) => {
            this._utilisateurList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._administrationModalService.utilisateur().result.then(
          (result) => {
            this._utilisateurList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._utilisateurList.doLoad();
  }
}
