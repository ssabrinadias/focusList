import { useState } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoutes from './routes/AppRoutes';
import theme from './styles/theme';

function App() {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 3,
        },
      },
    }),
  );
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
