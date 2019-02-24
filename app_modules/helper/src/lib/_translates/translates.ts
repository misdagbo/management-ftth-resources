import { InjectionToken } from '@angular/core';

import { LANG_FR_NAME, LANG_FR_TRANS } from './lang-fr';
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';

export const TRANSLATES = new InjectionToken<any>('translates');

export const _translates = {
    [LANG_FR_NAME]: LANG_FR_TRANS,
    [LANG_EN_NAME]: LANG_EN_TRANS
};

export const TranslateProviders = [
    { provide: TRANSLATES, useValue: _translates }
];
