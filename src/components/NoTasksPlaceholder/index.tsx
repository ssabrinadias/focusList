import React from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    boxShadow: theme.shadows[3],
    textAlign: "center",
  },
}));

const NoTasksPlaceholder: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">Nenhuma tarefa encontrada</Typography>
    </div>
  );
};

export default NoTasksPlaceholder;
