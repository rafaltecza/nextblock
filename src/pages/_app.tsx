import {AppProps} from "next/app";
import React, {ReactElement, useCallback, useEffect, useMemo} from "react";
import Head from "next/head";
import {ThemeProvider} from "styled-components";
import GlobalCSS from '../styles/Globals.styled';
import { IntlProvider, useIntl } from 'react-intl';
import PolishMessages from '../translations/pl.json';
import EnglishMessages from '../translations/en.json';
import {combineComponents} from "../context/MultiContext";
import {LocaleKey} from "../context/LocaleContext/LocaleContextReducer";
import {LocaleContextProvider} from "../context/LocaleContext/LocaleContextProvider";
import {useLocaleContext} from "../context/LocaleContext/LocaleContextHook";
import {setLocaleAction} from "../context/LocaleContext/LocaleContextActions";
import {theme} from "@utils/theme/theme";

function App({ Component, pageProps }: AppProps) {
    const intl = useIntl();

    return (
        <>
            <Head>
                <title>{intl.formatMessage({ id: 'title' })}</title>
                <meta name="description" content={intl.formatMessage({ id: 'description' })} />
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalCSS />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

const AppContextParent = (props: AppProps): ReactElement => {
    const { state, dispatch } = useLocaleContext();

    const messages = useMemo(() => {
        return {
            pl: PolishMessages,
            en: EnglishMessages
        } as Record<LocaleKey, Record<string, any>>
    }, []);

    const setLocale = useCallback(
        (language: LocaleKey) => {
            setLocaleAction(dispatch, language);
        }, [dispatch]
    );

    useEffect(() => {
        const browserLanguage = navigator.language.split('-')[0];
        if (Object.keys(messages).includes(browserLanguage)) {
            setLocale(browserLanguage as LocaleKey)
        }
    }, [messages, setLocale]);

    const locale: LocaleKey = state.locale;

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <App {...props}></App>
        </IntlProvider>
    )
}

const AppContextProvider = combineComponents(
    ...[]
);

const AppWithContext = (props: AppProps): React.ReactElement => (
    <AppContextProvider>
        <LocaleContextProvider>
            <AppContextParent {...props} />
        </LocaleContextProvider>
    </AppContextProvider>
);

export default AppWithContext;