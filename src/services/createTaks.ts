import axios from "axios";

import { API_URL } from "../data/config";
import { ITask } from "../interfaces/tasks";

interface TaskData {
  title: string;
  description: string;
  status: string;
  active: boolean;
}

export const createTask = async (taskData: TaskData): Promise<ITask> => {
  try {
    const response = await axios.post<ITask>(`${API_URL}tasks`, taskData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar a tarefa:", error);
    throw error;
  }
};
