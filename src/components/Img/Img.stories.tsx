import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    src: { control: 'text' },
    alt: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Beautiful landscape',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Beautiful landscape',
    disabled: true,
  },
};
