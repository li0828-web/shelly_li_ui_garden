// src/components/Button/Button.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders the button with text', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toHaveStyle('background-color: #d3d3d3');
    expect(button).toHaveStyle('cursor: not-allowed');
  });
});
