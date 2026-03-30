import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: 'Table content',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled table',
    disabled: true,
  },
};
