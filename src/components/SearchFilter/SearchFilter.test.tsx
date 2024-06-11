import { fireEvent, render, screen } from "@testing-library/react";

import Search from "./index";

describe("Search Component", () => {
  it("should render the search input", () => {
    render(<Search onSearch={jest.fn()} />);
    expect(
      screen.getByPlaceholderText("Procurando tarefas...")
    ).toBeInTheDocument();
  });

  it("should render the search icon by default", () => {
    render(<Search onSearch={jest.fn()} />);
    expect(screen.getByTestId("SearchIcon")).toBeInTheDocument();
  });
  it("should call onSearch with the input value when the search icon is clicked", () => {
    const onSearch = jest.fn();
    render(<Search onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Procurando tarefas...");
    const searchButton = screen.getByTestId("SearchIcon");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(searchButton);

    expect(onSearch).toHaveBeenCalledWith("Test Task");
  });
  it("should render the clear icon after performing a search", () => {
    render(<Search onSearch={jest.fn()} />);

    const input = screen.getByPlaceholderText("Procurando tarefas...");
    const searchButton = screen.getByTestId("SearchIcon");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(searchButton);

    expect(screen.getByTestId("ClearIcon")).toBeInTheDocument();
  });
  it("should call onSearch with an empty string when the clear icon is clicked", () => {
    const onSearch = jest.fn();
    render(<Search onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Procurando tarefas...");
    const searchButton = screen.getByTestId("SearchIcon");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(searchButton);

    const clearButton = screen.getByTestId("ClearIcon");
    fireEvent.click(clearButton);

    expect(onSearch).toHaveBeenCalledWith("");
    expect(input).toHaveValue("");
  });
});
