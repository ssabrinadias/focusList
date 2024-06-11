const statusColors: Record<string, ValidColorKeys> = {
  todo: "primary",
  done: "disabled",
};

type ValidColorKeys =
  | "disabled"
  | "action"
  | "inherit"
  | "primary"
  | "secondary"
  | "error"
  | undefined;

export const getTaskStatusColor = (status: string): ValidColorKeys => {
  return statusColors[status] ?? "primary";
};
