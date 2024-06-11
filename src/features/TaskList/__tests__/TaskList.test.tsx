import { rest } from "msw";

import { screen, waitFor } from "@testing-library/react";

import { server } from "../../../config/server";
import { API_URL } from "../../../data/config";
import { render } from "../../../utils/TestCustomRender";
import TasksList from "../index";

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

  test.skip("handles server error", async () => {
    // todo
    server.use(
      rest.get(`${API_URL}tasks`, (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<TasksList />);

    await waitFor(() => {
      expect(
        screen.getByText("Erro ao buscar as tarefas.")
      ).toBeInTheDocument();
    });
  });
});
