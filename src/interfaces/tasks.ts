export type StatusIcon = "done" | "todo";

export interface ITask {
  id: number;
  createdAt: string;
  title: string;
  description: string;
  status: StatusIcon;
  active: boolean;
}
