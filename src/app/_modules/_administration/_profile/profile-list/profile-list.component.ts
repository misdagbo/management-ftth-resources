import { Component, OnInit } from '@angular/core';
import { AdministrationModalService } from '../../administration-modal.service';
import { GlobalEnum, Request, Response } from 'helper';
import { Profile, ProfileService } from 'web';
import { environment } from '../../../../../environments/environment';
import { FonctionnaliteListComponent } from '../../_fonctionnalite/fonctionnalite-list/fonctionnalite-list.component';

@Component({
  selector: 'administration-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  public _profileList: any;

  constructor(private _administrationModalService: AdministrationModalService, private _profileService: ProfileService) { }

  ngOnInit() {
    this._profileList = {
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
          name: 'libelle',
          text: 'Libellé',
          isSorting: true,
          isEditable: true,
          type: 'text'
        }
      ],
      viewChild: FonctionnaliteListComponent,
      doLoad: (searchParam?: any) => {
        const _request = new Request<Profile>();
        _request.data = new Profile();
        _request.searchParam = searchParam;
        _request.index = this._profileList.index;
        _request.size = this._profileList.size;
        _request.takeAll = this._profileList.isTakeAll;

        this._profileService.get(_request, environment.origin,
          (response: Response<Profile>) => {
            if (!response.hasError) {
              this._profileList.count = response.count;
              this._profileList.dataSource = response.items;
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this._administrationModalService.profile(data).result.then(
          (result) => {
            this._profileList.doLoad();
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        this._administrationModalService.profile().result.then(
          (result) => {
            this._profileList.doLoad();
          },
          (reason) => {

          }
        );
      }
    };

    this._profileList.doLoad();
  }

}
