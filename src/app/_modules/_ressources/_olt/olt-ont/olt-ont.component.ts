import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Ont, OntService } from 'web';
import { Request, Response, SharedService, GlobalEnum } from 'helper';
import { environment } from '../../../../../environments/environment';

declare var $: any;

@Component({
  selector: 'ressources-olt-ont',
  templateUrl: './olt-ont.component.html',
  styleUrls: ['./olt-ont.component.scss']
})
export class OltOntComponent implements OnInit {

  @Input() data;

  _screenHeight: number;
  _screenWidth: number;

  _ontArray: Array<any> = [];
  _oltPortSelected: any;

  constructor(private _ontService: OntService, private _sharedService: SharedService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this._screenHeight = window.innerHeight - 113;
    this._screenWidth = window.innerWidth;
  }

  ngOnInit() {
    this._oltPortSelected = this.data.portPhysique;
    this.onResize();
    $('.mCustomScrollbar').mCustomScrollbar({
      scrollButtons: { enable: true },
      theme: 'light-thick'
    });
    this.doLoadOnt();
  }

  doBack() {
    this._sharedService.set({ __TAG: 'olt-chassis', __DATA: this.data.chassis });
  }

  doOpenOnt(event: Event, ont) {
    event.stopImmediatePropagation();
  }

  doTurnOn() {
    this._sharedService.set({ __TAG: 'olt-port-rfo', __DATA: { portPhysique: this.data.portPhysique, chassis: this.data.chassis } });
  }

  doLoadOnt() {
    const _request = new Request<Ont>();
    _request.data = new Ont();
    _request.data.portPhysique = this.data.portPhysique.id;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;
    _request.takeAll = true;

    this._ontService.get(_request, environment.origin,
      (response: Response<Ont>) => {
        if (!response.hasError) {
          this._ontArray = response.items;
        } else {

        }
      });
  }

}
