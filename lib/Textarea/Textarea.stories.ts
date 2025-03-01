import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    variant: {
      control: false,
      options: ["default", "underline"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "normall", "large"],
    },
    theme: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "success", "info"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Default",
    variant: "default",
    size: "normal",
    theme: "danger",
  },
};

export const Underline: Story = {
  args: {
    placeholder: "Underline",
    variant: "underline",
    size: "small",
    theme: "success",
  },
};
