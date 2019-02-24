import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver, HostListener } from '@angular/core';
import { UIViewDirective } from 'helper';
import { GeneralitesComponent } from '../../_generalites/generalites/generalites.component';
import { OltListComponent } from '../olt-list/olt-list.component';
import { RouterListComponent } from '../router-list/router-list.component';

declare var $: any;

@Component({
  selector: 'ressources-olt-footer',
  templateUrl: './olt-footer.component.html',
  styleUrls: ['./olt-footer.component.scss']
})
export class OltFooterComponent implements OnInit {

  componentRef: ComponentRef<any>;
  _viewContainerRef: ViewContainerRef;
  @ViewChild(UIViewDirective) uiView: UIViewDirective;

  _screenHeight: number;
  _screenWidth: number;

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
        case 'olt': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(OltListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
        case 'router': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(RouterListComponent);
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
    this.onResize();

    $('.mCustomScrollbar').mCustomScrollbar({
      scrollButtons: { enable: true },
      theme: 'light-thick'
    });
    this.tab = 'olt';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this._screenHeight = window.innerHeight - 113;
    this._screenWidth = window.innerWidth;
  }

}
