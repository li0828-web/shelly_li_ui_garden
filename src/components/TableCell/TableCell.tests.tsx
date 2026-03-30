import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell Component', () => {
  test('renders TableCell with children', () => {
    render(<TableCell>Test TableCell</TableCell>);
    expect(screen.getByText('Test TableCell')).toBeVisible();
  });

  test('TableCell has disabled styles when disabled', () => {
    render(<TableCell disabled>Disabled TableCell</TableCell>);
    const element = screen.getByText('Disabled TableCell');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
