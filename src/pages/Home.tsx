import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';

import TasksList from '../components/TasksList';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    boxShadow: theme.shadows[3],
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
