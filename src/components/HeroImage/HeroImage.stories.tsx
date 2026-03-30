import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Beautiful landscape',
    disabled: false,
    children: 'Welcome to our site',
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Beautiful landscape',
    disabled: true,
    children: 'Welcome to our site',
  },
};
