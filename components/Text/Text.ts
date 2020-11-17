import styled from 'styled-components/native';
import { TypographyProps } from '../../constants/typography';
import { typography } from '../../constants/typography';
import { NeuThemeProps } from '../../constants/themes/themes.types';
import { light, dark } from '../../constants/themes';

export interface StyledBaseTextProps extends TypographyProps, NeuThemeProps {
  fontColor?:
    | keyof typeof light.theme.fontColor
    | keyof typeof dark.theme.fontColor;
}

export const StyledBaseText = styled.Text<StyledBaseTextProps>`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${(props) =>
    typography.fontWeight[props.fontWeight || 'regular']};
  color: ${(props) => props.theme.fontColor[props.fontColor || 'primary']};
`;
