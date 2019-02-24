import { Component, OnInit, Input } from '@angular/core';
import { Caracteristique } from 'web';
import { TranslateService } from 'helper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var Enumerable: any;
declare var swal: any;

@Component({
  selector: 'ressources-generalites-caracteristique-create',
  templateUrl: './caracteristique-create.component.html',
  styleUrls: ['./caracteristique-create.component.scss']
})
export class CaracteristiqueCreateComponent implements OnInit {

  @Input() data;
  _caracteristique: Caracteristique;

  constructor(public _ngbActiveModal: NgbActiveModal, private _translateService: TranslateService) { }

  ngOnInit() {
    if (this.data) {
      this._caracteristique = (this.data.modele) ? this.data : new Caracteristique();
      if (!this._caracteristique.paramModeleReference) {
        this._caracteristique.paramModeleReference = this.data.reference;
      }
    }
  }

  onSubmit() {
    const libelle = this._caracteristique.libelle;
    let caracteristiques = Enumerable.From(this.data.caracteristiqueList)
      .Where(function (x) { return x.libelle === libelle; })
      .Select(function (x) { return x; })
      .ToArray();

    if (caracteristiques && caracteristiques.length > 0) {
      let caracteristique = caracteristiques[0];
      if (caracteristique.id && caracteristique.id > 0) {
        swal({
          title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
          html: 'La caractéristique <b>' + this._caracteristique.libelle + '</b> existe dans la base de données.',
          type: 'info',
          allowOutsideClick: false
        });
      } else {
        swal({
          title: this._translateService.instant('NOTIFY_INFORMATION_TITLE'),
          html:
            'La caractéristique <b>' + this._caracteristique.libelle + '</b> a déjà été ajouté.',
          type: 'info',
          allowOutsideClick: false
        });
      }
      return;
    }

    this._ngbActiveModal.close(this._caracteristique);
  }

}
