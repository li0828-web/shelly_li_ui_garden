import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableHeader } from './TableHeader';

describe('TableHeader Component', () => {
  test('renders TableHeader with children', () => {
    render(<TableHeader>Test TableHeader</TableHeader>);
    expect(screen.getByText('Test TableHeader')).toBeVisible();
  });

  test('TableHeader has disabled styles when disabled', () => {
    render(<TableHeader disabled>Disabled TableHeader</TableHeader>);
    const element = screen.getByText('Disabled TableHeader');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
