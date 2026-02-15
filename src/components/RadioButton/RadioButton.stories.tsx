import { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    children: 'Default RadioButton',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled RadioButton',
    disabled: true,
  },
};
