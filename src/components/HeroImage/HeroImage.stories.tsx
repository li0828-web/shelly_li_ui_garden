import { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    children: 'Default HeroImage',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled HeroImage',
    disabled: true,
  },
};
