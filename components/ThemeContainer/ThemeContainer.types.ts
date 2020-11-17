import { ReactNode } from 'react';
import { StyledThemeContainerProps } from './ThemeContainer.styles';

export interface ThemeContainerProps extends StyledThemeContainerProps {
  children: ReactNode;
}
