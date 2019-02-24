import { Component, OnInit, Input } from '@angular/core';
import { FonctionnaliteService, Fonctionnalite, ProfileFonctionnalite, ProfileFonctionnaliteService, Profile, ProfileService, ProfileRequest } from 'web';
import { Request, Response, GlobalEnum, TranslateService } from 'helper';
import { environment } from '../../../../../environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var swal: any;
declare var Enumerable: any;

@Component({
  selector: 'administration-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.scss']
})
export class ProfileCreateComponent implements OnInit {

  @Input() data;
  _item: Profile;
  _fonctionnalites: Array<any>;
  _fonctionnalitesChecked: Array<any> = [];
  _profileFonctionnalites: Array<any>;

  constructor(public _ngbActiveModal: NgbActiveModal, private _profileService: ProfileService,
    private _fonctionnaliteService: FonctionnaliteService, private _profileFonctionnaliteService: ProfileFonctionnaliteService,
    private _translateService: TranslateService) { }

  ngOnInit() {
    this._item = this.data || new Profile();
    this.doLoadFonctionnalite();
  }

  doCheckedFonctionnalite(profile: Profile) {
    const _request = new Request<ProfileFonctionnalite>();
    _request.data = new ProfileFonctionnalite();
    _request.data.profile = profile.id;
    _request.takeAll = true;

    this._profileFonctionnaliteService.get(_request, environment.origin,
      (response: Response<ProfileFonctionnalite>) => {
        if (!response.hasError) {
          this._profileFonctionnalites = response.items;
          for (let fonctionnalite of this._fonctionnalites) {
            for (let profileFonctionnalite of this._profileFonctionnalites) {
              if (fonctionnalite.id === profileFonctionnalite.fonctionnalite) {
                fonctionnalite.checked = true;
              }
            }
          }
        } else {

        }
      });
  }

  doLoadFonctionnalite() {
    const _request = new Request<Fonctionnalite>();
    _request.data = new Fonctionnalite();
    _request.takeAll = true;
    _request.orderBy = GlobalEnum._ORDER_BY_ASC;

    this._fonctionnaliteService.get(_request, environment.origin,
      (response: Response<Fonctionnalite>) => {
        if (!response.hasError) {
          this._fonctionnalites = response.items;
          if (this._item && this._item.id > 0) {
            this.doCheckedFonctionnalite(this._item);
          }
        } else {

        }
      });
  }

  onSubmit() {
    this._fonctionnalitesChecked = Enumerable.From(this._fonctionnalites).Where(function (x) { return x.checked; }).Select(function (x) { return x; }).ToArray();
    if (this._fonctionnalitesChecked.length === 0) {
      swal({
        title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
        text: 'Veuillez cocher au moins une fonctionnalité',
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
        const _request = new ProfileRequest();
        _request.datas = [this._item];
        _request.datasAdminFonctionnalite = this._fonctionnalitesChecked;

        if (this._item.id && this._item.id > 0) {
          this._profileService.update(_request, environment.origin,
            (response: Response<Profile>) => {
              if (!response.hasError) {
                this._ngbActiveModal.close();
              } else {

              }
            });
        } else {
          this._profileService.create(_request, environment.origin,
            (response: Response<Profile>) => {
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
