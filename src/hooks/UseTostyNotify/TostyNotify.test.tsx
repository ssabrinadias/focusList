import { toast } from "react-toastify";

import { waitFor } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";

import ToastContext from "../../context/NotifyContext/ToastContext";
import { useToast } from "../../context/NotifyContext/useToast";
import { AllTheProviders } from "../../utils/ProvidersForTest";
import { useToastNotify } from "../UseTostyNotify";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    info: jest.fn(),
    warning: jest.fn(),
    error: jest.fn(),
  },
  ToastContainer: jest.fn(() => <div>Mocked ToastContainer</div>),
}));

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AllTheProviders>{children}</AllTheProviders>
);

describe("useToastNotify", () => {
  it("should not throw an error if used within ToastProvider", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ToastContext.Provider value={{ showToast: jest.fn() }}>
        {children}
      </ToastContext.Provider>
    );

    const { result } = renderHook(() => useToast(), { wrapper });

    expect(result.error).toBeUndefined();
  });

  it("should show a success toast", async () => {
    const { result } = renderHook(() => useToastNotify(), { wrapper });

    act(() => {
      result.current.showToast("Success message", "success");
    });

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("Success message", undefined);
    });
  });

  it("should show an info toast", async () => {
    const { result } = renderHook(() => useToastNotify(), { wrapper });

    act(() => {
      result.current.showToast("Info message", "info");
    });

    await waitFor(() => {
      expect(toast.info).toHaveBeenCalledWith("Info message", undefined);
    });
  });

  it("should show a warning toast", async () => {
    const { result } = renderHook(() => useToastNotify(), { wrapper });

    act(() => {
      result.current.showToast("Warning message", "warning");
    });

    await waitFor(() => {
      expect(toast.warning).toHaveBeenCalledWith("Warning message", undefined);
    });
  });

  it("should show an error toast", async () => {
    const { result } = renderHook(() => useToastNotify(), { wrapper });

    act(() => {
      result.current.showToast("Error message", "error");
    });

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Error message", undefined);
    });
  });

  it("should show a default toast", async () => {
    const { result } = renderHook(() => useToastNotify(), { wrapper });

    act(() => {
      result.current.showToast("Default message");
    });

    await waitFor(() => {
      expect(toast.info).toHaveBeenCalledWith("Default message", undefined);
    });
  });
});
