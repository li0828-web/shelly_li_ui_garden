import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Default Card',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Card',
    disabled: true,
  },
};
