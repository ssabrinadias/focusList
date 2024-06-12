import { rest } from "msw";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { server } from "../../config/server";
import ToastProvider from "../../context/NotifyContext";
import { useToast } from "../../context/NotifyContext/useToast";

import TaskListItem from "./index";
import { ITaskListItemProps } from "./interface";

const mockTask: ITaskListItemProps["task"] = {
  id: 1,
  title: "Test Task",
  description: "This is a test task",
  status: "todo",
};

jest.mock("../../context/NotifyContext/useToast");
describe("TaskListItem", () => {
  const mockShowToast = jest.fn();
  beforeEach(() => {
    (useToast as jest.Mock).mockReturnValue({ showToast: mockShowToast });
  });
  test("renders TaskListItem and toggles status", async () => {
    // const mutateMock = jest.fn();

    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <TaskListItem task={mockTask} />
        </ToastProvider>
      </QueryClientProvider>
    );
    const titleElements = screen.getAllByText(/Test Task/i);
    expect(titleElements[0]).toBeInTheDocument();

    const descriptionElements = screen.getAllByText(/This is a test task/i);
    expect(descriptionElements[0]).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox", {
      name: /mark task as completed/i,
    });
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(
        screen.getByRole("checkbox", {
          name: /mark task as completed/i,
        })
      ).toBeChecked();
    });
  });
  test("renders TaskListItem and not toggles status", async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <TaskListItem task={mockTask} />
        </ToastProvider>
      </QueryClientProvider>
    );

    const checkbox = screen.getByRole("checkbox", {
      name: /mark task as completed/i,
    });
    fireEvent.click(checkbox);
    server.use(
      rest.put(
        "https://6664c2d2932baf9032ac056c.mockapi.io/tasks/:taskId",
        (_, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "text for test" }));
        }
      )
    );
    await waitFor(() => {
      expect(
        screen.getByRole("checkbox", {
          name: /mark task as completed/i,
        })
      ).not.toBeChecked();
    });

    expect(mockShowToast).toHaveBeenCalledWith("Erro ao atualizar");
  });
});
