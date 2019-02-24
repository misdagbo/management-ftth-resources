import { Injectable, Inject } from '@angular/core';
import { TRANSLATES } from './translates';

@Injectable()
export class TranslateService {

    private _currentLang: string;

    constructor(@Inject(TRANSLATES) private _translate: any) { }

    public get currentLang() {
        return this._currentLang;
    }

    public use(lang: string): void {
        this._currentLang = lang;
    }

    private translate(key: string): string {
        const translation = key;

        if (this._translate[this.currentLang] && this._translate[this.currentLang][key]) {
            return this._translate[this.currentLang][key];
        }
        return translation;
    }

    public instant(key: string) {
        return this.translate(key);
    }
}
