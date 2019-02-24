import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UIViewDirective } from 'helper';
import { GeneralitesComponent } from '../../_generalites/generalites/generalites.component';
import { RfoListComponent } from '../rfo-list/rfo-list.component';
import { CableTransportListComponent } from '../cable-transport-list/cable-transport-list.component';

@Component({
  selector: 'ressources-rfo-footer',
  templateUrl: './rfo-footer.component.html',
  styleUrls: ['./rfo-footer.component.scss']
})
export class RfoFooterComponent implements OnInit {

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
        case 'console': {

        }
          break;
        case 'rfo': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(RfoListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
        case 'parametres': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(GeneralitesComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
      }
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.tab = 'rfo';
  }

}
