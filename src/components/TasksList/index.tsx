import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useTasks } from '../../hooks/useTasks';

function TasksList() {
  const{ data } = useTasks()

  console.log(data)

  return (
    <List>
      <ListItem key={'item.id'} button>
        <ListItemIcon>
          <CheckCircleIcon color="primary" />
        </ListItemIcon>

        <ListItemText primary={'item.value'} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit" onClick={() => console.log('edit')}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => console.log('delete')}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default TasksList;
