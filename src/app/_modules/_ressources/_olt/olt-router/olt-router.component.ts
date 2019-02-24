import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router, RouterService, RouterCarte, RouterCarteService, RouterPortService, RouterPort } from 'web';
import { SharedService, Request, Response, TranslateService, GlobalEnum } from 'helper';
import { environment } from 'src/environments/environment';

declare var Enumerable: any;
declare var swal: any;
declare var $: any;

@Component({
  selector: 'ressources-olt-router',
  templateUrl: './olt-router.component.html',
  styleUrls: ['./olt-router.component.scss']
})
export class OltRouterComponent implements OnInit {

  @Input() data;

  _screenHeight: number;
  _screenWidth: number;

  _routerSelected: any;
  _routerArray: Array<any> = [];
  _routerSlotArray: Array<any> = [];
  _oltLinkSelected: any;
  _routerPortSelected: any;

  constructor(private _sharedService: SharedService, private _routerService: RouterService, private _routerPortService: RouterPortService,
    private _routerCarteService: RouterCarteService, private _translateService: TranslateService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this._screenHeight = window.innerHeight - 113;
    this._screenWidth = window.innerWidth;
  }

  ngOnInit() {
    this._oltLinkSelected = this.data.link;
    this.onResize();
    $('.mCustomScrollbar').mCustomScrollbar({
      scrollButtons: { enable: true },
      theme: 'light-thick'
    });
    this.doLoadRouter();
  }

  doBack() {
    this._sharedService.set({ __TAG: 'olt-chassis', __DATA: this.data.chassis });
  }

  doLoadRouter() {
    const _request = new Request<Router>();
    _request.data = new Router();
    _request.data.nro = this.data.chassis.oltNroId;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._routerService.get(_request, environment.origin,
      (response: Response<Router>) => {
        if (!response.hasError) {
          this._routerArray = response.items;
          if (this._routerArray && this._routerArray.length > 0) {
            this._routerSelected = this._routerArray[0];
            this.doLoadCarte(this._routerSelected);
          }
        } else {

        }
      });
  }

  doLoadCarte(router) {
    const _request = new Request<RouterCarte>();
    _request.data = new RouterCarte();
    _request.data.router = router.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._routerSlotArray.length = 0;
    this._routerPortSelected = null;
    this._routerSelected = router;

    this._routerCarteService.get(_request, environment.origin,
      (response: Response<RouterCarte>) => {
        if (!response.hasError) {
          for (let i = 1; i <= router.numberSlot; i++) {
            let found = false;
            if (this._routerSlotArray && this._routerSlotArray.length > 0) {
              for (let carte of response.items) {
                if (Number(carte.numero) === i) {
                  found = true;
                  const _link = this._oltLinkSelected;
                  const _routerPortArray = Enumerable.From(carte.itemsOltRouterPort)
                    .Where(function (x) { return x.oltLink === _link.id && x.etat === GlobalEnum._ALLUME; })
                    .Select(function (x) { return x; })
                    .ToArray();
                  if (_routerPortArray && _routerPortArray.length > 0) {
                    this._routerPortSelected = _routerPortArray[0];
                  }
                  this._routerSlotArray.push(carte);
                  break;
                }
              }
            }
            if (!found) {
              this._routerSlotArray.push({ numero: i });
            }
          }
        } else {

        }
      });
  }

  doSelectRouterPort(event, routerPort) {
    event.stopImmediatePropagation();
    if (routerPort.paramEtatLibelle === 'ETEINT') {
      if (this._routerPortSelected && (this._routerPortSelected.oltLink || this._routerPortSelected.oltLink > 0)) {
        swal({
          title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
          html: 'Le lien ' + this._oltLinkSelected.type + ' <b>' + this._oltLinkSelected.numero + '</b> est déjà connecté au port <b>' + this._routerPortSelected.numero + '</b> de la carte <b>' + this._routerPortSelected.oltRouterCarteNumero + '</b>  du router <b>' + this._routerSelected.nom + '</b>',
          type: 'info',
          allowOutsideClick: false
        });
        return;
      }
      this._routerPortSelected = routerPort;
    }
  }

  doTurnOn() {
    if (!this._routerPortSelected || (this._routerPortSelected && (!this._routerPortSelected.id || this._routerPortSelected.id <= 0))) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html: 'Veuillez cliquer sur un des ports du router <b>' + this._routerSelected.nom + '</b> pour connecter le lien ' + this._oltLinkSelected.type + ' <b>' + this._oltLinkSelected.numero + '</b>',
        type: 'info',
        allowOutsideClick: false
      });
      return;
    }

    if (this._routerPortSelected.oltLink || this._routerPortSelected.oltLink > 0) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html: 'Le lien ' + this._oltLinkSelected.type + ' <b>' + this._oltLinkSelected.numero + '</b> est déjà connecté au port <b>' + this._routerPortSelected.numero + '</b> de la carte <b>' + this._routerPortSelected.oltRouterCarteNumero + '</b>  du router <b>' + this._routerSelected.nom + '</b>',
        type: 'info',
        allowOutsideClick: false
      });
      return;
    }

    swal({
      title: this._translateService.instant('NOTIFY_CONFIRM_TITLE'),
      html: 'Souhaitez-vous connecter le lien ' + this._oltLinkSelected.type + ' <b>' + this._oltLinkSelected.numero + '</b> sur le port <b>' + this._routerPortSelected.numero + '</b> de la carte <b>' + this._routerPortSelected.oltRouterCarteNumero + '</b>  du router <b>' + this._routerSelected.nom + '</b>',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: this._translateService.instant('NOTIFY_CONFIRM_YES'),
      cancelButtonText: this._translateService.instant('NOTIFY_CONFIRM_NO'),
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        const _request = new Request<RouterPort>();
        this._routerPortSelected.oltLink = this._oltLinkSelected.id;
        this._routerPortSelected.etat = GlobalEnum._ALLUME;
        _request.datas = [this._routerPortSelected];

        this._routerPortService.update(_request, environment.origin,
          (response: Response<RouterPort>) => {
            if (!response.hasError) {
              this.doLoadCarte(this._routerSelected);
            } else {

            }
          });
      }
    });
  }

  doTurnOff() {
    if (!this._routerPortSelected || (this._routerPortSelected && (!this._routerPortSelected.oltLink || this._routerPortSelected.oltLink <= 0))) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html: 'Le lien ' + this._oltLinkSelected.type + ' <b>' + this._oltLinkSelected.numero + '</b> n\'est pas connecté',
        type: 'info',
        allowOutsideClick: false
      });
      return;
    }

    swal({
      title: this._translateService.instant('NOTIFY_CONFIRM_TITLE'),
      html: 'Souhaitez-vous déconnecter le lien ' + this._oltLinkSelected.type + ' <b>' + this._oltLinkSelected.numero + '</b>',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: this._translateService.instant('NOTIFY_CONFIRM_YES'),
      cancelButtonText: this._translateService.instant('NOTIFY_CONFIRM_NO'),
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        const _request = new Request<RouterPort>();
        this._routerPortSelected.etat = GlobalEnum._ETEINT;
        _request.datas = [this._routerPortSelected];

        this._routerPortService.update(_request, environment.origin,
          (response: Response<RouterPort>) => {
            if (!response.hasError) {
              this.doBack();
            } else {

            }
          });
      }
    });
  }

}
