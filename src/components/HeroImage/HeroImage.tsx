import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<{ disabled?: boolean; src?: string }>`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.src || 'https://via.placeholder.com/1200x400'});
  background-size: cover;
  background-position: center;
  position: relative;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <StyledHeroImage src={src} disabled={disabled} {...props}>
      <Overlay>{children || alt}</Overlay>
    </StyledHeroImage>
  );
};
