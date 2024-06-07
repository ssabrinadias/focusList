import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

test("renders To Do List text", () => {
  render(<App />);
  const helloWorldText = screen.getByText(/To Do List/i);
  expect(helloWorldText).toBeInTheDocument();
});
