import React, { Dispatch } from 'react';
import { initialState, localeContextReducer, LocaleContextStateType } from './LocaleContextReducer';
import { LocaleContextDispatchUnion } from './LocaleContextActions';

export type LocaleDispatchType = Dispatch<LocaleContextDispatchUnion>;

export interface LocaleContextValue {
    state: LocaleContextStateType;
    dispatch: LocaleDispatchType;
}

export const LocaleContext = React.createContext<LocaleContextValue | null>(null);

interface LocaleContextProviderProps {
    children: React.ReactNode;
}
export const LocaleContextProvider: React.FC<LocaleContextProviderProps> = ({ children }) => {
    const [state, dispatch] = React.useReducer(localeContextReducer, initialState, (state) => state);
    const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};


