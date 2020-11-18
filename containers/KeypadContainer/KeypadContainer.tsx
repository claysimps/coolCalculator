import React, { FC } from 'react';
import { NeuButton } from '../../components/NeuButton';

import {
  StyledButtonList,
  StyledKeypadContainer,
  StyledButtonWrapper,
} from './KeypadContainer.styles';
import { inputDetails, inputKeys } from './inputKeys';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../utils/useAppDispatch';
import {
  startDisplay,
  updateDisplay,
  clearDisplay,
  clearMemory,
  percentFunction,
  minusFunction,
  setOperator,
  updateOperations,
  setBufferValue,
} from '../../state/calculator.slice';
import { getCalculatorAction } from '../../selectors/getCalculatorAction';
import { calculatorOperations } from '../../utils/CalculatorLogic';

interface KeypadContainerProps {}
// TODO: map buttons
export const KeypadContainer: FC<KeypadContainerProps> = () => {
  const dispatch = useAppDispatch();
  const {
    displayValue,
    startNext,
    bufferValue,
    previousOperator,
    currentOperator,
  } = useSelector(getCalculatorAction);

  const handlePress = (
    text: string,
    type: string,
    value: string | number | undefined,
  ) => {
    if (type === 'operand') {
      if (text === '.') {
        if (displayValue.includes('.')) {
          return;
        }
      }
      const displayAction = startNext === true ? startDisplay : updateDisplay;

      dispatch(
        displayAction({
          displayValue: text,
        }),
      );
    }
    if (type === 'function') {
      if (text === 'C') {
        dispatch(
          clearDisplay({
            displayValue: '0',
          }),
        );
      }
      if (text === 'CE') {
        dispatch(clearMemory());
      }
      if (text === '%') {
        dispatch(percentFunction());
      }
      if (text === '+/-') {
        dispatch(minusFunction());
      }
    }
    if (type === 'operator') {
      dispatch(
        setOperator({
          currentOperator: value,
        }),
      );
      if (previousOperator !== '') {
        const op1 = bufferValue;
        const op2 = parseFloat(displayValue);
        const operator = previousOperator;
        const result = calculatorOperations({ operator, op1, op2 });
        dispatch(
          updateOperations({
            displayValue: result.toString(),
            bufferValue: result,
            currentOperator,
          }),
        );
      } else {
        dispatch(setBufferValue());
      }
    }
  };

  const clearTextValue = bufferValue !== 0 ? 'CE' : 'C';
  return (
    <StyledKeypadContainer>
      <StyledButtonList>
        <StyledButtonWrapper>
          <NeuButton
            type="function"
            value={clearTextValue}
            text={clearTextValue}
            onPress={() =>
              handlePress(clearTextValue, 'function', clearTextValue)
            }
          />
        </StyledButtonWrapper>
        {inputDetails.map((action, index) => {
          const { value, text, type, double } = inputKeys[action];

          return (
            <StyledButtonWrapper key={index}>
              <NeuButton
                type={type}
                value={value}
                key={index}
                text={text}
                double={double}
                onPress={() => handlePress(text, type, value)}
              />
            </StyledButtonWrapper>
          );
        })}
      </StyledButtonList>
    </StyledKeypadContainer>
  );
};
