import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UIViewDirective } from 'helper';
import { UtilisateurListComponent } from '../_utilisateur/utilisateur-list/utilisateur-list.component';
import { ProfileListComponent } from '../_profile/profile-list/profile-list.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  componentRef: ComponentRef<any>;
  _viewContainerRef: ViewContainerRef;
  @ViewChild(UIViewDirective) uiView: UIViewDirective;

  private _tab: string;

  public get tab(): string {
    return this._tab;
  }

  public set tab(value: string) {
    if (this.uiView) {
      this._tab = value;
      this._viewContainerRef = this.uiView.viewContainerRef;
      if (this._viewContainerRef) {
        this._viewContainerRef.clear();
      }
      switch (value) {
        case 'utilisateur': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(UtilisateurListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
        case 'profile': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(ProfileListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
      }
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.tab = 'utilisateur';
  }

}
