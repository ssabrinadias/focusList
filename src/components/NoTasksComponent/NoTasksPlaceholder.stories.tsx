import { Meta, StoryObj } from "@storybook/react";

import NoTasksPlaceholder from ".";

const meta: Meta<typeof NoTasksPlaceholder> = {
  title: "Components/NoTasksPlaceholder",
  component: NoTasksPlaceholder,
};

export default meta;

type Story = StoryObj<typeof NoTasksPlaceholder>;

export const Default: Story = {};
