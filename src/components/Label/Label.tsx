import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.div<{ disabled?: boolean }>
  color: ${props => props.disabled ? '#999' : '#333'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  opacity: ${props => props.disabled ? 0.6 : 1};
;

export const Label: React.FC<LabelProps> = ({ 
  children, 
  disabled = false,
  ...props 
}) => {
  return (
    <StyledLabel disabled={disabled} {...props}>
      {children}
    </StyledLabel>
  );
};
