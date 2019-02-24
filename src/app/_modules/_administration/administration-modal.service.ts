import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'helper';
import { UtilisateurCreateComponent } from './_utilisateur/utilisateur-create/utilisateur-create.component';
import { ProfileCreateComponent } from './_profile/profile-create/profile-create.component';

@Injectable()
export class AdministrationModalService {

  constructor(private _modalService: ModalService) { }

  utilisateur(data?: any): NgbModalRef {
    return this._modalService.open(UtilisateurCreateComponent, 'lg', true, 'static', true, data, 'fade-scale modal-sz-600');
  }

  profile(data?: any): NgbModalRef {
    return this._modalService.open(ProfileCreateComponent, 'lg', false, 'static', true, data, 'fade-scale modal-sz-400');
  }

}
