import type { Meta, StoryObj } from "@storybook/react";

import TaskStatusIcon from "./";

const meta = {
  title: "Components/TaskStatusIcon",
  component: TaskStatusIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { status: "done" },
} satisfies Meta<typeof TaskStatusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Done: Story = {
  args: {
    status: "done",
  },
};
export const Todo: Story = {
  args: {
    status: "todo",
  },
};
