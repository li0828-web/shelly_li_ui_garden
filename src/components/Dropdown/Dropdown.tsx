import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${props => props.disabled ? '#f5f5f5' : 'white'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  width: 100%;
`;

export const Dropdown: React.FC<DropdownProps> = ({ 
  children, 
  disabled = false,
  ...props 
}) => {
  return (
    <StyledDropdown disabled={disabled} {...props}>
      {children}
    </StyledDropdown>
  );
};
