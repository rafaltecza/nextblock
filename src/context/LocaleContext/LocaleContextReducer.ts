import { LocaleContextDispatchUnion } from './LocaleContextActions';
import { LocaleContextTypes } from './LocaleContextTypes';
import PolishMessages from '../../translations/pl.json';
import EnglishMessages from '../../translations/en.json';

export type LocaleKey = 'pl' | 'en';

export interface LocaleContextStateType {
    locale: LocaleKey;
    messages: Record<LocaleKey, Record<string, string | string[]>>;
}

export const initialState: LocaleContextStateType = {
    locale: 'en',
    messages: {
        pl: PolishMessages,
        en: EnglishMessages
    }
};

export const localeContextReducer = (
    state = initialState,
    action: LocaleContextDispatchUnion
): LocaleContextStateType => {
    switch (action.type) {
        case LocaleContextTypes.setLocale:
            return { ...state, locale: action.payload.locale as LocaleKey };

        default:
            return state;
    }
};




