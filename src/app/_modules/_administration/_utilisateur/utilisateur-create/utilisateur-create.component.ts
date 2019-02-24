import { Component, OnInit, Input } from '@angular/core';
import { ProfileService, Profile, Utilisateur, UtilisateurService } from 'web';
import { Request, Response, TranslateService } from 'helper';
import { environment } from '../../../../../environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var swal: any;

@Component({
  selector: 'administration-utilisateur-create',
  templateUrl: './utilisateur-create.component.html',
  styleUrls: ['./utilisateur-create.component.scss']
})
export class UtilisateurCreateComponent implements OnInit {

  @Input() data;
  _item: Utilisateur;
  _cPassword: string;
  _profiles: Array<any>;

  constructor(public _ngbActiveModal: NgbActiveModal, private _profileService: ProfileService,
    private _utilisateurService: UtilisateurService, private _translateService: TranslateService) { }

  ngOnInit() {
    this._item = this.data || new Utilisateur();
    if (this._item.password) {
      this._cPassword = this._item.password;
    }
    this.doLoadProfile();
  }

  doLoadProfile() {
    const _request = new Request<Profile>();
    _request.data = new Profile();
    _request.takeAll = true;

    this._profileService.get(_request, environment.origin,
      (response: Response<Profile>) => {
        if (!response.hasError) {
          this._profiles = response.items;
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
        const _request = new Request<Utilisateur>();
        _request.datas = [this._item];

        if (this._item.id && this._item.id > 0) {
          this._utilisateurService.update(_request, environment.origin,
            (response: Response<Utilisateur>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._utilisateurService.create(_request, environment.origin,
            (response: Response<Utilisateur>) => {
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
