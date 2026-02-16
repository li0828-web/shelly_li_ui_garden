import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  opacity: ${props => props.disabled ? 0.6 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
`;

export const Img: React.FC<ImgProps> = ({ 
  src, 
  alt, 
  disabled = false,
  ...props 
}) => {
  return (
    <StyledImg 
      src={src || 'https://via.placeholder.com/300'} 
      alt={alt || 'Placeholder image'} 
      disabled={disabled} 
      {...props} 
    />
  );
};
