import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { AgGridModule } from 'ag-grid-angular';
import { TreeModule } from 'ng2-tree';
import { HelperModule } from 'helper';
import { LayoutModule } from '../../theme/layouts/layout.module';
import { RessourcesRoutingModule } from './ressources-routing.module';
import { RessourcesModalService } from './ressources-modal.service';
import { RessourcesComponent } from './ressources/ressources.component';
import { OltAsideComponent } from './_olt/olt-aside/olt-aside.component';
import { OltFooterComponent } from './_olt/olt-footer/olt-footer.component';
import { GeneralitesComponent } from './_generalites/generalites/generalites.component';
import { CommuneListComponent } from './_generalites/_commune/commune-list/commune-list.component';
import { CommuneCreateComponent } from './_generalites/_commune/commune-create/commune-create.component';
import { QuartierListComponent } from './_generalites/_quartier/quartier-list/quartier-list.component';
import { QuartierCreateComponent } from './_generalites/_quartier/quartier-create/quartier-create.component';
import { SiteListComponent } from './_generalites/_site/site-list/site-list.component';
import { FournisseurCreateComponent } from './_generalites/_fournisseur/fournisseur-create/fournisseur-create.component';
import { FournisseurListComponent } from './_generalites/_fournisseur/fournisseur-list/fournisseur-list.component';
import { ModeleListComponent } from './_generalites/_modele/modele-list/modele-list.component';
import { ModeleCreateComponent } from './_generalites/_modele/modele-create/modele-create.component';
import { CaracteristiqueCreateComponent } from './_generalites/_caracteristique/caracteristique-create/caracteristique-create.component';
import { CaracteristiqueListComponent } from './_generalites/_caracteristique/caracteristique-list/caracteristique-list.component';
import { OffreListComponent } from './_generalites/_offre/offre-list/offre-list.component';
import { OffreCreateComponent } from './_generalites/_offre/offre-create/offre-create.component';
import { NroListComponent } from './_olt/nro-list/nro-list.component';
import { NroCreateComponent } from './_olt/nro-create/nro-create.component';
import { OltListComponent } from './_olt/olt-list/olt-list.component';
import { OltCreateComponent } from './_olt/olt-create/olt-create.component';
import { RouterListComponent } from './_olt/router-list/router-list.component';
import { RouterCreateComponent } from './_olt/router-create/router-create.component';
import { RouterCarteCreateComponent } from './_olt/router-carte-create/router-carte-create.component';
import { RouterCarteListComponent } from './_olt/router-carte-list/router-carte-list.component';
import { OltRessourcesComponent } from './_olt/olt-ressources/olt-ressources.component';
import { OltRouterComponent } from './_olt/olt-router/olt-router.component';
import { SiteCreateComponent } from './_generalites/_site/site-create/site-create.component';
import { OltCarteCreateComponent } from './_olt/olt-carte-create/olt-carte-create.component';
import { OltChassisComponent } from './_olt/olt-chassis/olt-chassis.component';
import { OltOntComponent } from './_olt/olt-ont/olt-ont.component';
import { RfoListComponent } from './_rfo/rfo-list/rfo-list.component';
import { RfoCreateComponent } from './_rfo/rfo-create/rfo-create.component';
import { RfoRessourcesComponent } from './_rfo/rfo-ressources/rfo-ressources.component';
import { RfoAsideComponent } from './_rfo/rfo-aside/rfo-aside.component';
import { RfoFooterComponent } from './_rfo/rfo-footer/rfo-footer.component';
import { RfoChassisComponent } from './_rfo/rfo-chassis/rfo-chassis.component';
import { OltRfoComponent } from './_olt/olt-rfo/olt-rfo.component';
import { RoeModuleCreateComponent } from './_rfo/roe-module-create/roe-module-create.component';
import { RoeCreateComponent } from './_rfo/roe-create/roe-create.component';
import { RotCreateComponent } from './_rfo/rot-create/rot-create.component';
import { RotModuleCreateComponent } from './_rfo/rot-module-create/rot-module-create.component';
import { CableTransportCreateComponent } from './_rfo/cable-transport-create/cable-transport-create.component';
import { SroChassisComponent } from './_sro/sro-chassis/sro-chassis.component';
import { SroRessourcesComponent } from './_sro/sro-ressources/sro-ressources.component';
import { SroListComponent } from './_sro/sro-list/sro-list.component';
import { SroCreateComponent } from './_sro/sro-create/sro-create.component';
import { SroFooterComponent } from './_sro/sro-footer/sro-footer.component';
import { SroAsideComponent } from './_sro/sro-aside/sro-aside.component';
import { PbListComponent } from './_sro/pb-list/pb-list.component';
import { CableTransportListComponent } from './_rfo/cable-transport-list/cable-transport-list.component';
import { TttChassisComponent } from './_sro/ttt-chassis/ttt-chassis.component';
import { TttCreateComponent } from './_sro/ttt-create/ttt-create.component';
import { TotCreateComponent } from './_sro/tot-create/tot-create.component';
import { TodCreateComponent } from './_sro/tod-create/tod-create.component';
import { PbCreateComponent } from './_sro/pb-create/pb-create.component';
import { TodPlotListComponent } from './_sro/tod-plot-list/tod-plot-list.component';
import { FeCreateComponent } from './_rfo/fe-create/fe-create.component';
import { FtCreateComponent } from './_rfo/ft-create/ft-create.component';
import { TraveeCreateComponent } from './_rfo/travee-create/travee-create.component';
import { TttAllumageComponent } from './_sro/ttt-allumage/ttt-allumage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HelperModule,
    LayoutModule,
    RessourcesRoutingModule,
    NgxMaskModule.forRoot(),
    AgGridModule.withComponents([]),
    TreeModule,
  ],
  declarations: [
    RessourcesComponent,
    OltAsideComponent,
    OltFooterComponent,
    GeneralitesComponent,
    CommuneListComponent,
    CommuneCreateComponent,
    QuartierListComponent,
    QuartierCreateComponent,
    FournisseurCreateComponent,
    FournisseurListComponent,
    ModeleListComponent,
    ModeleCreateComponent,
    CaracteristiqueCreateComponent,
    CaracteristiqueListComponent,
    OffreListComponent,
    OffreCreateComponent,
    NroCreateComponent,
    NroListComponent,
    OltListComponent,
    OltCreateComponent,
    RouterListComponent,
    RouterCreateComponent,
    RouterCarteListComponent,
    RouterCarteCreateComponent,
    OltRessourcesComponent,
    OltRouterComponent,
    SiteCreateComponent,
    SiteListComponent,
    OltCarteCreateComponent,
    OltChassisComponent,
    OltOntComponent,
    RfoAsideComponent,
    RfoFooterComponent,
    RfoCreateComponent,
    RfoListComponent,
    RfoRessourcesComponent,
    RfoChassisComponent,
    RoeCreateComponent,
    RoeModuleCreateComponent,
    RotCreateComponent,
    RotModuleCreateComponent,
    OltRfoComponent,
    CableTransportCreateComponent,
    SroAsideComponent,
    SroFooterComponent,
    SroCreateComponent,
    SroListComponent,
    SroRessourcesComponent,
    SroChassisComponent,
    PbListComponent,
    CableTransportListComponent,
    TttChassisComponent,
    TttCreateComponent,
    TotCreateComponent,
    TodCreateComponent,
    PbCreateComponent,
    TodPlotListComponent,
    FtCreateComponent,
    FeCreateComponent,
    TraveeCreateComponent,
    TttAllumageComponent,
  ],
  exports: [
  ],
  entryComponents: [
    OltAsideComponent,
    OltFooterComponent,
    GeneralitesComponent,
    CommuneListComponent,
    CommuneCreateComponent,
    QuartierListComponent,
    QuartierCreateComponent,
    FournisseurCreateComponent,
    FournisseurListComponent,
    ModeleListComponent,
    ModeleCreateComponent,
    CaracteristiqueCreateComponent,
    CaracteristiqueListComponent,
    OffreListComponent,
    OffreCreateComponent,
    NroCreateComponent,
    NroListComponent,
    OltListComponent,
    OltCreateComponent,
    RouterListComponent,
    RouterCreateComponent,
    RouterCarteListComponent,
    RouterCarteCreateComponent,
    OltRessourcesComponent,
    OltRouterComponent,
    SiteCreateComponent,
    SiteListComponent,
    OltCarteCreateComponent,
    OltChassisComponent,
    OltOntComponent,
    RfoAsideComponent,
    RfoFooterComponent,
    RfoCreateComponent,
    RfoListComponent,
    RfoRessourcesComponent,
    RfoChassisComponent,
    RoeCreateComponent,
    RoeModuleCreateComponent,
    RotCreateComponent,
    RotModuleCreateComponent,
    OltRfoComponent,
    CableTransportCreateComponent,
    SroAsideComponent,
    SroFooterComponent,
    SroCreateComponent,
    SroListComponent,
    SroRessourcesComponent,
    SroChassisComponent,
    PbListComponent,
    CableTransportListComponent,
    TttChassisComponent,
    TttCreateComponent,
    TotCreateComponent,
    TodCreateComponent,
    PbCreateComponent,
    TodPlotListComponent,
    FtCreateComponent,
    FeCreateComponent,
    TraveeCreateComponent,
    TttAllumageComponent,
  ],
  providers: [
    RessourcesModalService,
  ]
})
export class RessourcesModule { }
