import { Component, OnInit, Input } from '@angular/core';
import { Site, SiteService, Quartier, QuartierService } from 'web';
import { TranslateService, Response, Request } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../../environments/environment';

declare var swal: any;

@Component({
  selector: 'ressources-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.scss']
})
export class SiteCreateComponent implements OnInit {

  @Input() data;

  _site: Site;
  _quartierArray: Array<any>;

  constructor(public _ngbActiveModal: NgbActiveModal, private _translateService: TranslateService,
    private _siteService: SiteService, private _quartierService: QuartierService) { }

  ngOnInit() {
    this._site = this.data || new Site();
    this.doLoadQuartier();
  }

  doLoadQuartier() {
    const _request = new Request<Quartier>();
    _request.data = new Quartier();
    _request.takeAll = true;

    this._quartierService.get(_request, environment.origin,
      (response: Response<Quartier>) => {
        if (!response.hasError) {
          this._quartierArray = response.items;
        } else {

        }
      });
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
        const _request = new Request<Site>();
        _request.datas = [this._site];

        if (this._site.id && this._site.id > 0) {
          this._siteService.update(_request, environment.origin,
            (response: Response<Site>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le site <b>' + this._site.libelle + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  this._ngbActiveModal.close();
                }
              } else {

              }
            });
        } else {
          this._siteService.create(_request, environment.origin,
            (response: Response<Site>) => {
              if (!response.hasError) {
                if (response.hasCustomError !== null && response.hasCustomError === 'DATA_EXIST') {
                  swal({
                    title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
                    html: 'Le site <b>' + this._site.libelle + '</b> existe dans la base de données',
                    type: 'info',
                    allowOutsideClick: false
                  });
                } else {
                  this._ngbActiveModal.close();
                }
              } else {

              }
            });
        }
      }
    });
  }

}
