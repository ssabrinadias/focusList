import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { getTaskStatusColor } from "./statusColor";

export type Status = "done" | "todo";

const TaskStatusIcon = ({ status }: { status: Status }) => {
  return <CheckCircleIcon color={getTaskStatusColor(status)} />;
};

export default TaskStatusIcon;
