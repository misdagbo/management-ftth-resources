import { Component, OnInit, Input } from '@angular/core';
import { Pb, PbService, Site, SiteService, PbRequest } from 'web';
import { Response, Request, TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-pb-create',
  templateUrl: './pb-create.component.html',
  styleUrls: ['./pb-create.component.scss']
})
export class PbCreateComponent implements OnInit {

  @Input() data;
  _item: Pb = new Pb();
  _sites: Array<any> = [];
  _todPlotChecked: Array<any> = [];
  _cassetteFibre: Array<any> = [];
  _sro: any;
  _tod: any;

  constructor(public _ngbActiveModal: NgbActiveModal, private _pbService: PbService,
    private _translateService: TranslateService, private _siteService: SiteService) { }

  ngOnInit() {
    this._sro = this.data.sro;
    this._tod = this.data.tod;
    this.doLoadSite();
  }

  doLoadSite() {
    const _request = new Request<Site>();
    _request.data = new Site();
    _request.takeAll = true;

    this._siteService.get(_request, environment.origin,
      (response: Response<Site>) => {
        if (!response.hasError) {
          this._sites = response.items;
        } else {

        }
      });
  }

  onSubmit() {

    if (this._todPlotChecked != null && this._todPlotChecked.length === 0) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html:
          'Veuillez sélectionner les fibres du PB',
        type: 'info',
        allowOutsideClick: false
      });
      return;
    } else {
      this._cassetteFibre.length = 0;
      for (let i = 0; i < this._todPlotChecked.length; i++) {
        let todPlot = this._todPlotChecked[i];
        let p = i + 1;
        if (p <= 6) {
          this._cassetteFibre.push({ numero: p, couleur: p, plotDistribution: todPlot.id, cassette: 'A' });
        } else {
          this._cassetteFibre.push({ numero: p, couleur: p, plotDistribution: todPlot.id, cassette: 'B' });
        }
      }

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
          const _request = new PbRequest();
          this._item.sro = this._sro.id;
          _request.datas = [this._item];
          _request.datasSroCassetteFibre = this._cassetteFibre;

          if (this._item.id && this._item.id > 0) {
            this._pbService.update(_request, environment.origin,
              (response: Response<Pb>) => {
                if (!response.hasError) {
                  this._ngbActiveModal.close();
                } else {

                }
              });
          } else {
            this._pbService.create(_request, environment.origin,
              (response: Response<Pb>) => {
                if (!response.hasError) {
                  this._ngbActiveModal.close();
                } else {

                }
              });
          }
        }
      });
    }

  }

}
