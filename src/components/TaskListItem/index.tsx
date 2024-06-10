// src/components/TaskListItem.tsx
import React from "react";

import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import TaskStatusIcon from "../TaskIcon";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 16,
    padding: 16,
    boxShadow: theme.shadows[3],
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

  return (
    <ListItem key={task.id} button className={classes.root}>
      <ListItemIcon>
        <TaskStatusIcon status={task.status} />
      </ListItemIcon>
      <ListItemText
        primary={task.title}
        secondary={task.description ? task.description : null}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={() => console.log("edit")}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => console.log("delete")}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskListItem;
