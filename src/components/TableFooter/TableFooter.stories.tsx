import { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    children: 'Default TableFooter',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled TableFooter',
    disabled: true,
  },
};
