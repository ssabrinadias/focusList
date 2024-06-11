import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { getTaskStatusColor } from "./statusColor";

type status = "done" | "todo";

const TaskStatusIcon = ({ status }: { status: status }) => {
  return <CheckCircleIcon color={getTaskStatusColor(status)} />;
};

export default TaskStatusIcon;
