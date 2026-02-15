import { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Default Label',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Label',
    disabled: true,
  },
};
