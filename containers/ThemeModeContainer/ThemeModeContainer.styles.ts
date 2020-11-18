import styled from 'styled-components/native';
import { neuDimensions } from '../../constants/neuDimensions';
import { StyledBaseText } from '../../components/Text';

export const StyledThemeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: ${neuDimensions.outputDisplay.width}px;

  padding: 30px 0;
`;
export const StyledPickerWrapper = styled.View`
  align-items: center;
  width: ${neuDimensions.outputDisplay.width}px;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const StyledSwitchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${neuDimensions.outputDisplay.width}px;
`;

export const StyledToggleText = styled(StyledBaseText)`
  color: ${(props) => props.theme.fontColor.primary};
  font-size: 20px;
  padding: 20px 0;
`;

export const StyledSwitchText = styled(StyledBaseText)`
  color: ${(props) => props.theme.fontColor.primary};
  font-size: 20px;
  padding: 20px 0;
`;
