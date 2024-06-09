import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import TasksList from "../components/TasksList";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <TasksList />
    </Container>
  );
}

export default Home;
