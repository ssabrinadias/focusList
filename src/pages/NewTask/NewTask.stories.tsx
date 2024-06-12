import { MemoryRouter } from "react-router-dom";

import { Meta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import NewTask from ".";

const queryClient = new QueryClient();
const meta: Meta = {
  title: "Pages/NewTask",
  component: NewTask,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => (
  <MemoryRouter initialEntries={["/"]}>
    <QueryClientProvider client={queryClient}>
      <NewTask />
    </QueryClientProvider>
  </MemoryRouter>
);
