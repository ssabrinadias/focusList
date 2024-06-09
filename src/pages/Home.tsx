import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import TasksList from '../components/TasksList';

const useStyles = makeStyles({
  root: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
  },
  button: {
    marginTop: 16,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <TasksList />
    </Container>
  );
}

export default Home;
