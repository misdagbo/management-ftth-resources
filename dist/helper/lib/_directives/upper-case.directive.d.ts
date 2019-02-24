import { EventEmitter } from '@angular/core';
export declare class UpperCaseDirective {
    ngModelChange: EventEmitter<any>;
    ngModel: any;
    constructor();
    onModelChange($event: any): void;
}
