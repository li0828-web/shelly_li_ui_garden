import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Default Text',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Text',
    disabled: true,
  },
};
