import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.disabled ? '#999' : '#333'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-bottom: 4px;
`;

export const Label: React.FC<LabelProps> = ({ 
  children, 
  htmlFor,
  disabled = false,
  ...props 
}) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled} {...props}>
      {children}
    </StyledLabel>
  );
};
