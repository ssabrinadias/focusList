import { useMemo, useState } from "react";

import List from "@material-ui/core/List";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import NoTasksPlaceholder from "../../components/NoTasksComponent";
import Search from "../../components/SearchFilter";
import TaskListItem from "../../components/TaskListItem";
import { useTasks } from "../../hooks/useTasks";
import { ITask } from "../../interfaces/tasks";

import { useStyles } from "./style";

function TasksList() {
  const classes = useStyles();
  const { data: tasks, isLoading } = useTasks();

  const [filteredTasks, setFilteredTasks] = useState<undefined | ITask[]>(
    undefined
  );

  const handleSearch = (query: string) => {
    if (query.trim()) {
      const filtered = tasks?.filter((task) =>
        task.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(undefined);
    }
  };

  const originalData = useMemo(() => {
    const taskInt = tasks?.map((task) => (
      <TaskListItem key={task.id} task={task} />
    ));

    return taskInt;
  }, [tasks]);

  const filteredData = useMemo(() => {
    const taskInt = filteredTasks?.map((task) => (
      <TaskListItem key={task.id} task={task} />
    ));
    return taskInt;
  }, [filteredTasks]);

  const tasksFiltered = filteredTasks ? filteredData : originalData;
  return (
    <>
      <Search onSearch={handleSearch} />
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
        ) : tasksFiltered?.length ? (
          tasksFiltered
        ) : (
          <NoTasksPlaceholder />
        )}
      </List>
    </>
  );
}

export default TasksList;
