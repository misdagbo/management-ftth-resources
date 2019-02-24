import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response, Request, GlobalEnum, TranslateService } from 'helper';
import { RouterCarte, RouterCarteService } from 'web';
import { environment } from '../../../../../environments/environment';
import { RessourcesModalService } from '../../ressources-modal.service';

declare var swal: any;

@Component({
  selector: 'ressources-router-carte-list',
  templateUrl: './router-carte-list.component.html',
  styleUrls: ['./router-carte-list.component.scss']
})
export class RouterCarteListComponent implements OnInit {

  @Input() data;
  @Output() onAddCarte = new EventEmitter<any>();

  public _routerCarteList: any;

  constructor(private _routerCarteService: RouterCarteService, private _translateService: TranslateService,
    private _ressourcesModalService: RessourcesModalService) { }

  ngOnInit() {
    this._routerCarteList = {
      isHeader: true,
      isDeleted: true,
      isCreate: true,
      isTakeAll: true,
      szSearch: GlobalEnum._MD,
      szTable: GlobalEnum._SM,
      index: GlobalEnum._INDEX,
      size: GlobalEnum._SIZE,
      dataSource: [],
      count: 0,
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
        }
      ],
      doLoad: () => {
        const _request = new Request<RouterCarte>();
        _request.data = new RouterCarte();
        _request.data.router = this.data.id;
        _request.orderBy = GlobalEnum._ORDER_BY_ASC;
        _request.takeAll = this._routerCarteList.isTakeAll;

        this._routerCarteService.get(_request, environment.origin,
          (response: Response<RouterCarte>) => {
            if (!response.hasError) {
              if (response.count && response.count > 0) {
                this._routerCarteList.count = response.count;
                this._routerCarteList.dataSource = response.items;
              }
            } else {

            }
          });
      },
      doModify: (data: any) => {
        this.data.routerCarteList = this._routerCarteList.dataSource;
        this._ressourcesModalService.routerCarte(data).result.then(
          (result) => {
            this.doAddCarte(result);
          },
          (reason) => {

          }
        );
      },
      doCreate: () => {
        if (!this.data.nom) {
          swal({
            title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
            html:
              'Veuillez renseigner le nom du router',
            type: 'info',
            allowOutsideClick: false
          });
          return;
        }
        if (!this.data.modele) {
          swal({
            title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
            html:
              'Veuillez définir le modèle du router',
            type: 'info',
            allowOutsideClick: false
          });
          return;
        }
        this.data.routerCarteList = this._routerCarteList.dataSource;
        this._ressourcesModalService.routerCarte(this.data).result.then(
          (result) => {
            this.doAddCarte(result);
          },
          (reason) => {

          }
        );
      },
      doDelete: (data: any) => {
        if (!data.id) {
          const index = this._routerCarteList.dataSource.indexOf(data);
          if (index > -1) {
            this._routerCarteList.dataSource.splice(index, 1);
          }
        }
      }
    };

    if (this.data && this.data.id) {
      this._routerCarteList.doLoad();
    }

  }

  doAddCarte(result: any) {
    this._routerCarteList.dataSource.unshift(result);
    this._routerCarteList.count++;
    this.onAddCarte.emit(result);
  }

}
