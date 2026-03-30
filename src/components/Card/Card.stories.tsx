import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a card component',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled card',
    disabled: true,
  },
};
