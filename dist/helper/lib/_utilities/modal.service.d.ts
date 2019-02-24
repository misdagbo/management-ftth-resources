import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
export declare class ModalService {
    private _ngbModal;
    constructor(_ngbModal: NgbModal);
    open(content: any, size: any, centered: boolean, backdrop: any, keyboard: boolean, data?: any, animation?: any): NgbModalRef;
}
