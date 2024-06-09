import { ThemeProvider } from '@material-ui/styles';

import AppRoutes from './routes/AppRoutes';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
