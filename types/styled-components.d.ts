import { ThemeProps as KryptonimThemeProps } from '@utils/theme/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends KryptonimThemeProps {}
}