import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import AppContainer from "../ContentContainer";

import SearchFilter from "./";

const meta: Meta<typeof SearchFilter> = {
  title: "Components/SearchFilter",
  component: SearchFilter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSearch: fn(),
  },
  decorators: [
    (Story) => (
      <AppContainer>
        <Story />
      </AppContainer>
    ),
  ],
  args: { onSearch: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Defautl: Story = {
  args: {
    onSearch: fn(),
  },
};
