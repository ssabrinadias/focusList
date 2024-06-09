import { createContext } from "react";

type ToastType = "success" | "error" | "warning" | "info";
interface ToastContextData {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextData | undefined>(
  {} as ToastContextData
);

export default ToastContext;
