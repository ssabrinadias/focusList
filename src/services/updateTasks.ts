import axios from "axios";

import { API_URL } from "../data/config";
import { ITask } from "../interfaces/tasks";

interface TaskData {
  status: string;
}

export const updateTask = async (
  taskId: number,
  taskData: TaskData
): Promise<ITask> => {
  try {
    const response = await axios.put<ITask>(
      `${API_URL}tasks/${taskId}`,
      taskData
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar a tarefa:", error);
    throw error;
  }
};
