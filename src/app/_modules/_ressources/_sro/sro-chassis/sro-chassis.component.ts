import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Sro, Tot, TotService, Tod, TodService } from 'web';
import { Request, Response, GlobalEnum, SharedService } from 'helper';
import { environment } from '../../../../../environments/environment';
import { RessourcesModalService } from '../../ressources-modal.service';

declare var Enumerable: any;
declare var $: any;

@Component({
  selector: 'ressources-sro-chassis',
  templateUrl: './sro-chassis.component.html',
  styleUrls: ['./sro-chassis.component.scss']
})
export class SroChassisComponent implements OnInit {

  @Input() data;

  _screenHeight: number;
  _screenWidth: number;

  _item: Sro = new Sro();
  _tots: Array<any> = [];
  _tods: Array<any> = [];
  _totSelected: any;
  _todSelected: any;

  constructor(private _ressourcesModalService: RessourcesModalService, private _totService: TotService,
    private _todService: TodService, private _sharedService: SharedService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this._screenHeight = window.innerHeight - 113;
    this._screenWidth = window.innerWidth;
  }

  ngOnInit() {
    this._item = this.data;
    this.onResize();
    $('.mCustomScrollbar').mCustomScrollbar({
      scrollButtons: { enable: true },
      theme: 'light-thick'
    });
    this.doLoadTot();
    this.doLoadTod();
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
          this._tots = Enumerable.From(response.items)
            .Select(function (x) {
              x.labelNumero = 'T0' + x.numero.charAt(x.numero.length - 1);
              return x;
            })
            .ToArray();
          if (this._tots && this._tots.length > 0) {
            this._totSelected = this._tots[0];
            this.doSelectTiroirtTransport(this._totSelected);
          }
        } else {

        }
      });
  }

  doLoadTod() {
    const _request = new Request<Tod>();
    _request.data = new Tod();
    _request.data.sro = this.data.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._todService.get(_request, environment.origin,
      (response: Response<Tod>) => {
        if (!response.hasError) {
          this._tods = Enumerable.From(response.items)
            .Select(function (x) {
              x.labelNumero = 'D0' + x.numero.charAt(x.numero.length - 1);
              return x;
            })
            .ToArray();
          if (this._tods && this._tods.length > 0) {
            this._todSelected = this._tods[0];
            this.doSelectTiroirtDistribution(this._todSelected);
          }
        } else {

        }
      });
  }

  doSelectTiroirtTransport(tot) {
    this._totSelected = tot;
    this.setXAxisTiroir(tot);
    this.setYAxisTiroir(tot);
  }

  doSelectTiroirtDistribution(tod) {
    this._todSelected = tod;
    this.setXAxisTiroir(tod);
    this.setYAxisTiroir(tod);
  }

  setXAxisTiroir(tiroir) {
    tiroir.xAxisList = [];
    let xAxisFirst = tiroir.xAxis.split('-').shift();
    let xAxisLast = tiroir.xAxis.split('-').pop();
    if (isNaN(xAxisFirst) && isNaN(xAxisLast)) {
      for (let i = xAxisFirst.charCodeAt(0); i <= xAxisLast.charCodeAt(0); i++) {
        tiroir.xAxisList.push(String.fromCharCode(i));
      }
    } else {
      if (!isNaN(xAxisFirst) && !isNaN(xAxisLast)) {
        for (let i = xAxisFirst; i <= xAxisFirst; i++) {
          tiroir.xAxisList.push(i);
        }
      }
    }
  }

  setYAxisTiroir(tiroir) {
    tiroir.yAxisList = [];
    let yAxisFirst = tiroir.yAxis.split('-').shift();
    let yAxisLast = tiroir.yAxis.split('-').pop();
    if (isNaN(yAxisFirst) && isNaN(yAxisLast)) {
      for (let i = yAxisFirst.charCodeAt(0); i <= yAxisLast.charCodeAt(0); i++) {
        tiroir.yAxisList.push(String.fromCharCode(i));
      }
    } else {
      if (!isNaN(yAxisFirst) && !isNaN(yAxisLast)) {
        for (let i = yAxisFirst; i <= yAxisLast; i++) {
          tiroir.yAxisList.push(i);
        }
      }
    }
  }

  doNewTot() {
    this._ressourcesModalService.tot(this._item).result.then(
      (result) => {
        this.doLoadTot();
      },
      (reason) => {

      }
    );
  }

  doNewTod() {
    this._ressourcesModalService.tod(this._item).result.then(
      (result) => {
        this.doLoadTod();
      },
      (reason) => {

      }
    );
  }

  doNewPb() {
    this._ressourcesModalService.pb({sro: this._item, tod: this._todSelected}).result.then(
      (result) => {
        this.doLoadTod();
      },
      (reason) => {

      }
    );
  }

  doTTT() {
    this._sharedService.set({ __TAG: 'sro-ttt', __DATA: this._item });
  }

}
