import { Component, OnInit, ComponentRef, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Sro } from 'web';
import { SharedService, UIViewDirective } from 'helper';
import { Subscription } from 'rxjs';
import { SroChassisComponent } from '../sro-chassis/sro-chassis.component';
import { TttChassisComponent } from '../ttt-chassis/ttt-chassis.component';

@Component({
  selector: 'ressources-sro-ressources',
  templateUrl: './sro-ressources.component.html',
  styleUrls: ['./sro-ressources.component.scss']
})
export class SroRessourcesComponent implements OnInit {

  _item: Sro;
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
        case 'sro-chassis': {
          if (object.__DATA) {
            this._item = object.__DATA;
            const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(SroChassisComponent);
            this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
            this.componentRef.instance.data = object.__DATA;
          }
        }
          break;
        case 'sro-ttt': {
          if (object.__DATA) {
            this._item = object.__DATA;
            const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(TttChassisComponent);
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
