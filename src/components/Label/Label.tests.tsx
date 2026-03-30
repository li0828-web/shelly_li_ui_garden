import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label Component', () => {
  test('renders Label with children', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeVisible();
  });

  test('Label has disabled styles when disabled', () => {
    render(<Label disabled>Disabled Label</Label>);
    const element = screen.getByText('Disabled Label');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
