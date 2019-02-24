import { Component, OnInit, Input } from '@angular/core';
import { Tod, TodService, TodRequest, ModeleService, Modele, Caracteristique, CaracteristiqueService } from 'web';
import { Response, Request, TranslateService, GlobalEnum, SearchParam } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-tod-create',
  templateUrl: './tod-create.component.html',
  styleUrls: ['./tod-create.component.scss']
})
export class TodCreateComponent implements OnInit {

  @Input() data;

  _item: any = {};
  _modele: Modele = null;
  _modeles: Array<any> = [];
  _sroTodPlot: Array<any> = [];
  _sroTodCoupleur: Array<any> = [];
  _xAxis: any;
  _yAxis: any;

  constructor(public _ngbActiveModal: NgbActiveModal, private _todModuleService: TodService, private _modeleService: ModeleService,
    private _caracteristiqueService: CaracteristiqueService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._item.sro = this.data.nom;
    this.doLoadModele();
  }

  doLoadModele() {
    const _request = new Request<Modele>();
    _request.data = new Modele();
    _request.data.type = 'TIROIR FO';
    _request.data.typeParam = new SearchParam<String>();
    _request.data.typeParam.operator = GlobalEnum._EQUAL;
    _request.takeAll = true;

    this._modeleService.get(_request, environment.origin,
      (response: Response<Modele>) => {
        if (!response.hasError) {
          this._modeles = response.items;
        } else {

        }
      });
  }

  doChangeModele() {
    const _request = new Request<Caracteristique>();
    _request.data = new Caracteristique();
    _request.data.modele = this._modele.id;
    _request.takeAll = true;
    this._sroTodPlot.length = 0;

    this._caracteristiqueService.get(_request, environment.origin,
      (response: Response<Caracteristique>) => {
        if (!response.hasError) {
          let _caracteristiquePlot = Enumerable.From(response.items)
            .Where(function (x) { return x.libelle === 'PLOT'; })
            .Select(function (x) { return x; })
            .ToArray();

          if (_caracteristiquePlot != null && _caracteristiquePlot.length > 0) {
            if (isNaN(_caracteristiquePlot[0].valeur)) {
              swal({
                title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                html:
                  'Veuillez indiquer dans les propriété du modèle réf. <b>' + this._modele.reference + '</b> une valeur numérique pour la propriété <b>PLOT</b>',
                type: 'info',
                allowOutsideClick: false
              });
              return;
            }

            let _caracteristiqueXAxis = Enumerable.From(response.items)
              .Where(function (x) { return x.libelle === 'X-AXIS'; })
              .Select(function (x) { return x; })
              .ToArray();

            if (_caracteristiqueXAxis && _caracteristiqueXAxis.length > 0) {
              this._xAxis = _caracteristiqueXAxis[0].valeur;

              let _caracteristiqueYAxis = Enumerable.From(response.items)
                .Where(function (x) { return x.libelle === 'Y-AXIS'; })
                .Select(function (x) { return x; })
                .ToArray();

              if (!_caracteristiqueYAxis || _caracteristiqueYAxis.length === 0) {
                swal({
                  title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                  html:
                    'Veuillez définir la propriété <b>Y-AXIS</b> du modèle réf. <b>' + this._modele.reference + '</b>',
                  type: 'info',
                  allowOutsideClick: false
                });
                this._modele = null;
                return;
              } else {
                this._yAxis = _caracteristiqueYAxis[0].valeur;

                let xAxisFirst = this._xAxis.split('-').shift();
                let xAxisLast = this._xAxis.split('-').pop();
                let yAxisFirst = this._yAxis.split('-').shift();
                let yAxisLast = this._yAxis.split('-').pop();
                let xAxisCharCode = xAxisFirst.charCodeAt(0);
                if (isNaN(xAxisFirst) && isNaN(xAxisLast)) {
                  if (!isNaN(yAxisFirst) && !isNaN(yAxisLast)) {
                    for (let i = 1; i <= Number(_caracteristiquePlot[0].valeur); i++) {
                      let _module = Number(i) % Number(yAxisLast);
                      if (_module === 0) {
                        this._sroTodPlot.push({ numero: i + '', plot: String.fromCharCode(xAxisCharCode) + yAxisLast });
                        xAxisCharCode = xAxisCharCode + 1;
                      } else {
                        this._sroTodPlot.push({ numero: i + '', plot: String.fromCharCode(xAxisCharCode) + _module });
                      }
                    }
                  }
                }
              }
            } else {
              for (let i = 1; i <= Number(_caracteristiquePlot[0].valeur); i++) {
                this._sroTodPlot.push({ numero: i + '', plot: i + '' });
              }
            }
          } else {
            swal({
              title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
              html:
                'Veuillez définir la propriété <b>PLOT</b> du modèle réf. <b>' + this._modele.reference + '</b>',
              type: 'info',
              allowOutsideClick: false
            });
            return;
          }
        } else {

        }
      });
  }

  onSubmit() {
    if (this._sroTodPlot != null && this._sroTodPlot.length === 0) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        html:
          'Veuillez définir la propriété <b>PLOT</b> du modèle réf. <b>' + this._modele.reference + '</b>',
        type: 'info',
        allowOutsideClick: false
      });
      return;
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
        const _request = new TodRequest();
        this._item.sro = this.data.id;
        this._item.modele = this._modele.id;
        _request.datas = [this._item];
        _request.datasSroPlotDistribution = this._sroTodPlot;

        if (this._item.id && this._item.id > 0) {
          this._todModuleService.update(_request, environment.origin,
            (response: Response<Tod>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._todModuleService.create(_request, environment.origin,
            (response: Response<Tod>) => {
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
