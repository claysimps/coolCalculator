import { light } from './light';
import { dark } from './dark';
import { red } from './red';

export interface NeuThemeProps {
  theme?: NeuThemeValueProps;
}

export interface NeuThemeValueProps {
  palette:
    | typeof light.theme.palette
    | typeof dark.theme.palette
    | typeof red.theme.palette;
  fontColor:
    | typeof light.theme.fontColor
    | typeof dark.theme.fontColor
    | typeof red.theme.fontColor;
}
