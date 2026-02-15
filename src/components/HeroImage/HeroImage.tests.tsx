import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('renders HeroImage with children', () => {
    render(<HeroImage>Test HeroImage</HeroImage>);
    expect(screen.getByText('Test HeroImage')).toBeVisible();
  });

  test('HeroImage has disabled styles when disabled', () => {
    render(<HeroImage disabled>Disabled HeroImage</HeroImage>);
    const element = screen.getByText('Disabled HeroImage');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
