import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders Text with children', () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText('Test Text')).toBeVisible();
  });

  test('Text has disabled styles when disabled', () => {
    render(<Text disabled>Disabled Text</Text>);
    const element = screen.getByText('Disabled Text');
    expect(element).toHaveStyle('cursor: not-allowed');
    expect(element).toHaveStyle('opacity: 0.6');
  });
});
