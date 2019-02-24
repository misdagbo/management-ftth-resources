import { Component, OnInit, Input } from '@angular/core';
import { Request, Response, GlobalEnum } from 'helper';
import { ProfileFonctionnalite, ProfileFonctionnaliteService } from 'web';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'administration-fonctionnalite-list',
  templateUrl: './fonctionnalite-list.component.html',
  styleUrls: ['./fonctionnalite-list.component.scss']
})
export class FonctionnaliteListComponent implements OnInit {

  @Input() data;
  private _fonctionnaliteList: any;

  constructor(private _fonctionnaliteService: ProfileFonctionnaliteService) { }

  ngOnInit() {
    this._fonctionnaliteList = {
      isTakeAll: true,
      columns: [
        {
          name: 'adminFonctionnaliteLibelle',
          text: 'Libellé',
          isSorting: true,
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<ProfileFonctionnalite>();
        _request.data = new ProfileFonctionnalite();
        if (this.data) {
          _request.data.profile = (this.data.profile) ? this.data.profile : this.data.id;
        }
        _request.takeAll = this._fonctionnaliteList.isTakeAll;
        _request.orderBy = GlobalEnum._ORDER_BY_ASC;

        this._fonctionnaliteService.get(_request, environment.origin,
          (response: Response<ProfileFonctionnalite>) => {
            if (!response.hasError) {
              this._fonctionnaliteList.count = response.count;
              this._fonctionnaliteList.dataSource = response.items;
            } else {

            }
          });
      }
    };

    this._fonctionnaliteList.doLoad();
  }

}
