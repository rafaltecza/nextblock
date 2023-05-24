import { LocaleContextTypes } from './LocaleContextTypes';
import { ActionsUnion, createAction } from '@type/ContextTypes';
import { LocaleDispatchType } from './LocaleContextProvider';

export const setLocaleAction = (dispatch: LocaleDispatchType, locale: string) => {
    dispatch(LocaleContextDispatch.setLocale(locale));
};

export const LocaleContextDispatch = {
    setLocale: (locale: string) => createAction(LocaleContextTypes.setLocale, { locale })
};

export type LocaleContextDispatchUnion = ActionsUnion<typeof LocaleContextDispatch>;


