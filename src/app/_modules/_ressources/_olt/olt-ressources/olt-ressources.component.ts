import { Component, OnInit, ComponentRef, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Olt } from 'web';
import { SharedService, UIViewDirective } from 'helper';
import { Subscription } from 'rxjs';
import { OltChassisComponent } from '../olt-chassis/olt-chassis.component';
import { OltRouterComponent } from '../olt-router/olt-router.component';
import { OltOntComponent } from '../olt-ont/olt-ont.component';
import { OltRfoComponent } from '../olt-rfo/olt-rfo.component';

@Component({
  selector: 'ressources-olt-ressources',
  templateUrl: './olt-ressources.component.html',
  styleUrls: ['./olt-ressources.component.scss']
})
export class OltRessourcesComponent implements OnInit {

  _item: any;
  _subscription: Subscription;

  componentRef: ComponentRef<any>;
  _viewContainerRef: ViewContainerRef;
  @ViewChild(UIViewDirective) uiView: UIViewDirective;

  constructor(private _sharedService: SharedService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this._subscription = this._sharedService.get().subscribe(object => {
      this._item = null;
      this._viewContainerRef = this.uiView.viewContainerRef;
      if (this._viewContainerRef) {
        this._viewContainerRef.clear();
      }
      switch (object.__TAG) {
        case 'olt-chassis': {
          if (object.__DATA) {
            this._item = object.__DATA;
            const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(OltChassisComponent);
            this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
            this.componentRef.instance.data = object.__DATA;
          }
        }
          break;
        case 'olt-link': {
          if (object.__DATA) {
            this._item = object.__DATA.chassis;
            const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(OltRouterComponent);
            this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
            this.componentRef.instance.data = object.__DATA;
          }
        }
          break;
        case 'olt-ont': {
          if (object.__DATA) {
            this._item = object.__DATA.chassis;
            const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(OltOntComponent);
            this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
            this.componentRef.instance.data = object.__DATA;
          }
        }
          break;
        case 'olt-port-rfo': {
          if (object.__DATA) {
            this._item = object.__DATA.chassis;
            const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(OltRfoComponent);
            this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
            this.componentRef.instance.data = object.__DATA;
          }
        }
          break;
      }
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
