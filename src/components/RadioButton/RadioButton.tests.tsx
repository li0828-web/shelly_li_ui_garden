import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders RadioButton with children', () => {
    render(<RadioButton>Test RadioButton</RadioButton>);
    expect(screen.getByText('Test RadioButton')).toBeVisible();
  });

  test('RadioButton has disabled styles when disabled', () => {
    render(<RadioButton disabled>Disabled RadioButton</RadioButton>);
    const element = screen.getByText('Disabled RadioButton');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
