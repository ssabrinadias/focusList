import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

