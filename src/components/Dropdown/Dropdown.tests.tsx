import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  test('renders Dropdown with children', () => {
    render(<Dropdown>Test Dropdown</Dropdown>);
    expect(screen.getByText('Test Dropdown')).toBeVisible();
  });

  test('Dropdown has disabled styles when disabled', () => {
    render(<Dropdown disabled>Disabled Dropdown</Dropdown>);
    const element = screen.getByText('Disabled Dropdown');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
