import { MemoryRouter } from "react-router-dom";

import List from "@material-ui/core/List";
import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import TaskListItem from "./index";
import { ITaskListItemProps } from "./interface";

const queryClient = new QueryClient();

const meta: Meta<typeof TaskListItem> = {
  title: "Components/TaskListItem",
  component: TaskListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    task: {
      id: 1,
      title: "Sample Task",
      description: "This is a sample task description.",
      status: "todo",
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <List>
            <Story />
          </List>
        </QueryClientProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

const task: ITaskListItemProps["task"] = {
  id: 1,
  title: "Sample Task",
  description: "This is a sample task description.",
  status: "todo",
};

type Story = StoryObj<typeof TaskListItem>;

export const TodoTask: Story = {
  args: {
    task: { ...task, status: "todo" },
  },
};

export const DoneTask: Story = {
  args: {
    task: { ...task, status: "done" },
  },
};
