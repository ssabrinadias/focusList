import { makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 16,
    padding: 16,
    boxShadow: theme.shadows[3],
    transition: "opacity 0.3s, background-color 0.3s",
  },
  completed: {
    opacity: 0.5,
    backgroundColor: theme.palette.action.disabledBackground,
    cursor: "default",
  },
  spinner: {
    zIndex: 2,
    marginTop: "10px",
    marginLeft: "15px",
  },
}));
