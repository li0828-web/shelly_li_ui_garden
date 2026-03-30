import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a text component',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'This is disabled text',
    disabled: true,
  },
};
