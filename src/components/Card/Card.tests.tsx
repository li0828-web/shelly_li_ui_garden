import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders Card with children', () => {
    render(<Card>Test Card</Card>);
    expect(screen.getByText('Test Card')).toBeVisible();
  });

  test('Card has disabled styles when disabled', () => {
    render(<Card disabled>Disabled Card</Card>);
    const element = screen.getByText('Disabled Card');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
