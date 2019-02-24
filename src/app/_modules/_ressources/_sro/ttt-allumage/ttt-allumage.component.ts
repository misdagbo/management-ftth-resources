import { Component, OnInit, Input } from '@angular/core';
import { CableTransport, TttPortRequest, CableTransportService, FibreCableTransport, FibreCableTransportService, TttPort, TttPortService } from 'web';
import { Response, Request, TranslateService, GlobalEnum } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-ttt-allumage',
  templateUrl: './ttt-allumage.component.html',
  styleUrls: ['./ttt-allumage.component.scss']
})
export class TttAllumageComponent implements OnInit {

  @Input() data;

  _ttt: any = {};
  _cableTransport: any = null;
  _cableTransportArray: Array<any> = [];
  _fibreCableTransportArray: Array<any> = [];
  _fibreCableTransportSelectedArray: Array<any> = [];
  _fibreTttPortArray: Array<any> = [];
  _fibreTttPortSelectedArray: Array<any> = [];
  _tttPortArray: Array<any> = [];

  constructor(public _ngbActiveModal: NgbActiveModal, private _cableTransportService: CableTransportService,
    private _translateService: TranslateService, private _fibreCableTransportService: FibreCableTransportService,
    private _tttPortService: TttPortService) { }

  ngOnInit() {
    if (this.data) {
      this._ttt.numero = this.data.sro.nom + '/' + this.data.ttt.numero;
      this._tttPortArray = Enumerable.From(this.data.ttt.itemsSroPortTiroirTransition)
        .Where(function (x) { return x.paramEtatLibelle === 'ETEINT'; })
        .Select(function (x) { return x; })
        .ToArray();
      this.doLoadCableTransport();
    }
  }

  doLoadCableTransport() {
    const _request = new Request<CableTransport>();
    _request.data = new CableTransport();
    _request.data.paramNroId = this.data.sro.nro;
    _request.takeAll = true;

    this._cableTransportService.get(_request, environment.origin,
      (response: Response<CableTransport>) => {
        if (!response.hasError) {
          this._cableTransportArray = response.items;
        } else {

        }
      });
  }

  doLoadFibreTransport(cableTransport) {
    const _request = new Request<FibreCableTransport>();
    _request.data = new FibreCableTransport();
    _request.data.cableTransport = cableTransport.id;
    _request.data.etat = GlobalEnum._NOT_USED;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._fibreCableTransportService.get(_request, environment.origin,
      (response: Response<FibreCableTransport>) => {
        if (!response.hasError) {
          this._fibreCableTransportArray = response.items;
        } else {

        }
      });
  }

  doSelectFibreCableTransport(fibreCableTransport) {
    fibreCableTransport.selected = true;
    const isAny = Enumerable.From(this._fibreCableTransportSelectedArray)
      .Where(function (x) { return x.numero === fibreCableTransport.numero; })
      .Select(function (x) { return x; })
      .Any();
    if (!isAny) {
      this._fibreCableTransportSelectedArray.push(fibreCableTransport);
    }
  }

  doSelectFibreTttPort(fibreTttPort) {
    fibreTttPort.selected = true;
    const isAny = Enumerable.From(this._fibreTttPortSelectedArray)
      .Where(function (x) { return x.numero === fibreTttPort.numero; })
      .Select(function (x) { return x; })
      .Any();
    if (!isAny) {
      this._fibreTttPortSelectedArray.push(fibreTttPort);
    }
  }

  doAdd() {
    if ((this._fibreTttPortArray.length + this._fibreCableTransportSelectedArray.length) > this._tttPortArray.length) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html: 'Le nombre de fibres sélectionné est supérieur aux ports disponibles sur le tiroir de transition <b>' + this.data.ttt.numero,
        type: 'info',
        allowOutsideClick: false
      });
      return;
    }
    for (let fibreCableTransport of this._fibreCableTransportSelectedArray) {
      fibreCableTransport.selected = false;
      this._fibreTttPortArray.push(fibreCableTransport);
      this._fibreCableTransportArray.splice(this._fibreCableTransportArray.indexOf(fibreCableTransport), 1);
    }
    this._fibreTttPortArray = Enumerable.From(this._fibreTttPortArray)
      .OrderBy(function (x) { return Number(x.numero.substring(1)); })
      .Select(function (x) { return x; })
      .ToArray();
    this._fibreCableTransportSelectedArray.length = 0;
  }

  doRemove() {
    for (let fibreTttPort of this._fibreTttPortSelectedArray) {
      fibreTttPort.selected = false;
      this._fibreCableTransportArray.push(fibreTttPort);
      this._fibreTttPortArray.splice(this._fibreTttPortArray.indexOf(fibreTttPort), 1);
    }
    this._fibreTttPortSelectedArray.length = 0;
  }

  doRemoveAll() {
    for (let fibreTttPort of this._fibreTttPortArray) {
      fibreTttPort.selected = false;
      this._fibreCableTransportArray.push(fibreTttPort);
    }
    this._fibreTttPortSelectedArray.length = 0;
    this._fibreTttPortArray.length = 0;
  }

  onSubmit() {
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
        const _request = new TttPortRequest();
        let i = 0;
        for (let tttPort of this._tttPortArray) {
          if (i < this._fibreTttPortArray.length) {
            tttPort.fibreTransport = this._fibreTttPortArray[i].id;
            this._fibreTttPortArray[i].etat = GlobalEnum._ALLUME_USED;
            tttPort.etat = GlobalEnum._OFF_USED;
            i++;
          }
        }
        _request.datas = this._tttPortArray;
        _request.datasRfoFibreTransport = this._fibreTttPortArray;

        this._tttPortService.update(_request, environment.origin,
          (response: Response<TttPort>) => {
            if (!response.hasError) {
              this._ngbActiveModal.close();
            } else {

            }
          });
      }
    });
  }

}
