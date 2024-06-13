import { rest } from "msw";

import { fireEvent, screen, waitFor, within } from "@testing-library/react";

import { server } from "../../../config/server";
import { API_URL } from "../../../data/config";
import { render } from "../../../utils/TestCustomRender";
import TasksList from "../index";
const mockTasks = [
  {
    id: "1",
    title: "Test Task 1",
    description: "Description 1",
    status: "todo",
  },
  {
    id: "2",
    title: "Another Task 2",
    description: "Description 2",
    status: "done",
  },
  {
    id: "3",
    title: "Sample Task 3",
    description: "Description 3",
    status: "todo",
  },
];
describe("TasksList Component", () => {
  test("renders tasks when API returns data", async () => {
    render(<TasksList />);

    await waitFor(() => {
      expect(screen.getByText("title 1")).toBeInTheDocument();
    });

    expect(screen.getByText("description 1")).toBeInTheDocument();
  });

  test("renders NoTasksPlaceholder when there are no tasks", async () => {
    server.use(
      rest.get(`${API_URL}tasks`, (_, res, ctx) => {
        return res(ctx.json([]));
      })
    );

    render(<TasksList />);

    await waitFor(() => {
      expect(screen.getByText("Nenhuma tarefa encontrada")).toBeInTheDocument();
    });
  });

  test("should show tasks and fetch and clear fields correctly", async () => {
    server.use(
      rest.get(`${API_URL}tasks`, (_, res, ctx) => {
        return res(ctx.json(mockTasks));
      })
    );
    render(<TasksList />);

    await waitFor(() => {
      expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    });
    const searchButton = screen.getByTestId("SearchIcon");

    expect(screen.getByText("Another Task 2")).toBeInTheDocument();
    expect(screen.getByText("Sample Task 3")).toBeInTheDocument();

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "Test" } });
    fireEvent.click(searchButton);
    const list = screen.getByRole("list");
    const tasks = within(list).getAllByRole("listitem");

    expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    expect(tasks.length).toBe(1);

    const clearBtn = screen.getByTestId("ClearIcon");

    expect(clearBtn).toBeDefined();
    fireEvent.click(clearBtn);

    expect(within(list).getAllByRole("listitem").length).toBe(3);
    expect(screen.getByText("Another Task 2")).toBeInTheDocument();
    expect(screen.getByText("Sample Task 3")).toBeInTheDocument();
  });
  test("should return default text if the search did not find a task", async () => {
    server.use(
      rest.get(`${API_URL}tasks`, (_, res, ctx) => {
        return res(ctx.json(mockTasks));
      })
    );
    render(<TasksList />);

    await waitFor(() => {
      expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    });
    const searchButton = screen.getByTestId("SearchIcon");

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, {
      target: { value: "task that does not exist" },
    });
    fireEvent.click(searchButton);
    expect(
      screen.getByRole("heading", {
        name: /nenhuma tarefa encontrada/i,
      })
    ).toBeInTheDocument();
  });
});
