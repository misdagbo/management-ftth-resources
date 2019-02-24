import { PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';
export declare class TranslatePipe implements PipeTransform {
    private _translateService;
    constructor(_translateService: TranslateService);
    transform(value: string, args: any[]): any;
}
