import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Roe, RoeService, Rot, RotService, RoeModule, RoeModuleService, RotModule, RotModuleService, RfoJarretiere, RfoJarretiereService, Travee, Fe, Ft, TraveeService, FeService, FtService } from 'web';
import { Request, Response, GlobalEnum, TranslateService } from 'helper';
import { environment } from '../../../../../environments/environment';
import { RessourcesModalService } from '../../ressources-modal.service';

declare var Enumerable: any;
declare var swal: any;
declare var $: any;

@Component({
  selector: 'ressources-rfo-chassis',
  templateUrl: './rfo-chassis.component.html',
  styleUrls: ['./rfo-chassis.component.scss']
})
export class RfoChassisComponent implements OnInit {

  @Input() data;

  _screenHeight: number;
  _screenWidth: number;

  _roeSelected: any;
  _roePortSelected: any;
  _roeStyleWidth: any;
  _roeArray: Array<any> = [];
  _roeNiveauArray: Array<any> = [];

  _rotSelected: any;
  _rotPortSelected: any;
  _rotStyleWidth: any;
  _rotArray: Array<any> = [];
  _rotNiveauArray: Array<any> = [];

  _rfoJarretiere: any;
  _rfoTraveeFeSelected: any;
  _rfoTraveeFtSelected: any;
  _rfoFeSelected: any;
  _rfoFtSelected: any;
  _rfoTraveeArray: Array<any> = [];
  _rfoFeArray: Array<any> = [];
  _rfoFtArray: Array<any> = [];

  constructor(private _ressourcesModalService: RessourcesModalService, private _roeService: RoeService, private _rotService: RotService,
    private _roeModuleService: RoeModuleService, private _rotModuleService: RotModuleService, private _translateService: TranslateService,
    private _rfoJarretiereService: RfoJarretiereService, private _traveeService: TraveeService, private _feService: FeService, private _ftService: FtService) { }

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
    this.doLoadTravee();
  }

  doLoadTravee() {
    const _request = new Request<Travee>();
    _request.data = new Travee();
    _request.data.rfo = this.data.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._roeNiveauArray.length = 0;

    this._traveeService.get(_request, environment.origin,
      (response: Response<Travee>) => {
        if (!response.hasError) {
          this._rfoTraveeArray = response.items;
          if (this._rfoTraveeArray && this._rfoTraveeArray.length > 0) {
            this._rfoTraveeFeSelected = this._rfoTraveeArray[0];
            this._rfoTraveeFtSelected = this._rfoTraveeArray[0];
            this.doLoadFe(this._rfoTraveeFeSelected);
            this.doLoadFt(this._rfoTraveeFtSelected);
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

    this._roeNiveauArray.length = 0;

    this._feService.get(_request, environment.origin,
      (response: Response<Fe>) => {
        if (!response.hasError) {
          this._rfoFeArray = response.items;
          if (this._rfoFeArray && this._rfoFeArray.length > 0) {
            this._rfoFeSelected = this._rfoFeArray[0];
            this.doLoadRoe(this._rfoFeSelected);
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

    this._roeNiveauArray.length = 0;

    this._roeService.get(_request, environment.origin,
      (response: Response<Roe>) => {
        if (!response.hasError) {
          this._roeArray = response.items;
          if (this._roeArray && this._roeArray.length > 0) {
            this._roeSelected = this._roeArray[0];
            this.doLoadRoeModule(this._roeSelected);
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

    this._roePortSelected = null;
    this._rotPortSelected = null;
    this._roeNiveauArray.length = 0;

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

  doLoadFt(travee) {
    const _request = new Request<Ft>();
    _request.data = new Ft();
    _request.data.travee = travee.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._rotNiveauArray.length = 0;

    this._ftService.get(_request, environment.origin,
      (response: Response<Ft>) => {
        if (!response.hasError) {
          this._rfoFtArray = response.items;
          if (this._rfoFtArray && this._rfoFtArray.length > 0) {
            this._rfoFtSelected = this._rfoFtArray[0];
            this.doLoadRot(this._rfoFtSelected);
          }
        } else {

        }
      });
  }

  doLoadRot(ft) {
    const _request = new Request<Rot>();
    _request.data = new Rot();
    _request.data.ft = ft.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._rotNiveauArray.length = 0;

    this._rotService.get(_request, environment.origin,
      (response: Response<Rot>) => {
        if (!response.hasError) {
          this._rotArray = response.items;
          if (this._rotArray && this._rotArray.length > 0) {
            this._rotSelected = this._rotArray[0];
            this.doLoadRotModule(this._rotSelected);
          }
        } else {

        }
      });
  }

  doLoadRotModule(rot) {
    const _request = new Request<RotModule>();
    _request.data = new RotModule();
    _request.data.rot = rot.id;
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._rotPortSelected = null;
    this._rotNiveauArray.length = 0;

    this._rotModuleService.get(_request, environment.origin,
      (response: Response<RotModule>) => {
        if (!response.hasError) {
          let empty = true;
          for (let i = 1; i <= Number(rot.niveau); i++) {
            let found = false;
            if (response.count && response.count > 0) {
              empty = false;
              for (let rotModule of response.items) {
                if (Number(rotModule.numero) === i) {
                  found = true;
                  this._rotNiveauArray.push(rotModule);
                  break;
                }
              }
            }
            if (!found) {
              this._rotNiveauArray.push({ numero: i });
            }
          }
          if (empty) {
            this._rotStyleWidth = {
              'width': '133px'
            };
          } else {
            this._rotStyleWidth = {
              'width': ''
            };
          }
        } else {

        }
      });
  }

  doSelectRoePort(event, roePort) {
    event.stopImmediatePropagation();
    if (roePort.paramEtatLibelle === 'ALLUME' || roePort.paramEtatLibelle === 'ALLUME-OLT') {
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
  }

  doSelectRotPort(event, rotPort) {
    event.stopImmediatePropagation();
    if (!this._rfoJarretiere || (this._rfoJarretiere && !this._rfoJarretiere.id)) {
      if (this._roePortSelected && this._roePortSelected.id > 0) {
        if (rotPort.paramEtatLibelle === 'OFF-USED') {
          this._rotPortSelected = rotPort;
        } else {
          swal({
            title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
            html: 'Il n\'y a pas de continuité sur ce port. Veuillez l\'associer à un câble de transport afin d\'assurer la continuité de la fibre',
            type: 'info',
            allowOutsideClick: false
          });
        }
      } else {
        swal({
          title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
          html: 'Veuillez sélectionner un port sur le <b>ROE ' + this._roeSelected.numero + '</b>',
          type: 'info',
          allowOutsideClick: false
        });
      }
    }
  }

  doAddRoe() {
    this._ressourcesModalService.roe({ fe: this._rfoFeSelected, niveau: this._roeArray.length }).result.then(
      (result) => {
        this.doLoadTravee();
      },
      (reason) => {

      }
    );
  }

  doAddRot() {
    this._ressourcesModalService.rot({ ft: this._rfoFtSelected, niveau: this._rotArray.length }).result.then(
      (result) => {
        this.doLoadTravee();
      },
      (reason) => {

      }
    );
  }

  doAddModuleRoe(event, roeModule) {
    event.stopImmediatePropagation();
    if (roeModule && !roeModule.id) {
      this._ressourcesModalService.roeModule({ roe: this._roeSelected, module: roeModule.numero }).result.then(
        (result) => {
          this.doLoadRoeModule(this._roeSelected);
        },
        (reason) => {

        }
      );
    }
  }

  doAddModuleRot(event, rotModule) {
    event.stopImmediatePropagation();
    if (rotModule && !rotModule.id) {
      this._ressourcesModalService.rotModule({ rot: this._rotSelected, module: rotModule.numero }).result.then(
        (result) => {
          this.doLoadRotModule(this._rotSelected);
        },
        (reason) => {

        }
      );
    }
  }

  doAddFe() {
    this._ressourcesModalService.fe({ travee: this._rfoTraveeFeSelected, rang: this._rfoFeArray.length }).result.then(
      (result) => {
        this.doLoadFe(this._rfoTraveeFeSelected);
      },
      (reason) => {

      }
    );
  }

  doAddFt() {
    this._ressourcesModalService.ft({ travee: this._rfoTraveeFtSelected, rang: this._rfoFtArray.length }).result.then(
      (result) => {
        this.doLoadFt(this._rfoTraveeFtSelected);
      },
      (reason) => {

      }
    );
  }

  doAddTravee() {
    this._ressourcesModalService.travee({ rfo: this.data, rang: this._rfoTraveeArray.length }).result.then(
      (result) => {
        this.doLoadTravee();
      },
      (reason) => {

      }
    );
  }

  doCreateCableTransport() {
    this._ressourcesModalService.cableTransport({ rfo: this.data, rotModules: this._rotNiveauArray }).result.then(
      (result) => {
        this.doLoadRotModule(this._rotSelected);
      },
      (reason) => {

      }
    );
  }

  doCableTransportList() {
    this._ressourcesModalService.cableTransportList(this.data).result.then(
      (result) => {

      },
      (reason) => {

      }
    );
  }

  doApply() {
    swal({
      title: this._translateService.instant('NOTIFY_CONFIRM_TITLE'),
      html: 'Souhaitez-vous appliquer cette jarretière <b>' + this.doReferenceJarretiere() + '</b>',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: this._translateService.instant('NOTIFY_CONFIRM_YES'),
      cancelButtonText: this._translateService.instant('NOTIFY_CONFIRM_NO'),
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        const _request = new Request<RfoJarretiere>();
        let rfoJarretiere = new RfoJarretiere();
        rfoJarretiere.roePortModule = this._roePortSelected.id;
        rfoJarretiere.rotPortModule = this._rotPortSelected.id;
        rfoJarretiere.reference = this.doReferenceJarretiere();
        _request.datas = [rfoJarretiere];

        this._rfoJarretiereService.create(_request, environment.origin,
          (response: Response<RfoJarretiere>) => {
            if (!response.hasError) {
              this._roePortSelected = null;
              this._rotPortSelected = null;
              this.doLoadRoeModule(this._roeSelected);
              this.doLoadRotModule(this._rotSelected);
            } else {

            }
          });
      }
    });
  }

  doReferenceJarretiere() {
    const rotPort = (this._rotPortSelected.numero.length > 1) ? this._rotPortSelected.numero : '0' + this._rotPortSelected.numero;
    const roePort = (this._roePortSelected.numero.length > 1) ? this._roePortSelected.numero : '0' + this._roePortSelected.numero;
    return 'TV' + this._rfoTraveeFeSelected.numero + '/' + 'FE' + this._rfoFeSelected.numero + '/' + 'ROE' +
      this._roeSelected.numero + '/' + this._roePortSelected.rfoRoeModuleNumero + '/' + roePort + ' ' + 'TV' + this._rfoTraveeFtSelected.numero +
      '/' + 'FT' + this._rfoFtSelected.numero + '/' + 'ROT' + this._rotSelected.numero + '/' + this._rotPortSelected.rfoRotModuleNumero + '/' + rotPort;
  }

}
