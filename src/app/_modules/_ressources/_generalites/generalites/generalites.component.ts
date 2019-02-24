import { Component, OnInit, HostListener, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UIViewDirective } from 'helper';
import { CommuneListComponent } from '../_commune/commune-list/commune-list.component';
import { QuartierListComponent } from '../_quartier/quartier-list/quartier-list.component';
import { FournisseurListComponent } from '../_fournisseur/fournisseur-list/fournisseur-list.component';
import { OffreListComponent } from '../_offre/offre-list/offre-list.component';
import { ModeleListComponent } from '../_modele/modele-list/modele-list.component';
import { SiteListComponent } from '../_site/site-list/site-list.component';

declare var $: any;

@Component({
  selector: 'ressources-generalites',
  templateUrl: './generalites.component.html',
  styleUrls: ['./generalites.component.scss']
})
export class GeneralitesComponent implements OnInit {

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
        case 'commune': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(CommuneListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
        case 'quartier': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(QuartierListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
        case 'site': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(SiteListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
        case 'fournisseur': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(FournisseurListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
        case 'modele': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModeleListComponent);
          this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        }
          break;
        case 'offre': {
          const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(OffreListComponent);
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
    this.tab = 'commune';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this._screenHeight = window.innerHeight - 113;
    this._screenWidth = window.innerWidth;
  }

}
