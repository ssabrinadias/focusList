import { useState } from "react";
import { FunctionComponent } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ErrorComponent from "./components/ErrorComponent";
import ToastProvider from "./context/NotifyContext";
import { MOCK } from "./data/config";
import AppRoutes from "./pages/router";
import theme from "./styles/theme";

const App: FunctionComponent = () => {
  if (MOCK === "mocked") {
    import("./config");
  }

  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 3,
        },
      },
    })
  );
  return (
    <ErrorBoundary fallback={<ErrorComponent/>}>
      <ToastProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
          </QueryClientProvider>
        </ThemeProvider>
      </ToastProvider>
    </ErrorBoundary>
  
  );
};

export default App;
