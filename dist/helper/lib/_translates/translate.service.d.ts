export declare class TranslateService {
    private _translate;
    private _currentLang;
    constructor(_translate: any);
    readonly currentLang: string;
    use(lang: string): void;
    private translate(key);
    instant(key: string): string;
}
