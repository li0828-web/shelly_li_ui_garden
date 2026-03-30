import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders Img with children', () => {
    render(<Img>Test Img</Img>);
    expect(screen.getByText('Test Img')).toBeVisible();
  });

  test('Img has disabled styles when disabled', () => {
    render(<Img disabled>Disabled Img</Img>);
    const element = screen.getByText('Disabled Img');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
