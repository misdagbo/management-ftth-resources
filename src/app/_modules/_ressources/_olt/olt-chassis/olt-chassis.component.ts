import { Component, OnInit, HostListener, Input } from '@angular/core';
import { OltLink, OltLinkService, Carte, CarteService } from 'web';
import { Request, Response, SharedService, GlobalEnum } from 'helper';
import { environment } from '../../../../../environments/environment';
import { RessourcesModalService } from '../../ressources-modal.service';

declare var Enumerable: any;
declare var $: any;

@Component({
  selector: 'ressources-olt-chassis',
  templateUrl: './olt-chassis.component.html',
  styleUrls: ['./olt-chassis.component.scss']
})
export class OltChassisComponent implements OnInit {

  @Input() data;

  _screenHeight: number;
  _screenWidth: number;

  _linkPrimaireArray: Array<any> = [];
  _linkSecondaireArray: Array<any> = [];
  _chassisLeftSlot: Array<any> = [];
  _chassisRightSlot: Array<any> = [];

  constructor(private _oltLinkService: OltLinkService, private _ressourcesModalService: RessourcesModalService,
    private _carteService: CarteService, private _sharedService: SharedService) { }

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
    this.doLoadLink();
    this.doLoadCarte();
  }

  doConnectOltLink(event, link) {
    event.stopImmediatePropagation();
    this._sharedService.set({ __TAG: 'olt-link', __DATA: { link: link, chassis: this.data } });
  }

  doConnectOltPort(event, portPhysique) {
    event.stopImmediatePropagation();
    this._sharedService.set({ __TAG: 'olt-ont', __DATA: { portPhysique: portPhysique, chassis: this.data } });
  }

  doLoadLink() {
    const _request = new Request<OltLink>();
    _request.data = new OltLink();
    _request.data.chassis = this.data.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._oltLinkService.get(_request, environment.origin,
      (response: Response<OltLink>) => {
        if (!response.hasError) {
          this._linkPrimaireArray = Enumerable.From(response.items)
            .Where(function (x) { return x.type === 'PRIMAIRE'; })
            .Select(function (x) { return x; })
            .ToArray();
          this._linkSecondaireArray = Enumerable.From(response.items)
            .Where(function (x) { return x.type === 'SECONDAIRE'; })
            .Select(function (x) { return x; })
            .ToArray();
        } else {

        }
      });
  }

  doLoadCarte() {
    const _request = new Request<Carte>();
    _request.data = new Carte();
    _request.data.chassis = this.data.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._chassisLeftSlot.length = 0;
    this._chassisRightSlot.length = 0;

    this._carteService.get(_request, environment.origin,
      (response: Response<Carte>) => {
        if (!response.hasError) {
          for (let i = 1; i <= this.data.numberSlot; i++) {
            let found = false;
            if (response.count && response.count > 0) {
              for (let carte of response.items) {
                if (i <= (this.data.numberSlot / 2) && Number(carte.numero) === i) {
                  found = true;
                  this._chassisLeftSlot.push(carte);
                  break;
                }
                if (i > (this.data.numberSlot / 2) && Number(carte.numero) === i) {
                  found = true;
                  this._chassisRightSlot.push(carte);
                  break;
                }
              }
            }
            if (i <= (this.data.numberSlot / 2) && !found) {
              this._chassisLeftSlot.push({ numero: i });
            }
            if (i > (this.data.numberSlot / 2) && !found) {
              this._chassisRightSlot.push({ numero: i });
            }
          }
        } else {

        }
      });
  }

  doAddCarte(event, slot) {
    event.stopImmediatePropagation();
    if (slot && !slot.id) {
      this._ressourcesModalService.oltCarte({ slot: slot.numero, chassis: this.data }).result.then(
        (result) => {
          this.doLoadCarte();
        },
        (reason) => {

        }
      );
    }
  }

}
