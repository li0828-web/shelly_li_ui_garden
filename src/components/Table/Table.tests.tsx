import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table Component', () => {
  test('renders Table with children', () => {
    render(<Table>Test Table</Table>);
    expect(screen.getByText('Test Table')).toBeVisible();
  });

  test('Table has disabled styles when disabled', () => {
    render(<Table disabled>Disabled Table</Table>);
    const element = screen.getByText('Disabled Table');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
