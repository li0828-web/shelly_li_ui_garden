import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean }>`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : 'white')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Card: React.FC<CardProps> = ({ children, disabled = false, ...props }) => {
  return (
    <StyledCard disabled={disabled} {...props}>
      {children}
    </StyledCard>
  );
};
