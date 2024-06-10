import { useMutation } from "@tanstack/react-query";

import { updateTask } from "../services/updateTasks";

interface IAddItemRequest {
  id: number;
  status: string;
}
const useUpdateTask = () => {
  return useMutation({
    mutationFn: (payload: IAddItemRequest) => {
      return updateTask(payload.id, { status: payload.status });
    },
    onError: (error) => console.log("erro", error),
  });
};

export default useUpdateTask;
