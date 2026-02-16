import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    children: [
      <option key="1">Option 1</option>,
      <option key="2">Option 2</option>,
      <option key="3">Option 3</option>
    ],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: [
      <option key="1">Option 1</option>,
      <option key="2">Option 2</option>,
      <option key="3">Option 3</option>
    ],
    disabled: true,
  },
};
