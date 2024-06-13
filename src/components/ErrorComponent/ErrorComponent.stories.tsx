import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Header from "./";

const meta = {
  title: "Components/ErrorComponent",
  component: Header,

  tags: ["autodocs"],
  args: { retray: fn() },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defautl: Story = {
  args: {
    retray: fn(),
  },
};
