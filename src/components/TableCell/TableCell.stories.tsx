import { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: 'Default TableCell',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled TableCell',
    disabled: true,
  },
};
