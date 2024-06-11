import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import useCreateTask from "../useCreateTask";

jest.mock("../../services/createTaks");

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
import { createTask } from "../../services/createTaks";

describe("useCreateTask", () => {
  it("should create a new task successfully", async () => {
    const { result } = renderHook(() => useCreateTask(), { wrapper });
    const { mutate } = result.current;

    mutate({
      title: "Test Task",
      description: "Test Description",
    });
    await waitFor(() => result.current.isError);

    expect(result.current.isError).toBe(false);
    expect(result.current.error).toEqual(null);
  });
  it("should create a new task Error", async () => {
    const error = new Error("Failed to create task");
    (createTask as jest.Mock).mockRejectedValue(error);
    const { result } = renderHook(() => useCreateTask(), { wrapper });
    const { mutate } = result.current;

    mutate({
      title: "Test Task",
      description: "Test Description",
    });
    await waitFor(() => result.current.isError);

    expect(result.current.isError).toBe(true);
  });
});
