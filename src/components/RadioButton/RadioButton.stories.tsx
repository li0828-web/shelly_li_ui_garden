import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    children: 'Option 1',
    name: 'radio-group',
    value: 'option1',
    checked: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled option',
    name: 'radio-group',
    value: 'option1',
    checked: false,
    disabled: true,
  },
};
