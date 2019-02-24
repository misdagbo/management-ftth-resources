import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Ttt, TttService, Tot, TotService, TotCoupleurService } from 'web';
import { Request, Response, GlobalEnum, TranslateService, SharedService } from 'helper';
import { environment } from '../../../../../environments/environment';
import { RessourcesModalService } from '../../ressources-modal.service';
import { TotCoupleur } from 'app_modules/web/src/public_api';

declare var Enumerable: any;
declare var swal: any;
declare var $: any;

@Component({
  selector: 'ressources-ttt-chassis',
  templateUrl: './ttt-chassis.component.html',
  styleUrls: ['./ttt-chassis.component.scss']
})
export class TttChassisComponent implements OnInit {

  @Input() data;

  _screenHeight: number;
  _screenWidth: number;

  _tttArray: Array<any> = [];
  _totArray: Array<any> = [];
  _tttSelected: any;
  _totSelected: any;
  _tttPortSelected: any;
  _totCoupleurSelected: any;
  _n1Array: Array<any> = [];
  _n2Array: Array<any> = [];

  constructor(private _tttService: TttService, private _totCoupleurService: TotCoupleurService, private _translateService: TranslateService,
    private _totService: TotService, private _sharedService: SharedService, private _ressourcesModalService: RessourcesModalService) { }

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
    this.doLoadTtt();
    this.doLoadTot();
  }

  doLoadTtt() {
    const _request = new Request<Ttt>();
    _request.data = new Ttt();
    _request.data.sro = this.data.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._tttService.get(_request, environment.origin,
      (response: Response<Ttt>) => {
        if (!response.hasError) {
          this._tttArray = response.items;
          if (this._tttArray && this._tttArray.length > 0) {
            this._tttSelected = this._tttArray[0];
          }
        } else {

        }
      });
  }

  doLoadTot() {
    const _request = new Request<Tot>();
    _request.data = new Tot();
    _request.data.sro = this.data.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._totService.get(_request, environment.origin,
      (response: Response<Tot>) => {
        if (!response.hasError) {
          this._totArray = Enumerable.From(response.items)
            .Select(function (x) {
              x.labelNumero = 'T0' + x.numero.charAt(x.numero.length - 1);
              return x;
            })
            .ToArray();
          if (this._totArray && this._totArray.length > 0) {
            this._totSelected = this._totArray[0];
          }
        } else {

        }
      });
  }

  doSelectTttPort(tttPort) {
    if (tttPort.paramEtatLibelle === 'OFF-USED' || tttPort.paramEtatLibelle === 'ALLUME-USED') {
      const _request = new Request<RfoJarretiere>();
      _request.data = new RfoJarretiere();
      _request.data.roePortModule = roePort.id;

      this._rfoJarretiere = null;
      this._rotPortSelected = null;
      this._roePortSelected = roePort;

      this._rfoJarretiereService.get(_request, environment.origin,
        (response: Response<RfoJarretiere>) => {
          if (!response.hasError) {
            if (response.count && response.count > 0) {
              this._rfoJarretiere = response.items[0];
              const _rfoJarretiere = this._rfoJarretiere;
              this._rotSelected = Enumerable.From(this._rotArray)
                .Where(function (x) { return x.id === _rfoJarretiere.rfoRotModuleRot; })
                .Select(function (x) { return x; })
                .First();
              this.doLoadRotModule(this._rotSelected);
            }
          } else {

          }
        });
    }
    if (tttPort.paramEtatLibelle === 'OFF-USED') {
      this._tttPortSelected = tttPort;
    }
    let _totCoupleurs = Enumerable.From(this._totSelected.sroTiroirTransportCoupleur)
      .Where(function (x) { return x.portTiroirTransition === tttPort.id; })
      .Select(function (x) { return x; })
      .ToArray();
    if (_totCoupleurs && _totCoupleurs.length > 0) {
      this._totCoupleurSelected = _totCoupleurs[0];
      this._totCoupleurSelected.status = 3;
      this._totCoupleurSelected.portTiroirTransition = tttPort.id;
    }
  }

  doSelectTotCoupleur(totCoupleur) {
    if (!totCoupleur.status || totCoupleur.status === 0) {
      this._totCoupleurSelected = totCoupleur;
      this._totCoupleurSelected.status = 3;
      this._totCoupleurSelected.portTiroirTransition = this._tttPortSelected.id;
    }
  }

  doAddTtt() {
    this._ressourcesModalService.ttt(this.data).result.then(
      (result) => {
        this.doLoadTtt();
      },
      (reason) => {

      }
    );
  }

  doAllumageTtt() {
    this._ressourcesModalService.tttAllumage({ sro: this.data, ttt: this._tttSelected }).result.then(
      (result) => {
        this.doLoadTtt();
      },
      (reason) => {

      }
    );
  }

  doApply() {
    swal({
      title: this._translateService.instant('NOTIFY_CONFIRM_TITLE'),
      text: this._translateService.instant('NOTIFY_CONFIRM_TEXT'),
      type: 'question',
      showCancelButton: true,
      confirmButtonText: this._translateService.instant('NOTIFY_CONFIRM_YES'),
      cancelButtonText: this._translateService.instant('NOTIFY_CONFIRM_NO'),
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        const _request = new Request<TotCoupleur>();
        _request.datas = [this._totCoupleurSelected];

        this._totCoupleurService.update(_request, environment.origin,
          (response: Response<TotCoupleur>) => {
            if (!response.hasError) {
              this._tttPortSelected = null;
              this._totCoupleurSelected = null;
              this.doLoadTot();
            } else {

            }
          });
      }
    });
  }

  doBack() {
    this._sharedService.set({ __TAG: 'sro-chassis', __DATA: this.data });
  }

}
