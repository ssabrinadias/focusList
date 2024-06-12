import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SearchFilter from "./";

const meta = {
  title: "Components/SearchFilter",
  component: SearchFilter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSearch: fn(),
  },
  args: { onSearch: fn() },
} satisfies Meta<typeof SearchFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defautl: Story = {
  args: {
    onSearch: fn(),
  },
};
