import { Component, OnInit, ComponentRef, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Rfo } from 'web';
import { SharedService, UIViewDirective } from 'helper';
import { Subscription } from 'rxjs';
import { RfoChassisComponent } from '../rfo-chassis/rfo-chassis.component';

@Component({
  selector: 'ressources-rfo-ressources',
  templateUrl: './rfo-ressources.component.html',
  styleUrls: ['./rfo-ressources.component.scss']
})
export class RfoRessourcesComponent implements OnInit {

  _item: Rfo;
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
        case 'rfo-chassis': {
          if (object.__DATA) {
            this._item = object.__DATA;
            const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(RfoChassisComponent);
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
