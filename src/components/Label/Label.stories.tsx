import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    htmlFor: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label text',
    htmlFor: 'input-id',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled label',
    htmlFor: 'input-id',
    disabled: true,
  },
};
