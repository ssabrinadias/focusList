import AppContainer from "../../components/ContentContainer";
import ErrorPage from "../../ErrorComponent";
import TasksList from "../../features/TaskList";
import { useTasks } from "../../hooks/useTasks";

function Home() {
  const { isSuccess, status } = useTasks();
  console.log(isSuccess, status);
  return (
    <AppContainer>
      {status === "error" ? <ErrorPage /> : <TasksList />}
    </AppContainer>
  );
}

export default Home;
