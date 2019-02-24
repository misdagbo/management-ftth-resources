import { Component, OnInit, HostListener, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { OltAsideComponent } from '../_olt/olt-aside/olt-aside.component';
import { OltFooterComponent } from '../_olt/olt-footer/olt-footer.component';
import { OltRessourcesComponent } from '../_olt/olt-ressources/olt-ressources.component';
import { RfoAsideComponent } from '../_rfo/rfo-aside/rfo-aside.component';
import { RfoRessourcesComponent } from '../_rfo/rfo-ressources/rfo-ressources.component';
import { RfoFooterComponent } from '../_rfo/rfo-footer/rfo-footer.component';
import { SroAsideComponent } from '../_sro/sro-aside/sro-aside.component';
import { SroRessourcesComponent } from '../_sro/sro-ressources/sro-ressources.component';
import { SroFooterComponent } from '../_sro/sro-footer/sro-footer.component';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.scss']
})
export class RessourcesComponent implements OnInit {

  componentRef: ComponentRef<any>;
  @ViewChild('aside', { read: ViewContainerRef }) asideContainer;
  @ViewChild('content', { read: ViewContainerRef }) contentContainer;
  @ViewChild('footer', { read: ViewContainerRef }) footerContainer;

  private _tab: string;

  _screenHeight: number;
  _screenWidth: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.tab = 'olt';
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this._screenHeight = window.innerHeight - 113;
    this._screenWidth = window.innerWidth;
  }

  public get tab(): string {
    return this._tab;
  }

  public set tab(value: string) {
    this._tab = value;
    switch (value) {
      case 'olt': {
        if (this.asideContainer) {
          this.asideContainer.clear();
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(OltAsideComponent);
          this.componentRef = this.asideContainer.createComponent(_componentFactory);
        }
        if (this.contentContainer) {
          this.contentContainer.clear();
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(OltRessourcesComponent);
          this.componentRef = this.contentContainer.createComponent(_componentFactory);
        }
        if (this.footerContainer) {
          this.footerContainer.clear();
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(OltFooterComponent);
          this.componentRef = this.footerContainer.createComponent(_componentFactory);
        }
      }
        break;
      case 'rfo': {
        if (this.asideContainer) {
          this.asideContainer.clear();
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(RfoAsideComponent);
          this.componentRef = this.asideContainer.createComponent(_componentFactory);
        }
        if (this.contentContainer) {
          this.contentContainer.clear();
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(RfoRessourcesComponent);
          this.componentRef = this.contentContainer.createComponent(_componentFactory);
        }
        if (this.footerContainer) {
          this.footerContainer.clear();
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(RfoFooterComponent);
          this.componentRef = this.footerContainer.createComponent(_componentFactory);
        }
      }
        break;
      case 'sro': {
        if (this.asideContainer) {
          this.asideContainer.clear();
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(SroAsideComponent);
          this.componentRef = this.asideContainer.createComponent(_componentFactory);
        }
        if (this.contentContainer) {
          this.contentContainer.clear();
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(SroRessourcesComponent);
          this.componentRef = this.contentContainer.createComponent(_componentFactory);
        }
        if (this.footerContainer) {
          this.footerContainer.clear();
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(SroFooterComponent);
          this.componentRef = this.footerContainer.createComponent(_componentFactory);
        }
      }
        break;
    }
  }

}

