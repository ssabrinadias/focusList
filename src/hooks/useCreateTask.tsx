import { useMutation } from "@tanstack/react-query";

import { createTask } from "../services/createTaks";
import { setTasksStatus } from "../utils/setTasksStatus";

interface ITaskData {
  title: string;
  description: string;
  status: string;
  active: boolean;
}
interface IAddItemRequest {
  title: string;
  description: string;
}
const useCreateTask = () => {
  return useMutation({
    mutationFn: (payload: IAddItemRequest) => {
      const payloadFormat: ITaskData = {
        ...payload,
        ...setTasksStatus("create"),
      };
      return createTask(payloadFormat);
    },
    onError: (error) => console.error(error),
  });
};

export default useCreateTask;
