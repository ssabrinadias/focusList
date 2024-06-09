import { useMutation } from "@tanstack/react-query";

import { createTask } from "../services/createTaks"; // Supondo que seu serviço de criação de tarefas seja createTask.ts

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
        status: "todo",
        active: true,
      };
      return createTask(payloadFormat);
    },
    onError: (error) => console.log("erro", error),
  });
};

export default useCreateTask;
