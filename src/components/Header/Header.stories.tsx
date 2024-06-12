import { MemoryRouter, Route, Routes } from "react-router-dom";

import type { Meta, StoryContext, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Header from "./";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context: StoryContext) => {
      const initialEntries =
        context.args.pageTitle === "Tasks" ? ["/new-tasks"] : ["/"];
      return (
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route path="/" element={<Story />} />
            <Route path="/new-tasks" element={<Story />} />
          </Routes>
        </MemoryRouter>
      );
    },
  ],
  argTypes: {
    onTaskCreate: fn(),
  },
  args: { onTaskCreate: fn() },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defautl: Story = {
  args: {
    onTaskCreate: fn(),
  },
};
