import { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    children: 'Default Img',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Img',
    disabled: true,
  },
};
