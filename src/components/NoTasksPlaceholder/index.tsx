import React from "react";

import Typography from "@material-ui/core/Typography";

import { useStyles } from "./style";

const NoTasksPlaceholder: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">Nenhuma tarefa encontrada</Typography>
    </div>
  );
};

export default NoTasksPlaceholder;
