import AppContainer from "../../components/ContentContainer";
import ErrorPage from "../../components/ErrorComponent";
import TasksList from "../../features/TaskList";
import { useTasks } from "../../hooks/useTasks";

function Home() {
  const { status } = useTasks();
  return (
    <AppContainer>
      {status === "error" ? <ErrorPage /> : <TasksList />}
    </AppContainer>
  );
}

export default Home;
