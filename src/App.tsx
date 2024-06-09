import { useState } from "react";
import { FunctionComponent } from "react";

import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { APP_MODE } from "./data/config";
import AppRoutes from "./pages/router";
import theme from "./styles/theme";

const App: FunctionComponent = () => {
  if (APP_MODE === "development") {
    import("./__mocks__").catch((error) => {
      console.error("Erro ao importar os mocks:", error);
    });
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
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
