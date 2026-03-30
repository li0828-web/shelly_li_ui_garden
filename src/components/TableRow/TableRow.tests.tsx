import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('TableRow Component', () => {
  test('renders TableRow with children', () => {
    render(<TableRow>Test TableRow</TableRow>);
    expect(screen.getByText('Test TableRow')).toBeVisible();
  });

  test('TableRow has disabled styles when disabled', () => {
    render(<TableRow disabled>Disabled TableRow</TableRow>);
    const element = screen.getByText('Disabled TableRow');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
