import { MemoryRouter } from "react-router-dom";

import { Meta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from ".";

const queryClient = new QueryClient();
const meta: Meta = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;

export default meta;

export const Default = () => (
  <MemoryRouter initialEntries={["/"]}>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </MemoryRouter>
);
