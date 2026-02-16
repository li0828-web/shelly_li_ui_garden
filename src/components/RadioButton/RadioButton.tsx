import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

const StyledRadio = styled.input.attrs({ type: 'radio' })<{ disabled?: boolean }>`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ 
  children, 
  name,
  value,
  checked,
  disabled = false,
  onChange,
  ...props 
}) => {
  return (
    <RadioContainer disabled={disabled}>
      <StyledRadio
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={disabled ? undefined : onChange}
        {...props}
      />
      {children}
    </RadioContainer>
  );
};
