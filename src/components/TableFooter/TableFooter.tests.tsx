import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';

describe('TableFooter Component', () => {
  test('renders TableFooter with children', () => {
    render(<TableFooter>Test TableFooter</TableFooter>);
    expect(screen.getByText('Test TableFooter')).toBeVisible();
  });

  test('TableFooter has disabled styles when disabled', () => {
    render(<TableFooter disabled>Disabled TableFooter</TableFooter>);
    const element = screen.getByText('Disabled TableFooter');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
