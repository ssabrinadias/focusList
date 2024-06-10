import React, { ReactNode } from "react"; // re-export everything
export * from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";

const queryClient = new QueryClient();

const AllTheProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export { customRender as render };
