import List from "@material-ui/core/List";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import NoTasksPlaceholder from "../../components/NoTasksPlaceholder";
import TaskListItem from "../../components/TaskListItem";
import { useTasks } from "../../hooks/useTasks";

const useStyles = makeStyles((theme: Theme) => ({
  skeleton: {
    width: "100%",
    boxShadow: theme.shadows[3],
  },
}));

function TasksList() {
  const classes = useStyles();
  const { data: tasks, isLoading } = useTasks();
  return (
    <List>
      {isLoading ? (
        <Stack spacing={1} sx={{ marginTop: "30px" }}>
          {Array.from(new Array(5)).map((_, index) => (
            <Skeleton
              variant="rectangular"
              className={classes.skeleton}
              height={80}
              key={index}
              sx={{ marginTop: "30px" }}
            />
          ))}
        </Stack>
      ) : tasks?.length ? (
        tasks.map((task, id) => <TaskListItem key={task.id + id} task={task} />)
      ) : (
        <NoTasksPlaceholder />
      )}
    </List>
  );
}

export default TasksList;
