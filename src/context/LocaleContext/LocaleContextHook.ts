import React from 'react';
import { LocaleContext } from './LocaleContextProvider';

export const useLocaleContext = () => {
    const context = React.useContext(LocaleContext);

    if (!context) {
        throw Error('useLocaleContext must be used within a LocaleContextProvider');
    }

    return context;
};


