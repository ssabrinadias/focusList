import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import useUpdateTask from "../useUpdateTasks";

jest.mock("../../services/createTaks");

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AllTheProviders>{children}</AllTheProviders>
);
import { rest } from "msw";

import { server } from "../../config/server";
import { AllTheProviders } from "../../utils/ProvidersForTest";

describe("useUpdateTask", () => {
  it("should update task done successfully", async () => {
    const { result } = renderHook(() => useUpdateTask(), { wrapper });
    const { mutate } = result.current;

    mutate({ id: 1, status: "done" });
    await waitFor(() => result.current.isError);

    expect(result.current.isError).toBe(false);
    expect(result.current.error).toEqual(null);
  });
  it("should create a new task Error", async () => {
    server.use(
      rest.put(
        "https://6664c2d2932baf9032ac056c.mockapi.io/tasks/:taskId",
        (_, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "text for test" }));
        }
      )
    );
    const { result } = renderHook(() => useUpdateTask(), { wrapper });
    const { mutate } = result.current;

    mutate({ id: 1, status: "todo" });
    await waitFor(() => result.current.isError);

    expect(result.current.isError).toBe(true);
  });
});
