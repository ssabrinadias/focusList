import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useTasks } from '../../hooks/useTasks';
import NoTasksPlaceholder from '../NoTasksPlaceholder';

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

function TasksList() {
  const { data: tasks } = useTasks();

  const classes = useStyles();

  return (
    <List>
      {tasks?.length ? (
        tasks?.map((task, id) => (
          <ListItem key={task.id + id} button className={classes.root}>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={task.title}
              secondary={task.description ? task.description : null}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => console.log('edit')}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => console.log('delete')}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <NoTasksPlaceholder />
      )}
    </List>
  );
}

export default TasksList;
