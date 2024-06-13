import { fireEvent, render, screen } from "@testing-library/react";

import ErrorPage from "./";

describe("ErrorPage component", () => {
  let originalLocation: Location;
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { reload: jest.fn() },
    });
  });
  afterEach(() => {
    window.location = originalLocation;
  });

  test("should render ErrorOutlineIcon, Typography, and Button", () => {
    render(<ErrorPage />);

    expect(screen.getByText(/algo deu errado/i)).toBeInTheDocument();
    expect(screen.getByText(/a api não está respondendo/i)).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /tentar novamente/i });
    expect(button).toBeInTheDocument();
  });

  test("should call window.location.reload when button is clicked", () => {
    render(<ErrorPage />);
    const button = screen.getByRole("button", { name: /tentar novamente/i });

    fireEvent.click(button);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(window.location.reload).toHaveBeenCalled();
  });
});
