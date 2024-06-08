import { createTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: {
      main: "#64b5f6",
    },
  },
});


export default theme;