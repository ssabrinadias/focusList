import { deepPurple, grey } from "@material-ui/core/colors";

const statusColors: Record<string, string> = {
  canceled: grey[100],
  done: deepPurple[500],
};

export const getTaskStatusColor = (status: string): string => {
  return statusColors[status] || "primary";
};
