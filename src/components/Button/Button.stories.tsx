// src/components/Button/Button.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};