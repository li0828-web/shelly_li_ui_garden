import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    children: 'Default Dropdown',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Dropdown',
    disabled: true,
  },
};
