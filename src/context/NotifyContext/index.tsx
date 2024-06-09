import { FC, ReactNode } from "react";

import { useToastNotify } from "../../components/TostyNotify";

import ToastContext from "./ToastContext";

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const { ToastContainer, showToast } = useToastNotify();
  const contextValue = {
    showToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {ToastContainer}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
