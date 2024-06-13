export interface ITaskStatus {
  status: string;
  active: boolean;
}

const taskStatusMap: Record<string, ITaskStatus> = {
  create: { status: "todo", active: true },
  done: { status: "done", active: false },
  todo: { status: "todo", active: false },
};

function setTasksStatus(action: string): ITaskStatus {
  return taskStatusMap[action] || null;
}

export { setTasksStatus };
