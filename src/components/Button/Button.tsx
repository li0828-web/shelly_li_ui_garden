// src/components/Button/Button.tsx
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ bg?: string; disabled?: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#d3d3d3' : props.bg || '#007bff')};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#d3d3d3' : '#0056b3')};
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, backgroundColor, disabled, onClick }) => {
  return (
    <StyledButton bg={backgroundColor} disabled={disabled} onClick={disabled ? undefined : onClick}>
      {children}
    </StyledButton>
  );
};
