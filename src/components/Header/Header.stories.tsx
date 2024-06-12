import { MemoryRouter, Route, Routes } from "react-router-dom";

import type { Meta, StoryContext, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Header from "./";

const meta = {
  title: "Components/Header",
  component: Header,

  tags: ["autodocs"],
  decorators: [
    (Story, context: StoryContext) => {
      const initialEntries =
        context.args.pageTitle === "Tasks" ? ["/new-tasks"] : ["/"];
      return (
        <MemoryRouter initialEntries={initialEntries}>
          <Story />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/new-tasks" element={<></>} />
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
