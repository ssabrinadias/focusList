import { makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) => ({
  skeleton: {
    width: "100%",
    boxShadow: theme.shadows[3],
  },
}));
