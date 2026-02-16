import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.div<{ disabled?: boolean }>`
  color: ${props => props.disabled ? '#999' : '#333'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

export const TableFooter: React.FC<TableFooterProps> = ({ 
  children, 
  disabled = false,
  ...props 
}) => {
  return (
    <StyledTableFooter disabled={disabled} {...props}>
      {children}
    </StyledTableFooter>
  );
};
