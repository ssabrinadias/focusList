import List from "@material-ui/core/List";

import NoTasksPlaceholder from "../../components/NoTasksPlaceholder";
import TaskListItem from "../../components/TaskListItem";
import { useTasks } from "../../hooks/useTasks";

function TasksList() {
  const { data: tasks } = useTasks();
  return (
    <List>
      {tasks?.length ? (
        tasks.map((task, id) => <TaskListItem key={task.id + id} task={task} />)
      ) : (
        <NoTasksPlaceholder />
      )}
    </List>
  );
}

export default TasksList;
