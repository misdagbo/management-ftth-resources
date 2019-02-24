import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'helper';
import { CommuneCreateComponent } from './_generalites/_commune/commune-create/commune-create.component';
import { QuartierCreateComponent } from './_generalites/_quartier/quartier-create/quartier-create.component';
import { FournisseurCreateComponent } from './_generalites/_fournisseur/fournisseur-create/fournisseur-create.component';
import { ModeleCreateComponent } from './_generalites/_modele/modele-create/modele-create.component';
import { CaracteristiqueCreateComponent } from './_generalites/_caracteristique/caracteristique-create/caracteristique-create.component';
import { OffreCreateComponent } from './_generalites/_offre/offre-create/offre-create.component';
import { NroCreateComponent } from './_olt/nro-create/nro-create.component';
import { RouterCreateComponent } from './_olt/router-create/router-create.component';
import { RouterCarteCreateComponent } from './_olt/router-carte-create/router-carte-create.component';
import { OltCreateComponent } from './_olt/olt-create/olt-create.component';
import { SiteCreateComponent } from './_generalites/_site/site-create/site-create.component';
import { OltCarteCreateComponent } from './_olt/olt-carte-create/olt-carte-create.component';
import { RfoCreateComponent } from './_rfo/rfo-create/rfo-create.component';
import { RoeModuleCreateComponent } from './_rfo/roe-module-create/roe-module-create.component';
import { RoeCreateComponent } from './_rfo/roe-create/roe-create.component';
import { RotCreateComponent } from './_rfo/rot-create/rot-create.component';
import { RotModuleCreateComponent } from './_rfo/rot-module-create/rot-module-create.component';
import { CableTransportCreateComponent } from './_rfo/cable-transport-create/cable-transport-create.component';
import { SroCreateComponent } from './_sro/sro-create/sro-create.component';
import { TttCreateComponent } from './_sro/ttt-create/ttt-create.component';
import { TotCreateComponent } from './_sro/tot-create/tot-create.component';
import { TodCreateComponent } from './_sro/tod-create/tod-create.component';
import { PbCreateComponent } from './_sro/pb-create/pb-create.component';
import { FtCreateComponent } from './_rfo/ft-create/ft-create.component';
import { FeCreateComponent } from './_rfo/fe-create/fe-create.component';
import { TraveeCreateComponent } from './_rfo/travee-create/travee-create.component';
import { CableTransportListComponent } from './_rfo/cable-transport-list/cable-transport-list.component';
import { TttAllumageComponent } from './_sro/ttt-allumage/ttt-allumage.component';

@Injectable()
export class RessourcesModalService {

  constructor(private _modalService: ModalService) { }

  commune(data?: any): NgbModalRef {
    return this._modalService.open(CommuneCreateComponent, 'sm', true, 'static', true, data, 'fade-scale');
  }

  quartier(data?: any): NgbModalRef {
    return this._modalService.open(QuartierCreateComponent, 'sm', true, 'static', true, data, 'fade-scale');
  }

  fournisseur(data?: any): NgbModalRef {
    return this._modalService.open(FournisseurCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  modele(data?: any): NgbModalRef {
    return this._modalService.open(ModeleCreateComponent, 'lg', true, 'static', true, data, 'fade-scale');
  }

  caracteristique(data?: any): NgbModalRef {
    return this._modalService.open(CaracteristiqueCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  offre(data?: any): NgbModalRef {
    return this._modalService.open(OffreCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  nro(data?: any): NgbModalRef {
    return this._modalService.open(NroCreateComponent, 'sm', true, 'static', true, data, 'fade-scale');
  }

  router(data?: any): NgbModalRef {
    return this._modalService.open(RouterCreateComponent, 'lg', true, 'static', true, data, 'fade-scale');
  }

  routerCarte(data?: any): NgbModalRef {
    return this._modalService.open(RouterCarteCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  oltCarte(data?: any): NgbModalRef {
    return this._modalService.open(OltCarteCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  olt(data?: any): NgbModalRef {
    return this._modalService.open(OltCreateComponent, 'md', true, 'static', true, data, 'fade-scale modal-sz-600');
  }

  site(data?: any): NgbModalRef {
    return this._modalService.open(SiteCreateComponent, 'lg', true, 'static', true, data, 'fade-scale');
  }

  rfo(data?: any): NgbModalRef {
    return this._modalService.open(RfoCreateComponent, 'md', true, 'static', true, data, 'fade-scale modal-sz-600');
  }

  roe(data?: any): NgbModalRef {
    return this._modalService.open(RoeCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  rot(data?: any): NgbModalRef {
    return this._modalService.open(RotCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  roeModule(data?: any): NgbModalRef {
    return this._modalService.open(RoeModuleCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  rotModule(data?: any): NgbModalRef {
    return this._modalService.open(RotModuleCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  cableTransport(data?: any): NgbModalRef {
    return this._modalService.open(CableTransportCreateComponent, 'md', true, 'static', true, data, 'fade-scale modal-sz-550');
  }

  sro(data?: any): NgbModalRef {
    return this._modalService.open(SroCreateComponent, 'md', true, 'static', true, data, 'fade-scale modal-sz-600');
  }

  ttt(data?: any): NgbModalRef {
    return this._modalService.open(TttCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  tot(data?: any): NgbModalRef {
    return this._modalService.open(TotCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  tod(data?: any): NgbModalRef {
    return this._modalService.open(TodCreateComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

  pb(data?: any): NgbModalRef {
    return this._modalService.open(PbCreateComponent, 'lg', true, 'static', true, data, 'fade-scale');
  }

  fe(data?: any): NgbModalRef {
    return this._modalService.open(FeCreateComponent, 'sm', true, 'static', true, data, 'fade-scale');
  }

  ft(data?: any): NgbModalRef {
    return this._modalService.open(FtCreateComponent, 'sm', true, 'static', true, data, 'fade-scale');
  }

  travee(data?: any): NgbModalRef {
    return this._modalService.open(TraveeCreateComponent, 'sm', true, 'static', true, data, 'fade-scale');
  }

  cableTransportList(data?: any): NgbModalRef {
    return this._modalService.open(CableTransportListComponent, 'lg', true, 'static', true, data, 'fade-scale');
  }

  tttAllumage(data?: any): NgbModalRef {
    return this._modalService.open(TttAllumageComponent, 'md', true, 'static', true, data, 'fade-scale');
  }

}
