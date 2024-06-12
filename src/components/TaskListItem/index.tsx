import React, { useEffect } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import { useToast } from "../../context/NotifyContext/useToast";
import useUpdateTask from "../../hooks/useUpdateTasks";
import TaskStatusIcon from "../TaskIcon";

import { ITaskListItemProps } from "./interface";
import { useStyles } from "./styles";

const TaskListItem: React.FC<ITaskListItemProps> = ({ task }) => {
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
      setChecked((prev) => !prev);
    }
  }, [isError, isSuccess, showToast, status]);

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
            color="default"
          />
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskListItem;
