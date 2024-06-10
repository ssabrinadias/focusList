import React, { useEffect } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { useToast } from "../../context/NotifyContext/useToast";
import useUpdateTask from "../../hooks/useUpdateTasks";
import TaskStatusIcon from "../TaskIcon";

const useStyles = makeStyles((theme: Theme) => ({
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

interface TaskListItemProps {
  task: {
    id: number;
    title: string;
    description?: string;
    status: string;
  };
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(task.status === "done");
  const {
    mutate: updateStatus,
    isError,
    isSuccess,
    status,
    isPending,
  } = useUpdateTask();
  const { showToast } = useToast();

  const handleToggle = () => {
    updateStatus({ id: task.id, status: checked ? "todo" : "done" });
  };

  useEffect(() => {
    if (isError) {
      showToast("Erro ao atualizar");
    }
    if (isSuccess) {
      console.log("entra aui?", isSuccess, status);
      setChecked((prev) => !prev);
    }
  }, [status]);

  return (
    <ListItem
      key={task.id}
      button
      className={`${classes.root} ${checked ? classes.completed : ""}`}
    >
      <ListItemIcon>
        <TaskStatusIcon status={task.status} />
      </ListItemIcon>
      <ListItemText
        primary={task.title}
        secondary={task.description ? task.description : null}
      />
      <ListItemSecondaryAction>
        {isPending ? (
          <CircularProgress size={24} className={classes.spinner} />
        ) : (
          <Checkbox
            edge="end"
            checked={checked}
            onChange={handleToggle}
            inputProps={{ "aria-label": "Mark task as completed" }}
          />
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskListItem;
