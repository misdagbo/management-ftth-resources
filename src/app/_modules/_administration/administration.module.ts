import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { HelperModule } from 'helper';
import { LayoutModule } from '../../theme/layouts/layout.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationModalService } from './administration-modal.service';
import { AdministrationComponent } from './administration/administration.component';
import { UtilisateurCreateComponent } from './_utilisateur/utilisateur-create/utilisateur-create.component';
import { UtilisateurListComponent } from './_utilisateur/utilisateur-list/utilisateur-list.component';
import { ProfileListComponent } from './_profile/profile-list/profile-list.component';
import { ProfileCreateComponent } from './_profile/profile-create/profile-create.component';
import { FonctionnaliteListComponent } from './_fonctionnalite/fonctionnalite-list/fonctionnalite-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HelperModule,
    LayoutModule,
    AdministrationRoutingModule,
    NgxMaskModule.forRoot({
      specialCharacters: ['(', ')', '[', ']', '\\', '\/', '.', ':', '-', ' ', '+', '@', ','],
      dropSpecialCharacters: false
    })
  ],
  declarations: [
    AdministrationComponent,
    UtilisateurCreateComponent,
    UtilisateurListComponent,
    ProfileCreateComponent,
    ProfileListComponent,
    FonctionnaliteListComponent,
  ],
  exports: [
  ],
  entryComponents: [
    UtilisateurCreateComponent,
    UtilisateurListComponent,
    ProfileCreateComponent,
    ProfileListComponent,
    FonctionnaliteListComponent,
  ],
  providers: [
    AdministrationModalService,
  ]
})
export class AdministrationModule { }
