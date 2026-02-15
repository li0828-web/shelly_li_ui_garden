import { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    children: 'Default TableRow',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled TableRow',
    disabled: true,
  },
};
