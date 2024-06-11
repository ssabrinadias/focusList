import { toast, ToastContainer, ToastOptions } from "react-toastify";

import "./style";

type ToastType = "info" | "success" | "warning" | "error";

const useToastNotify = () => {
  const showToast = (
    message: string,
    type: ToastType = "info",
    config?: ToastOptions
  ) => {
    switch (type) {
      case "success":
        toast.success(message, config);
        break;
      case "info":
        toast.info(message, config);
        break;
      case "warning":
        toast.warning(message, config);
        break;
      case "error":
        toast.error(message, config);
        break;
      default:
        toast(message, config);
    }
  };

  return { showToast, ToastContainer: <ToastContainer /> };
};

export { useToastNotify };
