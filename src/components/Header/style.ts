import { deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(() => ({
  appBar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: deepPurple[300],
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
}));
