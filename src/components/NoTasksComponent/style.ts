import { makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    boxShadow: theme.shadows[3],
    textAlign: "center",
  },
}));
