import { deepPurple } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: {
      main: '#64b5f6',
    },
  },
});

export default theme;
