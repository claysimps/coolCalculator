import styled, { css } from 'styled-components/native';
import { NeuThemeProps } from '../../constants/themes/themes.types';

export interface StyledThemeContainerProps extends NeuThemeProps {
  center?: boolean;
}

const justifyCenter = css`
  justify-content: center;
`;

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const StyledThemeContainer = styled.View<StyledThemeContainerProps>`
  flex: 1;
  align-items: center;
  background: ${(props) => props.theme.palette.canvas};
  ${(props) => props.center && justifyCenter};
`;
