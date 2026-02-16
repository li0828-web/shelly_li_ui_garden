import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.div<{ disabled?: boolean }>`
  color: ${props => props.disabled ? '#999' : '#333'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

export const Table: React.FC<TableProps> = ({ 
  children, 
  disabled = false,
  ...props 
}) => {
  return (
    <StyledTable disabled={disabled} {...props}>
      {children}
    </StyledTable>
  );
};
