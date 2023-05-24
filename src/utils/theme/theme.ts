import { color } from '@utils/theme/color';
import {font} from "@utils/theme/font";

export interface ThemeProps  {
    color: typeof color;
    font: typeof font;
}

export const theme: ThemeProps = {
    color, font
};


