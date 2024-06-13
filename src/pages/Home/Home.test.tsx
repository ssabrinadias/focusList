import { render, screen } from "@testing-library/react";

import { useTasks } from "../../hooks/useTasks";

import Home from ".";

jest.mock("../../hooks/useTasks", () => ({
  useTasks: jest.fn(),
}));

describe("Home component", () => {
  test("should render ErrorPage when status is error", () => {
    (useTasks as jest.Mock).mockReturnValue({ status: "error" });

    render(<Home />);

    expect(screen.getByText(/Algo deu errado/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /A API não está respondendo. Por favor, tente novamente mais tarde/i
      )
    ).toBeInTheDocument();
    expect(screen.queryByText(/tasks list/i)).toBeNull();
  });

  test("should render TasksList when status is not error", () => {
    (useTasks as jest.Mock).mockReturnValue({ status: "success" });

    render(<Home />);

    expect(screen.getByText(/Nenhuma tarefa encontrada/i)).toBeInTheDocument();
  });
});
