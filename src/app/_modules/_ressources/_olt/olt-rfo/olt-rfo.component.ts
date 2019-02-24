import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Rfo, RfoService, RoePortRequest, Roe, RoeService, RoePortService, RoeModule, RoeModuleService, Travee, Fe, TraveeService, FeService } from 'web';
import { SharedService, Request, Response, TranslateService, GlobalEnum } from 'helper';
import { environment } from '../../../../../environments/environment';
import { RoePort } from 'app_modules/web/src/public_api';

declare var Enumerable: any;
declare var swal: any;
declare var $: any;

@Component({
  selector: 'ressources-olt-rfo',
  templateUrl: './olt-rfo.component.html',
  styleUrls: ['./olt-rfo.component.scss']
})
export class OltRfoComponent implements OnInit {

  @Input() data;

  _screenHeight: number;
  _screenWidth: number;

  _rfoArray: Array<any> = [];
  _rfoSelected: any;

  _roeSelected: any;
  _roeStyleWidth: any;
  _roeArray: Array<any> = [];
  _roeNiveauArray: Array<any> = [];

  _rfoTraveeSelected: any;
  _rfoFeSelected: any;
  _roeModuleSelected: any;
  _rfoTraveeArray: Array<any> = [];
  _rfoFeArray: Array<any> = [];
  _roePortModuleArray: Array<any> = [];

  constructor(private _sharedService: SharedService, private _rfoService: RfoService, private _roeService: RoeService,
    private _roeModuleService: RoeModuleService, private _translateService: TranslateService, private _roePortModuleService: RoePortService,
    private _traveeService: TraveeService, private _feService: FeService) { }

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
    this.doLoadRfo();
  }

  doBack() {
    this._sharedService.set({ __TAG: 'olt-ont', __DATA: { portPhysique: this.data.portPhysique, chassis: this.data.chassis } });
  }

  doLoadRfo() {
    const _request = new Request<Rfo>();
    _request.data = new Rfo();
    _request.data.nro = this.data.chassis.oltNroId;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._rfoService.get(_request, environment.origin,
      (response: Response<Rfo>) => {
        if (!response.hasError) {
          this._rfoArray = response.items;
          if (this._rfoArray && this._rfoArray.length > 0) {
            this._rfoSelected = this._rfoArray[0];
            this.doLoadTravee(this._rfoSelected);
          }
        } else {

        }
      });
  }

  doLoadTravee(rfo) {
    const _request = new Request<Travee>();
    _request.data = new Travee();
    _request.data.rfo = rfo.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._traveeService.get(_request, environment.origin,
      (response: Response<Travee>) => {
        if (!response.hasError) {
          this._rfoTraveeArray = response.items;
          if (this._rfoTraveeArray && this._rfoTraveeArray.length > 0) {
            this._rfoTraveeSelected = this._rfoTraveeArray[0];
            this.doLoadFe(this._rfoTraveeSelected);
          }
        } else {

        }
      });
  }

  doLoadFe(travee) {
    const _request = new Request<Fe>();
    _request.data = new Fe();
    _request.data.travee = travee.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._feService.get(_request, environment.origin,
      (response: Response<Fe>) => {
        if (!response.hasError) {
          this._rfoFeArray = response.items;
          if (this._rfoFeArray && this._rfoFeArray.length > 0) {
            let _fe = this._rfoFeArray[0];
            this.doLoadRoe(_fe);
          }
        } else {

        }
      });
  }

  doLoadRoe(fe) {
    const _request = new Request<Roe>();
    _request.data = new Roe();
    _request.data.fe = fe.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._rfoFeSelected = fe;

    this._roeService.get(_request, environment.origin,
      (response: Response<Roe>) => {
        if (!response.hasError) {
          this._roeArray = response.items;
          if (this._roeArray && this._roeArray.length > 0) {
            let _roe = this._roeArray[0];
            this.doLoadRoeModule(_roe);
          }
        } else {

        }
      });
  }

  doLoadRoeModule(roe) {
    const _request = new Request<RoeModule>();
    _request.data = new RoeModule();
    _request.data.roe = roe.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._roePortModuleArray.length = 0;
    this._roeNiveauArray.length = 0;
    this._roeModuleSelected = null;

    this._roeSelected = roe;

    this._roeModuleService.get(_request, environment.origin,
      (response: Response<RoeModule>) => {
        if (!response.hasError) {
          let empty = true;
          for (let i = 1; i <= roe.niveau; i++) {
            let found = false;
            if (response.count && response.count > 0) {
              empty = false;
              for (let roeModule of response.items) {
                if (Number(roeModule.numero) === i) {
                  found = true;
                  this._roeNiveauArray.push(roeModule);
                  break;
                }
              }
            }
            if (!found) {
              this._roeNiveauArray.push({ numero: i });
            }
          }
          if (empty) {
            this._roeStyleWidth = {
              'width': '133px'
            };
          } else {
            this._roeStyleWidth = {
              'width': ''
            };
          }
        } else {

        }
      });
  }

  doSelectRoeModule(roeModule) {
    this._roePortModuleArray.length = 0;
    if (roeModule.itemsRfoRoePortModule && roeModule.itemsRfoRoePortModule.length > 0) {
      this._roeModuleSelected = roeModule;

      for (let roeNiveau of this._roeNiveauArray) {
        Enumerable.From(roeNiveau.itemsRfoRoePortModule)
          .Where(function (x) { return x.paramEtatLibelle === 'OUT-PORT'; })
          .Select(function (x) { x.paramEtatLibelle = 'ETEINT'; return x; })
          .ToArray();
      }

      let _exitPort = 1;
      if (roeModule.splitter) {
        _exitPort = roeModule.splitter.split('/').pop();
        if (!roeModule.splitter.includes('/') || isNaN(_exitPort) || (!isNaN(_exitPort) && Number(_exitPort) < 0)) {
          swal({
            title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
            html:
              'Veuillez indiquer dans les propriété du modèle réf. <b>' + roeModule.paramModeleReference + '</b> une valeur <b>1/N</b> ou N supérieure à 0 pour la propriété <b>SPLITTER</b>',
            type: 'info',
            allowOutsideClick: false
          });
          return;
        }
      }

      let _count = 0;
      for (let roePortModule of roeModule.itemsRfoRoePortModule) {
        if (roePortModule.paramEtatLibelle === 'ETEINT') {
          roePortModule.etat = GlobalEnum._ALLUME_OLT;
          roePortModule.paramEtatLibelle = 'OUT-PORT';
          roePortModule.portPhysique = this.data.portPhysique.id;
          this._roePortModuleArray.push(roePortModule);
          _count++;
        }
        if (_count === Number(_exitPort)) {
          break;
        }
      }
    }
  }

  doValidate() {
    if (!this._roePortModuleArray || (this._roePortModuleArray && this._roePortModuleArray.length <= 0)) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html: 'Veuillez sélectionner le module auquel vous voulez connecter le port <b>' + this.data.portPhysique.reference,
        type: 'info',
        allowOutsideClick: false
      });
      return;
    }

    swal({
      title: this._translateService.instant('NOTIFY_CONFIRM_TITLE'),
      html: 'Souhaitez-vous connecter le port <b>' + this.data.portPhysique.reference + '</b> au module <b>' + this._roeModuleSelected.numero + '</b> de la ferme <b>FE ' + this._roeSelected.numero + '</b>',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: this._translateService.instant('NOTIFY_CONFIRM_YES'),
      cancelButtonText: this._translateService.instant('NOTIFY_CONFIRM_NO'),
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        const _request = new RoePortRequest();
        _request.datas = this._roePortModuleArray;
        _request.operator = 'APO';

        this._roePortModuleService.update(_request, environment.origin,
          (response: Response<RoePort>) => {
            if (!response.hasError) {
              this._sharedService.set({ __TAG: 'olt-chassis', __DATA: this.data.chassis });
            } else {

            }
          });
      }
    });
  }

}
