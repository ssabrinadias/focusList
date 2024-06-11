export type StatusIcon = "done" | "todo";
export interface ITaskListItemProps {
  task: {
    id: number;
    title: string;
    description?: string;
    status: StatusIcon;
  };
}
