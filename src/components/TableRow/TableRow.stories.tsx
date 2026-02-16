import type { Meta, StoryObj } from '@storybook/react-webpack5';
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
    children: 'Row content',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled row',
    disabled: true,
  },
};
