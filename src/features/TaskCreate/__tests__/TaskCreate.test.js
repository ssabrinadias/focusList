import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskCreate from "../../TaskCreate";
import { useToast } from "../../../context/NotifyContext/useToast";
import useCreateTask from "../../../hooks/useCreateTask";
import { useNavigate } from "react-router-dom";

// Mocks
jest.mock("../../../context/NotifyContext/useToast");
jest.mock("../../../hooks/useCreateTask");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
jest.mock("../../../data/config", () => ({
  APP_MODE: "development",
}));

describe("TaskCreate Component", () => {
  const mockShowToast = jest.fn();
  const mockMutate = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useToast.mockReturnValue({ showToast: mockShowToast });
    useCreateTask.mockReturnValue({
      mutate: mockMutate,
      isSuccess: true,
      isError: false,
    });
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("submits form with correct values and redirect to /", async () => {
    const { container } = render(<TaskCreate />);

    // Find title and description inputs
    const addButton = screen.getByRole("button", { name: "Add Task" });
    const titleInput = container.querySelector('input[name="title"]');
    const descriptionInput = container.querySelector(
      'textarea[name="description"]'
    );
    // Fill form
    fireEvent.change(titleInput, { target: { value: "Test: Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test: Description" },
    });

    fireEvent.click(addButton);

    await waitFor(() => {
      expect(window.location.href).toContain("http://localhost/");
      expect(mockShowToast).toHaveBeenCalledWith("Nova task criada!");
    });
  });

  test("displays error toast on submission error", async () => {
    useCreateTask.mockReturnValueOnce({
      mutate: mockMutate,
      isSuccess: false,
      isError: true,
    });

    const { container } = render(<TaskCreate />);

    // Find title and description inputs
    const addButton = screen.getByRole("button", { name: "Add Task" });
    const titleInput = container.querySelector('input[name="title"]');
    const descriptionInput = container.querySelector(
      'textarea[name="description"]'
    );
    // Fill form
    fireEvent.change(titleInput, { target: { value: "Test: Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test: Description" },
    });
    fireEvent.click(addButton);

    // Wait for form submission
    await waitFor(() => {
      expect(mockShowToast).toHaveBeenCalledWith("Erro ao criar a task!");
    });
  });
});
