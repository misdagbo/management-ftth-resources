import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UIViewDirective } from 'helper';
import { GeneralitesComponent } from '../../_generalites/generalites/generalites.component';
import { SroListComponent } from '../sro-list/sro-list.component';
import { PbListComponent } from '../pb-list/pb-list.component';

@Component({
  selector: 'ressources-sro-footer',
  templateUrl: './sro-footer.component.html',
  styleUrls: ['./sro-footer.component.scss']
})
export class SroFooterComponent implements OnInit {

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
        case 'sro': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(SroListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
        case 'pb': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(PbListComponent);
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
    this.tab = 'sro';
  }

}
