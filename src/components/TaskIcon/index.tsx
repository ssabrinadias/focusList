import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { getTaskStatusColor } from './statusColor';

type ValidColorKeys = 'disabled' | 'action' | 'inherit' | 'primary' | 'secondary' | 'error' | undefined;


const TaskStatusIcon = ({ status }:{status:string}) => {
  return (
     <CheckCircleIcon color={getTaskStatusColor(status) as ValidColorKeys} />
  );
};

export default TaskStatusIcon;
