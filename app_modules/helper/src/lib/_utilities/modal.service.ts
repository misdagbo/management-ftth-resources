import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HelperModule } from '../helper.module';

@Injectable({
  providedIn: HelperModule
})
export class ModalService {

  constructor(private _ngbModal: NgbModal) { }

  open(content: any, size: any, centered: boolean, backdrop: any, keyboard: boolean, data?: any, animation?: any): NgbModalRef {
    const _modal = this._ngbModal.open(content,
      {
        size: size,
        backdrop: backdrop,
        centered: centered,
        keyboard: keyboard
      }
    );

    const _instance = (_modal as any)._windowCmptRef.instance;
    setTimeout(function () {
      _instance.windowClass = animation;
    }, 0);

    const _fx = (_modal as any)._removeModalElements.bind(_modal);
    (_modal as any)._removeModalElements = () => {
      _instance.windowClass = '';
      setTimeout(_fx, 250);
    };

    _modal.componentInstance.data = data;

    return _modal;
  }

}
